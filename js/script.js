

/* const addartical = document.querySelector("#addartical") //null
const ArticalWrap=document.querySelector("#ArticalWrap")
const singleArticalWrap = document.querySelector("#singleArticalWrap")
//read from localstorage
const readFromStorage = (key="articals") => JSON.parse(localStorage.getItem(key));
//write to localstorage
const writeToStorage = (data, key="articals") => localStorage.setItem(key, JSON.stringify(data))
const articHeads = ["name", "age", "email"]

//Add Form
if(addartical){
    addartical.addEventListener("submit", function(e){
        e.preventDefault()
        const artical = {
            id:Date.now(),
        }
            articHeads.forEach(head=> artical[head] = this.elements[head].value)
        const articals = readFromStorage()
        articals.push(artical)
        writeToStorage(articals)
        addartical.reset()
        window.location.href="index.html"
    })
}

 */


let title = document.getElementById('title');
let content = document.getElementById('content');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;



//creat artical
let dataArtical = [];
if (localStorage.artical != null) {
    dataArtical = JSON.parse(localStorage.artical)
} else {
    dataArtical = [];
}
// localStorage.artical != null ? dataArtical = JSON.parse(localStorage.artical) : dataArtical = [];
submit.onclick = function () {
    let newArtical = {
        title: title.value,
       
    }
    //count
    if(mood === 'create') {
if(newArtical.count > 1){
 for(let i = 0; i < newArtical.count ; i++){
        dataArtical.push(newArtical);
    }
} else{
      dataArtical.push(newArtical);
    } 
    } else{
        dataArtical [tmp] = newArtical;
        submit.innerHTML = "create";
          mood = 'create';
          count.style.display = 'block';
    }
    localStorage.setItem('artical', JSON.stringify(dataArtical))
    clearDate();
    showDate();
  
  
}
//clear inputs
function clearDate() {
    title.value = '';
    content.content = '';
    
   

}
//save localStorage
//read inputs 
function showDate() {
    let table = '';
    for (let i = 0; i < dataArtical.length; i++) {
        table += `   
        <tr>
        <td>${i}</td>
        <td>${dataArtical[i].title}</td>
        <td>${dataArtical[i].content}</td>
  
      
       
        <td><button onclick="deletDate( ${i} )" class="btn btn-primary btn-dark" id="delete"> delete</button></td>
      </tr>`
    }
    document.getElementById('hambozo').innerHTML = table;
    let btnDeleted =document.getElementById('deleteAll') 
    if (dataArtical.length > 0){
    btnDeleted.innerHTML =`
    <button onclick="deleteAll( ${dataArtical.length} )" class="btn btn-primary btn-dark" > deleteAll</button>`
} else {
    btnDeleted.innerHTML = '';
}
}
showDate();
//delete
function deletDate(i)
{

    dataArtical.splice(i,1);
    localStorage.artical = JSON.stringify(dataArtical);
    showDate();
}
//delete all
function deleteAll(){
    localStorage.clear();
    dataArtical.splice(0);
    showDate();
}
