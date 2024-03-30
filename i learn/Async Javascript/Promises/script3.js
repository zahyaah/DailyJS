const body = document.body;

let promiseThree = new Promise((resolve, reject) => {
    const requestObject = new XMLHttpRequest();
    requestObject.addEventListener("readystatechange", () => {
        if (requestObject.status >= 200 && requestObject.status < 300 && requestObject.readyState === 4)
            resolve(JSON.parse(requestObject.responseText));
        else if (requestObject.readyState === 4)
            reject("Unable to fetch data");
    })
    requestObject.open("GET", "https://65fab3a63909a9a65b1b3cba.mockapi.io/mockAPI/zayd/users");
    requestObject.send();
})

promiseThree.then((message)=> {
    let orderedList = document.createElement("ol");
    message.forEach((text) => {
        let innerChild = document.createElement("li");
        innerChild.innerText = text.rollNumber + " " + text.firstName + " " + text.lastName + " " + text.placeOfBirth;
        innerChild.style.border = "1px solid black";
        innerChild.style.margin = "10px";
        innerChild.style.padding = "15px";
        orderedList.appendChild(innerChild);
    })
    body.appendChild(orderedList);
}).catch((error) => {
    console.log(error);
})
























