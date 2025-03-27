document.getElementById("payment-method").addEventListener("change", function() {
    let method = this.value;
    if (method === "bank") {
        document.getElementById("bank-transfer").style.display = "block";
        document.getElementById("bitcoin-transfer").style.display = "none";
    } else {
        document.getElementById("bank-transfer").style.display = "none";
        document.getElementById("bitcoin-transfer").style.display = "block";
    }
});

document.getElementById("amount").addEventListener("input", function() {
    let value = parseFloat(this.value);
    document.getElementById("deposit-amount").innerText = isNaN(value) ? "0.00 NGN" : value.toFixed(2) + " NGN";
    document.getElementById("continue-btn").disabled = isNaN(value) || value <= 0;
});

function copyAddress() {
    let btcAddress = document.getElementById("btc-address");
    btcAddress.select();
    document.execCommand("copy");
    alert("Bitcoin address copied!");
}
