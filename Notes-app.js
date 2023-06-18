let secondContainer=document.querySelector('.flex-2');
let savedContent=localStorage.getItem('flex2');
if(!savedContent){
    secondContainer.innerHTML='';
}
else{
    secondContainer.innerHTML=savedContent;
}
let arrayOfNotes=new Array();

console.log(secondContainer.innerHTML);
let index=0;
function addNote(){
    secondContainer.innerHTML+=`<div class="text" id="note">
                               <textarea name="txt" id="txt-${index}" cols="52" rows="13" oninput="saveContent(${index});"></textarea>
                               <button id="del-btn-${index}" onclick="deleteNote(this);"><img src="images/delete.png" alt="del" class="img-del"></button>
                               </div>`;
    localStorage.setItem('flex2',secondContainer.innerHTML);
    index++;
}
let btn=document.querySelector('#btn');
btn.onclick=addNote;

function deleteNote(button){
    let div=button.parentElement;
    let index=div.querySelector('textarea').id.split('-')[1];
    localStorage.removeItem(`txt-${index}`);
    console.log(localStorage);
    div.remove();
    localStorage.setItem('flex2',secondContainer.innerHTML);
}

function saveContent(index){
    let textarea=document.getElementById(`txt-${index}`);
    let save=textarea.value;
    localStorage.setItem(`txt-${index}`,save);
}
function restoreContent(index){
    let saved=localStorage.getItem(`txt-${index}`);
    let textarea=document.getElementById(`txt-${index}`);
    console.log(saved);
    if(saved){
        textarea.value=saved;
    }  
}
for(let i=0;i<index;i++){
    restoreContent(i);
}

console.log(localStorage);


