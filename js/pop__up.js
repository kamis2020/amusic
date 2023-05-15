// PopUp Start
let btns = document.querySelectorAll(".photo__list");
let popups = document.querySelectorAll(".pop__up-card");
let popUpClose = document.querySelectorAll(".pop_up_close");
// let index;

function togglePopup() {
    let index = Array.from(btns).indexOf(this);
    popups[index].classList.toggle("card__active");
}

btns.forEach(btn => btn.addEventListener('click', togglePopup));

function togglePopupClose() {
    let index = Array.from(popUpClose).indexOf(this);
    popups[index].classList.toggle("card__active");
}

popUpClose.forEach(btn => btn.addEventListener('click', togglePopupClose));

//Kit popup
let btnsKit = document.querySelectorAll(".kits__list");
let popupKit = document.querySelectorAll(".pop__up-kits");
let closeKit = document.querySelectorAll(".kit_up_close");

function togglePopups() {
    let index = Array.from(btnsKit).indexOf(this);
    popupKit[index].classList.toggle('kits__active');
}

btnsKit.forEach(btn => btn.addEventListener('click', togglePopups));

function togglePopupCloses() {
    let index = Array.from(closeKit).indexOf(this);
    popupKit[index].classList.remove('kits__active');
}

closeKit.forEach(btn => btn.addEventListener('click', togglePopupCloses));
