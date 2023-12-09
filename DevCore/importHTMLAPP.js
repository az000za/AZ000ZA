function importHTMLAPP(filePaths) {
  console.log(`

      function ImportHTMLAPP 

      ** gets the file somehow.
      ** converts it into a useable useable component.


      returns file name as accessible property

      example

      ./hello.js
      ./goodbye.js


      WebApps.hello(<class constructor params>);


      .............
      Will take any html file.

      all html gets harvested
      all style gets harvested
      all script get harvested

      makes a generic form ui based on
      the class methods.

      any ui this comes with will be optional to view.

      every component will be sandboxed with
      iframes
      and only be able to communicate to eachother with webrtc
      through the ui node manager.
  `);
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
