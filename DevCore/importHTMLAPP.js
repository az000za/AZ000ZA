function importHTMLAPP(filePaths) {
  const Apps = {};
    for (const filePath of filePaths) {
      // const xhr = new XMLHttpRequest();
      // xhr.open('GET', filePath, true);
      // xhr.onload = function() {
      //   if (xhr.status === 200) {
      //     const html = xhr.responseText;
      //     const parser = new DOMParser();
      //     const doc = parser.parseFromString(html, 'text/html');
      //     const body = doc.body.cloneNode(true);
      //     document.body.appendChild(body);

      //     console.log("imported ", filePath);
      //     console.log(html);

      //     Apps[AppName] = function(){
      //       return html;
      //     }

      //   } else {
      //     console.error('Error importing HTML file:', filePath);
      //   }
      // };
      // xhr.send();
      // const fileName = document.URL.split('/').pop();
      // alert(fileName);
      const url = filePath;
      fetch(url, {
        mode: "no-cors"
      })
      .then(response => response.text())
      .then(data => console.log('data', data))
      .catch(error => console.error(error));
    }
    return Apps;
  }