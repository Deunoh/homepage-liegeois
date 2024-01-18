const initBackground = {
    init: function () {
        const fullImageFromStorage = storage.getFromLocalStorage('fullBackground');
        const instaImageFromStorage = storage.getFromLocalStorage('instaImage');
        const ArtistImageFromStorage = storage.getFromLocalStorage('artistImage');

        bodyBackground.style.backgroundImage = `url(${fullImageFromStorage})`;
        madeby.innerHTML = `<a id="artist" href="https://instagram.com/${instaImageFromStorage}">Made by ${ArtistImageFromStorage}</a>`;

    }

}


document.addEventListener('DOMContentLoaded', initBackground.init);