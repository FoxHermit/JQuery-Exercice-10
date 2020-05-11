// Au passage de la souris (évènement mouseover) sur mon élément qui a l'ID "green" "red" ou "blue", je modifie le CSS de mon élément ID "text".
$(function(){
  $('.color').mouseover(function(){
    buttoncolor = $(this).attr('id'); // Je stocke dans la variable "buttoncolor" la valeur de l'attribut ID de l'élément sur lequel je suis.
    console.log(buttoncolor);
    $('#text').css('color', buttoncolor);
  });

/*  On peut faire comme ça aussi, mais c'est plus long :
$('#green').mouseover(function(){
    $('#text').css('color', 'green');
  });
  $('#red').mouseover(function(){
    $('#text').css('color', 'red');
  });
  $('#blue').mouseover(function(){
    $('#text').css('color', 'blue');
  }); */

// Je cible tous les éléments qui ont la class "color", au moment où ma souris quitte ces éléments, je modifie le CSS de mon élément ID "text".
  $('.color').mouseout(function(){
    $('#text').css('color', 'black');
  });
});
