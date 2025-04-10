function summarize() {
    const inputText = document.getElementById('inputText').value;
  
    fetch('/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('summaryOutput').innerText = data.summary || 'No summary found.';
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('summaryOutput').innerText = 'An error occurred while summarizing.';
    });
  }
  
  function toggleMode() {
    const body = document.body;
    const modeLabel = document.getElementById("modeLabel");
    body.classList.toggle("dark");
  
    if (body.classList.contains("dark")) {
      modeLabel.textContent = "🌙 Dark Mode";
    } else {
      modeLabel.textContent = "🌞 Light Mode";
    }
  }
  
  function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Please select a file first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("summaryOutput").innerText =
          data.summary || "No summary found.";
      })
      .catch((err) => {
        console.error(err);
        document.getElementById("summaryOutput").innerText =
          "An error occurred during file upload.";
      });
  }
  