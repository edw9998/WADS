/*
The Fetch API interface allows web browser to make HTTP requests to web servers.
The request can be of any APIs that returns the data of the format JSON or XML. 
This method returns a promise.
*/

// Example : getting a JSON object with latest commits from GitHub
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].author.login));