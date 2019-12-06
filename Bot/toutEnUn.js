let interaction = {
  DateBourse  : {
    keyword  : [
         ["bourse", "aide", "manque d'argent", "manque dargent", "versements", "verser"],
         ["quand","date"]
    ],
    txt     :  "Les dates de réception des bourses peuvent varier, néanmoins les versement s’effectuent en général avant le 5 de chaque mois. "+
"Malgré cela, si vous avez remis vos dossiers en retard, il se peut que vos bourses ne vous soient pas versées les premiers mois."+
"Mais ne paniquez pas, vous toucherez le totale de vos bourses manquantes lors du premier versement."+
"https://www.etudiant.gouv.fr/cid96337/dates-et-periodes-de-versement-des-bourses.html"
  },


  CombienBourse : {
    keyword : [
      ["échellon", "echellon", "bourse", "aide finan","versement", "crous"],
      ["calculer", "qu’elle est", "quelle", "combien"]
    ],
    txt       :  "La bourse est définie par échellon sur plusieurs critère.Les différents échellon est définie avec les critères sont définis, ici"+
"(https://www.etudiant.gouv.fr/pid33629-cid96330/les-bourses-sur-criteres-sociaux.html)."+
"Pour savoir dans quel échelon vous êtes , un simulateur vous est proposer (https://simulateur.lescrous.fr/)."

  },


  CommentBourse : {
    keyword : [
      ["bourse", "aide", "versement"],
      [" avoir ", "qu'elle demarche", "quelle demarche", "comment " ]
    ],
    txt       :  "La bourse est définie par échellon sur plusieurs critère.Les différents échellon est définie avec les critères sont définis, ici (https://www.etudiant.gouv.fr/pid33629-cid96330/les-bourses-sur-criteres-sociaux.html)."+
"Pour savoir dans quel échelon vous êtes , un simulateur vous est proposer (https://simulateur.lescrous.fr/)."

  },


  ModifDSE : {
    keyword : [
      ["bourse", "aide", "versement"],
      ["comment modifier", "peut-on modifier", "peut on modifier",
        "comment changer", "peut-on changer", "peut on changer"]
    ],
    txt    :  "Pour modifier mon dossier , il vous suffit d’aller sur le site etudiant.gouv.fr (lien: https://www.messervices.etudiant.gouv.fr/envole/ ) et cliquer sur “suivi du dossier social étudiant (DSE)” et suivez les instructions."
  },

  AideLogement : {
    keyword : [
      ["caf", "aide pour payer le loyer", "aide loge", "aide au loge", "apl"],
      ["simulateur", "puis-je percevoir", "puis je percevoir", "est ce que je peux avoir", "est-ce que je peux avoir" ]
    ],
    txt    :  "Pour savoir si vous êtes apte à percevoir l’aide au logement voici un simulateur vous est proposé (https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimervosdroits/lelogement/)."
  },

  DemandeCAF : {
    keyword : [
      ["caf", "aide pour payer le loyer", "apl", "aide loge", "aide au loge"],
      ["comment", "puis-je", "puis je", "est-ce que je peux", "est ce que je peux" ]
    ],
    txt    :  "Pour pouvoir faire se demande d’aide au logement voici un lien (https://www.etudiant.gouv.fr/cid96327/les-aides-logement.html)."
  },

  InitCrous : {
    keyword : [
      ["def", "déf", "c'est quoi", "keske", "qu’est ce", "qu’est-ce", "kukusai", "kécecé", "c’est quoi", "kesako"],
      ["crous ", "cnous ", "crou ", " crous"]
    ],
    txt    :  "Le CROUS est un établissement public placé sous la tutelle du Ministère de l'enseignement supérieur, qui a pour but de favoriser l'amélioration des conditions de vie des étudiants, au quotidien."
        + "https://www.etudiant.gouv.fr/pid37092/les-crous.html"
  },

  AideSecu : {
    keyword : [
      ["remboursement", "aide", "prise en charge"],
      ["medic", "médic" ,"vaccin" ]
    ],
    txt    :  "Plus d’informations sur le remboursement des médicaments par la sécurité social sont disponibles sur le site sur le site :"+
"https://secu-jeunes.fr/mes-droits-et-demarches-avec-la-securite-sociale/sante/prendre-soin-de-sante/"

  },

  Contra : {
    keyword : [
      ["remboursement", "aide", "prise en charge"],
      ["contraception", "préservatif", "preservatif", "pilule", "pillule", "capote", "stérilet", "sterilet"]
    ],
    txt    :  "Il existe plusieurs moyens de contraceptions :"+
"https://www.choisirsacontraception.fr/contraception_tableau_comparatif.html"+
"Vous pouvez contacter le planning familial si vous avez besoin d’aide ou d’informations supplémentaires :"+
"https://www.planning-familial.org"

  },

  Secu : {
    keyword : [
      ["sécu", "secu"],
      ["def", "déf", "c'est quoi", "keske", "qu’est ce", "qu’est-ce", "kukusai", "kécecé", "c’est quoi", "kesako"]
    ],
    txt    :  "Des informations sur la sécurité sociale :"+
    "https://secu-jeunes.fr/"
  }
}

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
        if ( keyword == type.keyword.length ) return  type.txt; // on retourne le texte stocké dans le type
      }
      return "Désolé je n'ai pas compris votre question."
    }
}

let bot = new Bot() ;

