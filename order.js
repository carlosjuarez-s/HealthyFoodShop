window.addEventListener("DOMContentLoaded", () => {
    const order = localStorage.getItem("order");
    
    if(order) {
        const catalogOrder = JSON.parse(order);
        const orderSelected = document.querySelector(".order-selected");
        orderSelected.querySelector(".title").innerText = catalogOrder.title;
        orderSelected.querySelector(".price").innerText = catalogOrder.price;
        
        const yourOrder = document.querySelector(".your-order");
        yourOrder.setAttribute("value", catalogOrder.title + " " + catalogOrder.price + " " + "#" + catalogOrder.id);

        console.log(yourOrder);


        const img = orderSelected.querySelector("img");
        img.setAttribute("src", `source/${catalogOrder.id}.jpg`);
    }


});