/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

for (var i=1; i <= 6; i++) {
  var number = Number(prompt('Trouvez le nombre entre ' + 1 + ' et ' +  100 + ' compris.'));
  if (number <= 0 || number > 100) {
    console.log(number + ' est en dehors de l\'intervalle 1-100');
  } else if (number > solution) {
    console.log(number + ' est trop grand');
  } else if (number < solution) {
    console.log(number + ' est trop petit');
  } else if (number === solution) {
    console.log('Bravo ! La solution était ' + solution);
    console.log('Vous avez trouvé en ' + i + ' essai(s)');
    break;
  }
  if (number !== solution && i === 6) {
    console.log('Perdu... La solution était ' + solution);
  }
}
