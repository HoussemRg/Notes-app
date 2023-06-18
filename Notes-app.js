
let arrayOfNotes=new Array();
let secondContainer=document.querySelector('.flex-2');
console.log(secondContainer.innerHTML);
let index=0;
function addNote(){
    secondContainer.innerHTML+=`<div class="text" id="note">
                               <textarea name="txt" id="txt" cols="52" rows="13"></textarea>
                               <button id="del-btn-${index}" onclick="deleteNote(this);"><img src="images/delete.png" alt="del" class="img-del"></button>
                               </div>`;
}
let btn=document.querySelector('#btn');
btn.onclick=addNote;

function deleteNote(button){
    button.parentElement.remove();
}



