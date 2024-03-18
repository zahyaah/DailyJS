const body = document.body;

const div = document.createElement("div");
div.innerText = "Created";
body.append(div);

const span = document.createElement("span")
span.innerText = "Lorem ipsum dolor sit";
body.append(span);
body.append(document.createElement("br"));


const anchor = document.createElement("a");
anchor.setAttribute("href", "https://google.com");
anchor.setAttribute("target", "_blank");
anchor.innerText = "Googled!";
body.append(anchor);