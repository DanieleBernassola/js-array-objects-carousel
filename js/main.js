'use strict';

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselImages = images.length;
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let i = 2;

for (let i = 0; i < images.length; i++){
    // Creo un div in cui inserirò l'immagine
    const item = document.createElement('div');
    item.classList.add('item');
    if (i === 0){
        item.classList.add('active');
    }
    
    // Appendo l'immagine aggiungendo al src il link
    const img = document.createElement('img');
    img.src = images[i].image;
    item.append(img);

    // Appendo il titolo
    const title = document.createElement('h3');
    title.append(images[i].title);
    title.classList.add('title');
    item.append(title);

    // Appendo la descrizione
    const text = document.createElement('p');
    text.append(images[i].text);
    text.classList.add('text');
    item.append(text);

    // Appendo nel div tutte le immagini
    items.append(item);
}

prev.addEventListener('click', function() {
    if (i > 2){
        items.children[i].classList.remove('active');
        i--;
        items.children[i].classList.add('active');
    }
})

next.addEventListener('click', function() {
    if(i < carouselImages + 1){
        items.children[i].classList.remove('active');
        i++;
        items.children[i].classList.add('active');
    }
})