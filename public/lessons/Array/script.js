const currencies = {
    brazilAmount: 500,
    rates: {
        clp: 720,
        dollar:  5.20,
    },

    conversionValues: function(code) {
        return this.brazilAmount * this.rates[code]
    }
}

const buttonConverter = document.getElementById("button")
const showResult = document.getElementById("result")

buttonConverter.addEventListener('click',function() {
    const conversionResult = currencies.conversionValues("clp");
    showResult.textContent = `CLP $${conversionResult}`;
});