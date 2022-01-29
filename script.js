
document.getElementById('matched').style.display = 'none';
document.getElementById('notMatched').style.display = 'none';

const generateBtn = document.getElementById('randomBtn')
generateBtn.addEventListener('click', function(){
    let x = Math.round(Math.random()*1000+1000);
    document.getElementById('randomNumber').value = x;
})

function inputNum(newValue){
    document.getElementById('calcInput').value += newValue;
}
function deleteMe(){
    document.getElementById('calcInput').value = '';
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(){
    if(document.getElementById('randomNumber').value == document.getElementById('calcInput').value){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('notMatched').style.display = 'none';
    }
    else{
        document.getElementById('notMatched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
})