const tvShow = ["Мастер шеф","Міняю жінку","Від пацанки до панянки","Хто зверху?","Хата на тата"];
const newShow = prompt("add new TV-show");

tvShow.push(newShow);

const correctTvShow = tvShow.join();
const stickTvShow = tvShow.join("| ");

console.log(correctTvShow);
console.log(stickTvShow);

