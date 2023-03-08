window.addEventListener("load", init);

function init() {
    var articleElem = document.querySelectorAll("#focikk");
    articleElem[0].innerHTML = "<button>Katt ide!</button>"
    const gombElem = document.querySelectorAll("article button");
    gombElem[0].addEventListener('click', function () {
        console.log("kattintottál")
    });

    gombElem[0].addEventListener('click', () => {
        console.log("kattintottál")
    });

    articleElem[0].innerHTML += "<div class=''><img src='kep.jpeg' alt=''></div>"
    const kepElem = document.querySelectorAll("article div");
    kepElem[0].addEventListener('mouseover', function(){
        console.log("A div fölé vitted az egered!");
        kepElem[0].classList.add("kepformazas");
    });

    kepElem[0].addEventListener('mouseout', function(){
        kepElem[0].classList.remove("kepformazas");
    });
}
