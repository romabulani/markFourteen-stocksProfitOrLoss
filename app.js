var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var quantity = document.querySelector("#quantity");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

function calculate(initial, curr, qty) {
    if (initial > curr){
        var totalLoss = (initial - curr) * qty;
        var lossPercentage = ((initial - curr)/initial) * 100;
        output.innerText = `Oops!! You have incurred the loss of ₹${totalLoss} and loss percentage is ${lossPercentage.toFixed(2)}%`;
        document.body.style.backgroundColor = "#FF7F7F";
    }

    else if (curr > initial){
        var totalProfit = (curr - initial) * qty;
        var profitPercentage = ((curr - initial)/initial) * 100;
        output.innerText = `Yayy!! You have earned the profit of ₹${totalProfit} and profit percentage is ${profitPercentage.toFixed(2)}%`;
        document.body.style.backgroundColor = "#90EE90";
    }

    else{
        output.innerText = `No pain, No gain! No gain, No pain!!`;
        document.body.style.backgroundColor = "white";
    }
}

function validate() {
    var initial = initialPrice.value;
    var curr = currentPrice.value;
    var qty = quantity.value;
    document.body.style.backgroundColor = "white";
    if(initial === '' || curr === '' || qty ==='')
        output.innerText = "All the 3 fields should be valid numbers";
    else if(Number(initial) <= 0 || Number(curr) <= 0 || Number(qty) <=0)
        output.innerText = "All the fields should be greater than 0";
    else
        calculate(Number(initial), Number(curr), Number(qty));
}

btnSubmit.addEventListener('click', validate);