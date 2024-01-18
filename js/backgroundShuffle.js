const bodyBackground = document.querySelector('body');
const button = document.getElementById('chg-bckg');
const madeby = document.getElementById('madeby');

const polaroid = document.querySelector('.save-img');

var fullImage;
var instaImage;
var artistImage;


async function getImg() {
    try {
        const reponseJSON = await fetch("https://api.unsplash.com/photos/random/?client_id=okh5SxaeTZ6gEy9K-QRqtsut2RpH3CaNL7-NClGxgYc&orientation=landscape");
        // console.log(reponseJSON);
        //je transforme en JS
        const reponseJS = await reponseJSON.json();
        console.log(reponseJS);
        //j'affiche la valeur de la description de la photo
        //console.log(reponseJS.description);

        //je declare les variable pour pouvoir les sauvegardé et je les met en global
        fullImage = reponseJS.urls.full;
        instaImage = reponseJS.user.instagram_username;
        artistImage = reponseJS.user.name;
        console.log(fullImage);

        bodyBackground.style.backgroundImage = `url(${fullImage})`;
        madeby.innerHTML = `<a id="artist" href="https://instagram.com/${instaImage}">Made by ${artistImage}</a>`;
        polaroid.classList.add('polaroid-visible');
    }
    catch (error) {
        console.log(error, "error");
    }
};

button.addEventListener('click', getImg);

function saveImg() {
    console.log('FULL IMAGE', fullImage);
    storage.saveToLocalStorage('fullBackground', fullImage);
    storage.saveToLocalStorage('instaImage', instaImage);
    storage.saveToLocalStorage('artistImage', artistImage);
    polaroid.src = "logo/polaroid-clicked.png";

}

polaroid.addEventListener('click', saveImg);