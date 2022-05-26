var num = "";

var size = prompt("entre un nombre d'étages pour la pyramide");

for(var i=1; i<=size; i++)
{
  num = `# ${num}`
  console.log(num);
}