// "appeler" le bouton
var button = document.querySelector('button');
// Déclarer une fonction (possible de mettre sur la ligne précédente mais avec le ; pour séparer)
function resetForm(){
  // Séléctionner tous les "input" avec querySelectorAll
  var fields = document.querySelectorAll('input');
  // i++ = incrémentation, récupère les éléments jusqu'à la fin du tableau, i=0 pour initialiser la boucle, i<fields correspond à la fin du tableau
  for (let i=0; i<fields.length;i++){
    fields[i].value='';
  }
}
button.onclick = function(){
  resetForm()
// Les parenthèses appellent la fonction
};
// Les querySelector permettent de récuperer les sélécteurs CSS
// Les valeurs d'un tableau commence à 0 (le premier élément est le numéro 0)
