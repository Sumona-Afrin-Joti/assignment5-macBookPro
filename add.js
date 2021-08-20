const total = document.getElementById('total');
const totalValue = parseFloat(total.innerText);
const bonusTotal = document.getElementById('bonus-total');

function updateMemoryCost(argument) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    if (argument == '8GB') {
        extraMemoryCost.innerText = 0;
    }
    else{
        extraMemoryCost.innerText = 180;
    }
    getCost()
}


function updateExtraStorageCost(argument) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    
    if (argument == 'storage1') {
        extraStorageCost.innerText = 0;
    }
    else if (argument == 'storage2') {
        extraStorageCost.innerText = 100;
    }
    else {
        extraStorageCost.innerText = 180;
    }
    getCost()
} 

function updateDeliveryCost(argument) {
    const deliveryCharge = document.getElementById('delivery-charge-cost');

    if (argument == 'delivery-button-1') {
        deliveryCharge.innerText = 0;
    }
    else {
        deliveryCharge.innerText = 20;
    }
    getCost()
  
}

function getCost() {
    const memoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-charge-cost').innerText);

    const totalPrice = 1299 + memoryCost + storageCost + deliveryCost;
    total.innerText = totalPrice;
    bonusTotal.innerText = totalPrice;

}

function updateBonusTotal() {
    const input = document.getElementById('input');
    const bonusTotalValue = parseFloat(bonusTotal.innerText);
    if (input.value.toLowerCase() == 'stevekaku') {
        const totalAfterUsingCode = bonusTotalValue - (bonusTotalValue * .2);
        console.log(totalAfterUsingCode);
        bonusTotal.innerText = totalAfterUsingCode;
    }
    input.value = '';
}