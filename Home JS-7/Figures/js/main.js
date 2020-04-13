t = document.getElementById('hole')
t.onclick = function () {
    this.className = (this.className == 'circle') ? 'square' : 'circle';
    setTimeout(function () {
        t.className = 'triangle';
    }, 10000);
}

