let char = document.getElementById('charCount');
let word = document.getElementById('wordCount');
let text  = document.getElementById('text');
text.addEventListener('input',function(){
    let textStr = this.value;
    let charLength = textStr.length;
    //Updating Character
    char.innerHTML = charLength;
    //Updating Words
    let splitArray = textStr.split(' ');
    let filterArray = splitArray.filter(function(elem){
        return elem != "";
    })
    word.innerHTML = filterArray.length;
});
let reset = document.getElementById('resetBtn');
reset.addEventListener('click',function(){
    text.value = "";
    word.innerHTML = 0;
    char.innerHTML = 0;
});