(function  (){
var names = ["Sepehr", "Sogol", "John","Joe","Sam"];
//console.log(names);

for (var i = 0; i < names.length; i++) 
 {
   var firstLetter = names[i].charAt(0).toLowerCase();
  
   if (firstLetter == 'j') {
    console.log("Bye " + names[i]);
     } 
   else {
    console.log("Hello " + names[i]);
  }
 }
})();