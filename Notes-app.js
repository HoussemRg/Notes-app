
let arrayOfNotes=new Array();
for(let i=1;i<=6;i++){
    let a=document.getElementById(`note${i}`)
    arrayOfNotes.push(a);
}


let index=0;
function insertNote(){
    if(index<6){
        arrayOfNotes[index].classList.add("text-added");
        console.log(arrayOfNotes[index].classList);
        index+=1;
        console.log(index);
    }
    else{
        alert("Pas encore");
    }
}

function deleteNote(){
    arrayOfNotes[index].classList.remove("text-added");
    console.log(arrayOfNotes[index].classList);
    index--;
}

let insertButton=document.getElementById('btn');
insertButton.onclick=insertNote;

let deleteButton=arrayOfNotes[index].querySelector('button');


