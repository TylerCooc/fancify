const Alert = document.getElementById('Alert');
const boxText = document.getElementById('bigText');
const Moo = document.getElementById('Moo');
const mooText = boxText;

Alert.addEventListener('click', function(){
    boxText.style.fontSize='24pt';
});

function fancyFunction(){
    boxText.style.fontWeight = "bold";
    boxText.style.color= "blue";
    boxText.style.textDecoration = "underline";
}

function boringFunction(){
        boxText.style.fontWeight = "normal";
        boxText.style.color ="black";
        boxText.style.textDecoration ="initial";
    }
    
Moo.addEventListener('click', function(){
    mooText.value = mooText.value.toUpperCase();
    var sentences = mooText.value.split(". ");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      var lastWord = words.pop();
      lastWord = lastWord + "-Moo";
      words.push(lastWord);
      sentences[i] = words.join(" ");
    }
    mooText.value = sentences.join(". ");
  
    boxText.value = mooText.value;
})