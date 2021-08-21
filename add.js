const total = document.getElementById('total');
const bonusTotal = document.getElementById('bonus-total');

function updateCost(Id,price,update) {
    const Cost = document.getElementById(Id);
    if (update == false) {
        Cost.innerText = price;
    }
    else if(update == true ){
        Cost.innerText = price;
    }
    getCost()
}

function getCost() {
    const bestCost = parseFloat(document.getElementById('best-cost').innerText);;
    const memoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-charge-cost').innerText);

    const totalPrice = bestCost + memoryCost + storageCost + deliveryCost;
    total.innerText = totalPrice;
    bonusTotal.innerText = totalPrice;

}

function updateBonusTotal() {
    const input = document.getElementById('input');
    const totalValue = parseFloat(total.innerText);
    if (input.value == 'stevekaku') {
        const totalAfterUsingCode = totalValue - (totalValue * .2);
        bonusTotal.innerText = totalAfterUsingCode;
        document.getElementById('alert').style.display = "none";
    }
    else {
        document.getElementById('alert').style.display = "block";
    }
    input.value = '';
    
}