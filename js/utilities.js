function getValueFromInput(inputId){
    const val=document.getElementById(inputId).value;
    return val;
}
function getStringFromElement(id){
    const val=document.getElementById(id).innerText;
    return val;
}
function getNumberFromElement(id){
    const val=document.getElementById(id).innerText;
    return parseFloat(val);
}
function addElement(id,text){
    const li=document.createElement('li');
    li.innerText=text;
    document.getElementById(id).appendChild(li);
}
function setText(id,amount){
    document.getElementById(id).innerText=amount;
}
