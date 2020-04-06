const sorting = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5];

function sortNumericSortingay(sorting) {
    for (let i = 0, endI = sorting.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (sorting[j] > sorting[j + 1]) {
                let swap = sorting[j];
                sorting[j] = sorting[j + 1];
                sorting[j + 1] = swap;
            }
        }
    }
    return document.write(sorting);
}
sortNumericSortingay(sorting)

console.log(sorting)
