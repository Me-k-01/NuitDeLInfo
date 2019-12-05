const fs = require("fs");  // fs pour lire les fichiers .txt .
let interaction = require("./QandA.json");  // depuis la biblioteque originel

let text = "Comment avoir une bourse?";


function Bot() { // object bot
  let self = this;

    self.react = function (txt) { // fonction de reaction du bot en fonction des messages qui lui sont envoyé.

      for ( let type in interaction ) {  // Chaque reponse possible
        console.log(interaction);   // interaction corespond bien a l'object qu'il faut
        console.log(type);          // mais le type ne corresponds pas a la valeur, objet keword/password mais simplement au nom clef.

        let keyword = 0  // variable stockant le nombre de mot clef
        for ( let keyArray in type.keyword ) {  // la liste des mots clef
          for ( let k in keyArray ) {  // les mots clefs dans chaque liste de synnonymme
            if ( txt.includes(k) ) {  // si le messae contient k
              keyword += 1; // On ajoute 1 a la quantité de mot clef
              break;  // et on quitte la boucle  pour ajouter de synonnyme.
            }
          }
        }
        if ( keyword == type.keyword.length ) return type.path;  // on retourne le texte stocké dans le type
      }
      return "Désolé je n'ai pas compris"   
    }
}

let bot = new Bot() ;

bot.react(text);
