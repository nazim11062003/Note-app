const createBtn=document.querySelector(".createBtn");
const notes_container=document.querySelector(".notes_container");
const notes=document.querySelectorAll(".input_box");

function saveNote(){
    localStorage.setItem("notes",notes_container.innerHTML);
}

function showNote(){
    notes_container.innerHTML=localStorage.getItem("notes");
}
showNote();

createBtn.addEventListener("click",()=>{
    let input_box=document.createElement("p");
    let img=document.createElement("img");
    input_box.className="input_box";
    input_box.setAttribute("contenteditable","true");
    img.src="delete.png";
    input_box.appendChild(img);
    notes_container.appendChild(input_box);
    saveNote();
});

notes_container.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG")
        {
            e.target.parentElement.remove();
            saveNote();
        }
    else if (e.target.tagName==="P")
        {
            notes=document.querySelectorAll(".input_box");
            notes.forEach(nt=>{
                nt.onkeyup=function(){
                    saveNote();
                }
            })
        }
});

document.addEventListener("keydown",event=>{
    if(event.key==='Enter')
        {
            document.execCommand("insertLineBreak");
            event.preventDefault();
            saveNote();
        }
})