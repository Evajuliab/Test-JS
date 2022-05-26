let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
statusDeTHP.unshift("Pirate")
statusDeTHP.push("Flibustier")
statusDeTHP[0];

console.log(statusDeTHP.length);

let a = 3;
  console.log("Bonjour à tous les "+ a);
  console.log(`ceci est la valeur de ma variable a : ${a}`);

  let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);

let b="The Hacking Project"
console.log(b.toLowerCase());




let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
   
  };

  console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir


console.log(THPSessionNum2["successRate"]);

console.log("36" == 36); // va retourner TRUE car le contenu est identique



let number = 45; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 

weekNum = 9; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}

let number1 = 5; //fais aussi le test avec un chiffre non nul
if (number1) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

for(var count = 0; count <=5; count++){
    console.log(`on va compter jusqu'à 5 : ${count}`);
  }
  
  console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
  //passe count en var pour tester ce que ça donne

//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}