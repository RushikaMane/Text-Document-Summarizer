# 🧠 Text/Document Summarizer Web App

This project is a simple and effective **Document Summarization Web Application** built using **Node.js**, **Express**, and **NLP techniques**. It allows users to either **paste text** or **upload files (PDF, DOCX, TXT)** and receive concise, meaningful summaries.

📌 Features

- ✅ Paste or type any text to summarize
- ✅ Upload documents (.pdf, .docx, .txt)
- ✅ Dark Mode / Light Mode toggle
- ✅ Summarization using sentence scoring & keyword frequency
- ✅ Clean, responsive UI
- ✅ Built using Node.js, HTML, CSS, JavaScript


📂 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Libraries**:
  - `pdf-parse` for reading PDF files
  - `mammoth` for DOCX file extraction
  - `multer` for file uploads
  - `body-parser` for parsing request bodies


🚀 Getting Started

📥 Installation

1. Clone this repo
2. Install dependencies:
     npm install
3.Start the server:
  node server.js
4.Open index.html in your browser or use a live server.
  
📁 File Structure
📦 document-summarizer
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── summarizer.js
├── server.js
├── package.json
├── package-lock.json
└── README.md

🎯 How it Works
Text Input: Summarizes pasted or typed text.
File Upload: Parses and summarizes uploaded PDF/DOCX/TXT files.
Summarization: Uses frequency-based scoring to rank and return top sentences.
UI/UX: Includes a modern, toggleable dark mode and responsive layout.


🛠️ Future Improvements
Use advanced NLP libraries like spaCy or BERT
Add support for more languages
Provide summary length customization
Deploy on platforms like Vercel or Heroku




