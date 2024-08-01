let persons=document.getElementById('person')
let paragraph=document.getElementById('para')
let count=0
let total=0

function increment(){
    count++
    persons.textContent=count
}
function save(){
   
    total+=count
    paragraph.textContent=' Total people :'+total
   
    count=0
    persons.textContent=count
}