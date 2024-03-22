const body = document.body;
let call = new XMLHttpRequest();

call.addEventListener("readystatechange", ()=>{
    if (call.readyState === 4 && call.status === 200) {
        const storeResult = JSON.parse(call.responseText);
        let ol = document.createElement("ol");
        let alternate = true;
        storeResult.forEach((res) => {
            let li = document.createElement("li");
            li.innerText = res.userId + " " + res.id + " " + res.title + " " + res.completed;
            if (alternate) {
                li.style.color = "blue";
                alternate = false;
            } else {
                li.style.color = "green"
                alternate = true;
            }
            ol.appendChild(li);
        })
        body.append(ol);
    }
    else if (call.readyState === 4) {
        alert("Error fetching results");
    }
})
call.open("GET", "https://jsonplaceholder.typicode.com/todos");
call.send();


let h3 = document.createElement("h3");
h3.innerText = "HTTP Requests [XMLHttpRequest]";
body.append(h3);

