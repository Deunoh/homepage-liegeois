const initBackground = {
    init: function () {
        const fullImageFromStorage = storage.getFromLocalStorage('fullBackground');
        const instaImageFromStorage = storage.getFromLocalStorage('instaImage');
        const ArtistImageFromStorage = storage.getFromLocalStorage('artistImage');

        bodyBackground.style.backgroundImage = `url(${fullImageFromStorage})`;
        madeby.innerHTML = `<a id="artist" href="https://instagram.com/${instaImageFromStorage}">Made by ${ArtistImageFromStorage}</a>`;
        console.log('img par défaut', fullImageFromStorage);
        if(fullImageFromStorage == null && ArtistImageFromStorage == null){
            bodyBackground.style.backgroundImage = 'url(logo/wallpaper1.jpg)';
            madeby.innerHTML = '<a id="artist" href="#">Made by Denovann</a>';
        }
    },

}


document.addEventListener('DOMContentLoaded', initBackground.init);