const button = document.getElementById('convert');

button.addEventListener('click', () => convertCurrency());

function convertCurrency() {
    button.disabled = true;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    let ammount = document.getElementById('cash').value;
    const url = `https://api.exchangeratesapi.io/latest?base=${from}`;
    fetch(url)
        .then(data => data.ok && data.json())
        .then(({ rates }) => {
            let result = ammount * rates[to];
            document.getElementById('result').innerHTML = `<span class='result'> Результат конвертації:  ${result.toFixed(2)} </span>`;
        }).catch(err => document.getElementById('result').innerHTML = err);
    button.disabled = false;
}

