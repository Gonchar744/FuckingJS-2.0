let num = prompt("Введіть число, до 100 000!", 0);

do {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 & i % 3 === 0) {
            console.log(`я число ${i} i Я ділюсь на 2 і на 3`);
        } else if (i % 2 === 0) {
            console.log(`я число ${i} i Я ділюсь на 2`);
        } else if (i % 3 === 0) {
            console.log(`я число ${i} i Я ділюсь на 3`);
        } else {
            console.log(`я число ${i} i Я не  ділюсь на 2 і 3`);
        }
    }
    if (confirm('Бажаєте ввести нове число ?')) {
        num = prompt("Введіть число, до 100 000!", 0);
        if (!parseInt(num, 10)) {
            prompt(`Помилка!, ${num} не число, введіть число до 100 000!`, 0);
        }
    } else {
        break
    }
} while (num <= 100000 && num);
