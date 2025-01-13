function makeTea(typeofTea){

    return `Making ${typeofTea}`;
}

// console.log(makeTea("Black tea"));


function OrderTea(TeaType){

    function confirmOrder(){
        return `Order has confirmed for ${TeaType}`;
    }
    return confirmOrder()
}

// console.log(OrderTea("Black tea"))



// function TotalCost(price, quantity) {
     
//     return price * quantity;
// }

// console.log(TotalCost(5,5))

const totalCost = (price, quantity) => {
    return price * quantity ;
  }

 const cost = totalCost(499 , 100);
console.log(totalCost(499 , 10000))

  console.log(cost)