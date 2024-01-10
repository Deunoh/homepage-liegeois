const bodyBackground = document.querySelector('body');
const button = document.getElementById('chg-bckg');
const madeby = document.getElementById('madeby');
async function getImg(){
    try{
        const reponseJSON = await fetch("https://api.unsplash.com/photos/random/?client_id=okh5SxaeTZ6gEy9K-QRqtsut2RpH3CaNL7-NClGxgYc&orientation=landscape");
        // console.log(reponseJSON);
        //je transforme en JS
        const reponseJS = await reponseJSON.json();
        console.log(reponseJS);
        //j'affiche la valeur de la description de la photo
        console.log(reponseJS.description);
        bodyBackground.style.backgroundImage = `url(${reponseJS.urls.full})`;
        madeby.innerHTML = `<a id="artist" href="https://instagram.com/${reponseJS.user.instagram_username}">Made by ${reponseJS.user.name}</a>`;

    }
    catch (error){
        console.log(error, "error");
    }
};

button.addEventListener('click', getImg);



 