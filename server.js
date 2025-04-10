const express = require("express");
const bodyParser = require("body-parser");
const summarize = require("./summarizer");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

const upload = multer({ dest: "uploads/" });

app.post("/summarize", async (req, res) => {
  const { text } = req.body;
  const summary = summarize(text);
  res.json({ summary });
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) return res.status(400).json({ error: "No file uploaded." });

  try {
    let text = "";

    if (file.mimetype === "application/pdf") {
      const dataBuffer = fs.readFileSync(file.path);
      const pdfData = await pdfParse(dataBuffer);
      text = pdfData.text;
    } else if (
      file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({ path: file.path });
      text = result.value;
    } else if (file.mimetype === "text/plain") {
      text = fs.readFileSync(file.path, "utf8");
    } else {
      return res.status(400).json({ error: "Unsupported file type." });
    }

    const summary = summarize(text);
    fs.unlinkSync(file.path); // Clean up uploaded file
    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
