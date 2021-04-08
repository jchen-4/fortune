var fortune_in;
var fortune_out;
var button;

window.addEventListener('DOMContentLoaded', function() {
  fortune_in = document.getElementById("fortune_input");
  fortune_out = document.getElementById("randomfortune");
  button = document.getElementById("fortune_button");


  fortune_button.addEventListener("click", fortune);
});


function fortune(){
  var funfortunes = ["when in anger, sing the alphabet.", "to truly find yourself, you should play hide and seek alone.", "ask not what your fortune cookie can do for you, but what you can do for your fortune cookie.", "I see money in your future...but it's not yours though."]
  var randomfortune = Math.floor(Math.random()*funfortunes.length);
  var usedfortune = funfortunes[randomfortune];
  var finalfortune = fortune_in.value;
  var final_output = finalfortune + ", " +usedfortune;
  fortune_out.innerText = final_output;
  restyle(fortune_out);
}

function restyle(text){
text.style.color = "#" +Math.floor(Math.random() * 16777215).toString(16); //https://www.paulirish.com/2009/random-hex-color-code-snippets/
var font_styles = ["normal", "italics", "oblique"]
var styleindex = Math.floor(Math.random() * font_styles.length); //random font
var makefont = fontstyle = font_styles[styleindex];
text.style.fontStyle = makefont;
text.style.letterSpacing = Math.floor(Math.random()*2 + 2 ) + "px"; //random letter spacing


}
