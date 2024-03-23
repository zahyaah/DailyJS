// Basic example for callback functions
function firstCall(second_function) {
    console.log("This is going to be the function, which will be called first.");
    second_function();
}

function secondCall() {
    console.log("This function will be called later.");
}

firstCall(secondCall);

// Better example for callback function

let stocks = {
    fruits: ["strawberry", "blueberry", "passion fruit", "kiwi"],
    liquid: ["water", "cold drink", "red bull"],
    holders: ["cone", "cup", "peanuts"],
    toppings: ["chocolate", "peanuts", "cashew nuts"]
};

let order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruitName]} was selected`);
    }, 2000);

    callProduction();
}

let production = () => {
    setTimeout(()=>{
        console.log("Production has started")

        setTimeout(()=> {
            console.log("The fruit has been chopped!");
        }, 2000);
        // **screams callback hell**
    }, 0);
}


order(2, production);