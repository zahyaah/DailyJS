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


// Callback Hell
let production = () => {
    setTimeout(()=>{
        console.log("Production has started")
        setTimeout(()=> {
            console.log("The fruit has been chopped!");
            setTimeout(()=> {
                console.log(`${stocks.liquid[1]} and ${stocks.liquid[2]} was added`);
                setTimeout(() => {
                    console.log("The machine has started");
                    setTimeout(() => {
                        console.log(`${stocks.holders[0]}`);
                        setTimeout(()=> {
                            console.log(`${stocks.toppings[0]} was placed on ${stocks.holders[0]}`);
                            setTimeout(() => {
                                console.log("Ice cream was served!");
                            }, 2000);
                        })
                    }, 2000);
                }, 1000);
            },1000)
        }, 2000);
    }, 0);
}


order(2, production);

// Solution to callback hell? Promises~