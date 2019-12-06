const fs = require("fs");  // fs pour lire les fichiers .txt .
let interaction = require("./Bot/QandA.json");

function Bot() { // object bot
  let self = this;

    self.react = function (txt) { // fonction de reaction du bot en fonction des messages qui lui sont envoyé.
      txt = txt.toLowerCase();  
      for ( let j in interaction ) {  // Chaque reponse possible
        let type = interaction[j];
        let keyword = 0  // variable stockant le nombre de mot clef
        for ( let i in type.keyword ) {  // la liste des differents mots clefs
          let keyArray = type.keyword[i];

          for ( let k in keyArray ) {  // les mots clefs dans chaque liste de synnonymme
            if ( txt.includes(keyArray[k]) ) {  // si le messae contient le mot
              keyword += 1; // On ajoute 1 a la quantité de mot clef
              break;  // et on quitte la boucle  pour ajouter de synonnyme.
            }
          }
        }
        if ( keyword == type.keyword.length ) return fs.readFileSync(type.path, "utf8"); // on retourne le texte stocké dans le type
      }
      return "Désolé je n'ai pas compris"
    }
}

let bot = new Bot() ;

console.log(bot.react(text));
