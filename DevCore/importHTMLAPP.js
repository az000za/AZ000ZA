function importHTMLFiles(filePaths) {
    for (const filePath of filePaths) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', filePath, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const html = xhr.responseText;
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const body = doc.body.cloneNode(true);
          document.body.appendChild(body);
        } else {
          console.error('Error importing HTML file:', filePath);
        }
      };
      xhr.send();
    }
  }