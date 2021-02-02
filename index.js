const cart = []
class Item {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}

//add items in the cart
 function addItemtoCart(name, price, count) {

    const duplicateItem = cart.find (ele => ele.name === name)
    
    if(duplicateItem){
        cart.forEach(ele => {
            if(ele.name === name){
                ele.count+=count
                //ele.price = Math.floor(ele.price* ele.count) 
                return 
            }
        })
    }else{
        const item = new Item(name, price, count)
        cart.push(item)
    }
    
}

 
//remove 1 item
function removeSingleItemfromCart(name){
    
        cart.forEach((ele,index) => {
            if(ele.name === name){
                ele.count--
                if(ele.count=== 0){
                    cart.splice(index,1)
                    
                }
                
                
            }
        })
    
} 

addItemtoCart("apple", 1.3, 1)
addItemtoCart("apple", 1.3, 2)
addItemtoCart("pear", 1.1, 3)
removeSingleItemfromCart('apple')
removeSingleItemfromCart('apple')
removeSingleItemfromCart('apple')
 

console.log(cart)

//removeItemfromCartAll(name)


//clearCart() //clear everything


//countCart(){}


//totalCart()