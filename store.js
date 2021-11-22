window.addEventListener("DOMContentLoaded" , () => {
    const orderBtn = document.querySelectorAll("button[data-order]");
    
    orderBtn.forEach(element => {
        element.addEventListener('click', (event) => {
            const btn = event.currentTarget;
            const container = btn.parentNode;
            
            let order = {
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                id: btn.getAttribute("data-order")
            }

            localStorage.setItem("order", JSON.stringify(order));
            
            const url = window.location.href.replace("store.html", "order.html");
            window.location.href = url;
        });
    });
});