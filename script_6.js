const ARN = "UUACGCAGUAGA" ;

let AA = ARN.match(/.{1,3}/g); //fonction pour diviser le string en bloc de 3 char


function ARNAA() {


if(AA[0] === "UUA" || "UUG" ){

    console.log("Leucine");

} if (AA[1] === "CGC"){
    console.log("Arginine");
} 
if (AA[2] === "AGU" ){
    console.log("Sérine");
} 
if (AA[3] === "AGA") {
    console.log("Arginine");
}


}
console.log(AA)
ARNAA()






