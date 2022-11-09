"use strict"
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let i = 1;

let array = [`image-slide-1.jpg`, `image-slide-2.jpg`, `image-slide-3.jpg`, `image-slide-4.jpg`, `image-slide-5.jpg`];

function prev() {
    setTimeout(() => {
        if (i === 0) {
            i = array.length - 1;
        }
        if (i <= array.length - 1) {
            i--;
        }
        return setImg(),
        secondi(),
        thirdi();
    }, 100)

}

function next() {
    setTimeout(() => {
        if (i === array.length - 1) {
            i = 0;
        }

        i++;
        return setImg(),
        secondi(),
        thirdi();
    }, 100)
}

function setImg() {
    if (i === 0) {
        return first.setAttribute('src', 'assets/' + array[4]);
    } else {
        return first.setAttribute('src', 'assets/' + array[i - 1]);
    }
}

function secondi() {
    return second.setAttribute('src', 'assets/' + array[i]);
}

function thirdi() {
    if (i === array.length - 1) {
        return third.setAttribute('src', 'assets/' + array[0]);
    } else {
        return third.setAttribute('src', 'assets/' + array[i + 1]);
    }
}