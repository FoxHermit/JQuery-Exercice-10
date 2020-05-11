// Au passage de la souris (évènement mouseover) sur mon élément qui a l'ID "green" "red" ou "blue", je modifie le CSS de mon élément ID "text".
$(function(){
  $('#green').mouseover(function(){
    $('#text').css('color', 'green');
  });
  $('#red').mouseover(function(){
    $('#text').css('color', 'red');
  });
  $('#blue').mouseover(function(){
    $('#text').css('color', 'blue');
  });
// Je cible tous les éléments qui ont la class "color", au moment où ma souris quitte ces éléments, je modifie le CSS de mon élément ID "text".  
  $('.color').mouseout(function(){
    $('#text').css('color', 'black');
  });
});
