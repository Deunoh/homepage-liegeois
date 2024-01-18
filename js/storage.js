const storage = {

  /**
   * strigify puis sauvergarde une donnée dans le localStorage
   * @param {string} name : le nom de l'item du localStorage
   * @param {any} dataToSave : la donnée à sauvegarder
   */
  saveToLocalStorage: function (name, dataToSave) {
    // On transforme la data en chaîne de caractères avec JSON
    const dataToSaveEnString = JSON.stringify(dataToSave);

    // On sauvegarde la data dans le localStorage
    localStorage.setItem(name, dataToSaveEnString);
  },
  

  /**
   * recupère la data dont le nom est donné en paramètre dans le localStorage et parse cette donnée avant de la renvoyer
   * @param {string} name : le nom de l'item à recuperer
   * @return {any} data recupérée et parsée
   */
  getFromLocalStorage: function (name) {
    // recuperer l'entrée name dans le localStorage
    const dataFromLocalStorage = localStorage.getItem(name);

    // on re transforme la donnée en JS (c'était une string, ça va redevenir un booleen)
    const data = JSON.parse(dataFromLocalStorage);

    return data;
  },

  /**
   * strigify puis sauvergarde une donnée dans la sesion storage
   * @param {string} name : le nom de l'item
   * @param {any} dataToSave : la donnée à sauvegarder
   */
  saveToSesionStorage: function (name, dataToSave) {
    // On transforme la data en chaîne de caractères avec JSON
    const dataToSaveEnString = JSON.stringify(dataToSave);

    // On sauvegarde la data dans le localStorage
    sessionStorage.setItem(name, dataToSaveEnString);
  },

  /**
   * recupère la data dont le nom est donné en paramètre dans le  sessionStorage et parse cette donnée avant de la renvoyer
   * @param {string} name : le nom de l'item à recuperer
   * @return {any} data recupérée et parsée
   */
  getFromSessionStorage: function (name) {
    // recuperer l'entrée name dans le session storage
    const dataFromSessionStorage = sessionStorage.getItem(name);

    // on re transforme la donnée en JS (c'était une string, ça va redevenir un booleen)
    const data = JSON.parse(dataFromSessionStorage);

    return data;
  },

  /**
   * recupere une info dans les cookies
   * @param {string} name : le nom de l'item à recuperer
   * @return {any} data recupérée et parsée
   */
  getItemFromCookies: function (name) {
    // on recup tous les cookies
    const mesCookies = document.cookie;

    // on découpe la chaine pour avoir dans un tableau un cookie par ligne
    const mesCookiesDansUnTableauDeString = mesCookies.split('; ');

    // on prépare un tableau associatif qu'on va remplir ligne par ligne
    const mesCookiesDansunTableauAssociatif = {};

    // pour chaque ligne on a une chaine de type 'colormode=yellow'
    for (const cookie of mesCookiesDansUnTableauDeString) {

      // on va découper chaque chaine au niveau du signe "="
      const cookieSplit = cookie.split('=');

      // cookieSplit contient pour la ligne 0 : ['colormode', 'yellow']
      const nameCookie = cookieSplit[0];
      const valueCookie = cookieSplit[1];

      // on parse la valeur
      const valueCookieParsed = JSON.parse(valueCookie);

      // on remplit le nouveau tableau avec le cookie 
      mesCookiesDansunTableauAssociatif[nameCookie] = valueCookieParsed;
    }

    // une fois qu'on a un tableau associatif tout nickel on peut facilement recuperer l'item correspondant à celui reçu en paramètre
    return mesCookiesDansunTableauAssociatif[name];

  },

  /**
   * strigify puis sauvergarde une donnée dans les cookies
   * @param {string} name : le nom de l'item 
   * @param {any} dataToSave : la donnée à sauvegarder
   */
  saveToCookies: function (name, dataToSave) {
    // stigifyisation de la data
    const dataEnString = JSON.stringify(dataToSave);

    // sauvegarde en cookie
    document.cookie = `${name}=${dataEnString}`;
  }


}