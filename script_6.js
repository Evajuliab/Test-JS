const ARN= "UUACGCAGUAGA" ;

function ARNAA() {

let AA = ARN.match(/.{1,3}/g); 
if(AA[0] === "UUA" || "UUG" && AA[1] === "CGC" && AA[2] === "AGU" && AA[3] === "AGA") {

console.log(`Voici les ARN: ${AA}`) // on affiche les AA séparés
console.log("il s'agit donc des acides aminés ci-dessous ")
console.log("Leucine-Arginine-Sérine-Arginine");
} else {
    console.log("Chaine d'AA introuvable");

} 
}
ARNAA()


