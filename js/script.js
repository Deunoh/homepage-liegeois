//script pour alerter computer only
if($(window).width() <= 1200){
    window.alert("Ce site s'affiche uniquement sur ordinateur !");
   
  };
  
$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width() <= 1200){
            window.alert("Ce site s'affiche uniquement sur ordinateur !");
           
          }
       });
   //Fin du script computer only
    $("#tools").hide();
    $("#jeux").hide();
    $("#TP").hide();
});



$(function(){ 
   
   $("#right").click(function(){
    $("#code").hide(200, function(){ 
        $("#tools").show(200, function(){
            $("#jeux").show(200, function(){
                $("#TP").show(200, function(){
                });
            });
          });
      });
    });
});


$(function(){ 
   
   $("#left").click(function(){
    $("#tools").hide(200, function(){ 
        $("#jeux").hide(200, function(){ 
            $("#TP").hide(200, function(){
        $("#code").show(200, function(){
        });  
             });  
        });  
     });
    });
});
//Animation click serpent
document.addEventListener('DOMContentLoaded', function(){
    $(function(){
        $("#serpent").click(function(){
            $("#snake-img").animate({
                bottom:'350px',
                right:'500px',
                height:'+=400px',
                width:'+=400px'},800,function() { window.location="./game/snake.html"; });
            
        });    
           
    });
});


window.addEventListener('load', function() {
    // récupérer toutes les sections de la page
    var sections = document.querySelectorAll('section');
    
    // trier les sections en fonction du nombre de balises <li> qu'elles contiennent
    sections = Array.from(sections).sort(function(a, b) {
      var aCount = a.querySelectorAll('li').length;
      var bCount = b.querySelectorAll('li').length;
      return bCount - aCount;
    });
    
    // réinsérer les sections triées dans le DOM
    var container = document.querySelector('body');
    sections.forEach(function(section) {
      container.appendChild(section);
    });
  });
  

  


