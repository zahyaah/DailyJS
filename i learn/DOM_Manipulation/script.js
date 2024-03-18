const body = document.body;

const div = document.createElement("div");
div.innerText = "Created";
div.id = "firstDiv";
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

// const img = document.createElement("img");
// img.alt = "zayd";
// img.src = "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=1380&t=st=1710785682~exp=1710786282~hmac=e155ee461076ce51ab67c367919b9e9f0ecb575c048ee04c87f839f7e5e4e94a";
// img.height = 200;
// img.width = 250;
// body.append(img);

span.dataset.newData = "cool";
// console.log(span.dataset);

anchor.style.textDecoration = "none";
anchor.style.backgroundColor = "pink";
anchor.style.border = "1px solid black";
anchor.style.padding = "10px";
anchor.style.display = "block";


div.classList.add("theOnlyClass");
