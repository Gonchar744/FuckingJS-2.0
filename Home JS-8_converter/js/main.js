(function(){
    const button = document.getElementById('convert');
    if(!button){
        return;
    }

    button.addEventListener('click', () => convertCurrency());

    async function convertCurrency() {
        async function fetchData(fromCurrency){
            const url = `https://api.exchangeratesapi.io/latest?base=${fromCurrency}`;

            try{
                const data = await fetch(url);
                if(data.ok){
                    const { rates } = await data.json();
                    return rates;
                }
                
            } catch(e){
                console.error("Some Errors when fetching data");
            }
                
            return null;
        }
        
        async function countResult(rates){            
            toCurrency = toCurrencyElement.value;
            amount = amountElement.value || 0;

            if(!rates || !rates[toCurrency]){
                return null;
            }

            return amount * rates[toCurrency];
        }
        
        const resultElement = document.getElementById('result');
        const fromCurrencyElement = document.getElementById('from');
        const toCurrencyElement = document.getElementById('to');
        const amountElement = document.getElementById('cash');

        if(!resultElement || !fromCurrencyElement || !toCurrencyElement || !amountElement){
            console.error("Some of the elements not found");
            return null;
        }
        
        button.disabled = true;
        
        try{
            const ratesDataFromServer = await fetchData(fromCurrencyElement.value);
            const result = await countResult(ratesDataFromServer)

            if(typeof result === 'number'){
                resultElement.innerHTML = `<span class='result'> Результат конвертації:  ${result.toFixed(2)} </span>`;
            } else {
                resultElement.innerHTML = `<span class='error'> Помилка під час розрахунку</span>`;;
            }
        } catch(e){
            console.error("Some another issue :(");
        }

        button.disabled = false;
    }
})()
