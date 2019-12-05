const fs = require("fs");  // fs pour lire les fichiers .txt .
var interaction = require("./QandA.json");

let txt = "Comment avoir une bourse?";

function Bot () {
  let self = this;

  self.react = function (txt) {
    for ( let type in interaction ) {
      let respond = 0
      for ( let keyArray in type.keyword ) {
        for ( let k in keyArray ) {
          if ( txt.includes(k) ) {
            respond += 1;
          }
        }
      }
      if ( respond == keyArray.length ) return type.path;
    }
    return "Déso pas compris"
  }
}

bot = new Bot;

bot.react(text);
