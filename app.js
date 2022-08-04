let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
    }
    if(titleval=="")
    { window.alert("please enter the title ");}
       else{document.getElementById("ss").innerHTML="";

       const d=new Date();
        card.innerHTML=`<input type="checkbox">
                                <h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                            <p>${d}</p>
                             <button class="del">Delete</button>;
                             <button class="edi">Edit</button>`;
        notesElem.appendChild(card);
        updateLs()
    }
    
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=>{
        const r =card.remove();
         updateLs();})
    let back=document.querySelector(".back");
     back.addEventListener('click', ()=>{
            add.r
       updateLs();
     })
     let dele=document.querySelector(".delete")
     dele.addEventListener('click',()=>{
        let checkbox=card.querySelector('input[type="checkbox"]:cheacked');
        console.log(checkbox.value)
            card.remove()
            updateLs()
        


     })

    
    let edi=card.querySelector(".edi");
    del.addEventListener('click', ()=>{
        card.isContentEditable();
        updateLs();
    })


}

function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}