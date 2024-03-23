let stock = {
    fruits: ["strawberry", "grapes", "watermelon", "blueberry", "lichi", "sapota"],
    liquid: ["water", "cold drink", "redbull"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts", "choco chips"]
};

let isShopOpen = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else
            reject("Our shop is closed");
    })
}

order(2000, () => console.log(`${stock.fruits[0]} was selected`))
    .then(() => {

        return order(0, () => console.log("Production has started"));
    })
    .then(() => {
        return order(2000, ()=> console.log("The fruit was chopped"));
    })
    .then(()=>{
        return order(1000, ()=> console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were added`));
    })
    .then(() => {
        return order(1000, () => console.log("Start the machine"));
    })
    .then(()=> {
        return order(2000, ()=> {
            console.log(`Ice cream placed on ${stock.holder[0]}`);
        })
    })
    .then(() => {
        return order(3000, ()=> {
            console.log(`${stock.topping[0]} was selected`);
        })
    })
    .then(() => {
        return order(2000, ()=> {
            console.log("Ice cream was served!");
        })
    })
    .catch(() => {
        console.log("Customer left! Alas.");
    })
    .finally(() => {
        console.log("Day ended, shop is closed!");
    })