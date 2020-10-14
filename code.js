const btn = document.querySelector('button');
const liItems = document.querySelectorAll("li");
let size = 10;

const addList = function () {
    size++;

    // FOREACH

    liItems.forEach((element) => {
        element.style.display = "block";
        element.style.fontSize = `${size}px`
    });

    // PĘTLA FOR

    // for (let i = 0; i < liItems.length; i++) {
    //     liItems[i].style.display = "block";
    //     liItems[i].style.fontSize = `${size}px`;
    // }
}

btn.addEventListener('click', addList);