// Mids are around the corner, starting from 26th of March 2024

let examsPostponed = false;

let prepare = (time, subject) => {
    return new Promise((resolve, reject) => {
        if (!examsPostponed) {
            setTimeout(() => {
                resolve(`I started preparing ${subject}\nExam over`);
            }, time);
        }
        else
            reject("Stop studying! Go have fun!");
    })
}

prepare(3000, "Web Technologies")
    .then((message)=> {
        console.log(message);
        return prepare(2000, "Compiler Design")
    })
    .then((message) => {
        console.log(message);
        return prepare(1000, "Scripting languages");
    })
    .then((message) => {
        console.log(message);
        return prepare(4000, "Sustainable Concepts of Civil Engineering");
    })
    .then((message) => {
        console.log(message);
        return prepare(2000, "Data Visulisation");
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("It stopped working.")
        console.log(error);
    })
    .finally(()=>{
        console.log("Exams over boss!");
    })

