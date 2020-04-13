const askUserNumber = () => {
    let num = prompt('Скільки створити прямокутників ?', 0);
    if (!parseInt(num, 10)) {
        num = prompt(`Помилка!, ${num} не цифри, введіть цифрами кількість прямокутників!`, 0);
    }
    return num;
};
let num = askUserNumber();
let container = document.createElement('section');
container.className = "flex";

for (let i = 1; i <= num; i++) {
    let div = document.createElement('div');
    div.className = "rectangle-pink";
    container.append(div);
}
document.body.append(container);

function changeColor() {
    setInterval(() => {
        let chieldren = document.getElementsByTagName('div');
        for (i = 0; i <= chieldren.length - 1; i++) {
            chieldren[i].className = chieldren[i].className == 'rectangle-pink' ? 'rectangle-orange' : 'rectangle-pink'
        }
    }, 3000);
}
changeColor();


