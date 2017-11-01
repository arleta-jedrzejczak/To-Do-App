document.addEventListener("DOMContentLoaded", function(){

//delete
const list = document.querySelector('#list');
list.addEventListener('click', function(e){
    if (e.target.className == 'but') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add
const addForms = document.forms['add'];
addForms.addEventListener('submit', function(e){
    e.preventDefault();
    const val = addForms.querySelector('input[type="text"]').value;

//create
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const delBtn = document.createElement('button');

//add content
    delBtn.textContent = 'Delete';
    nameSpan.textContent = val;

//add class
    nameSpan.classList.add('name');
    delBtn.classList.add('but');

//append
    li.appendChild(nameSpan);
    li.appendChild(delBtn);
    gut.appendChild(li)
});

//hide items
    const hideBox = document.querySelector("#hide");
    hide.addEventListener("change", function(e) {
        if(hideBox.checked == true) {
            gut.style.display = "none";
        }
        else {
            gut.style.display = "initial";
        }
    });

//search
    const searchBar = document.forms["search"].querySelector("input");
    searchBar.addEventListener("keyup", function(e) {
        const term = e.target.value.toLowerCase()
        const items = gut.getElementsByTagName("li");
        Array.from(items).forEach(function(item) {
            const title = item.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1) {
                item.style.display = "block";
            }
            else {
                item.style.display = "none";
            }
        })
    });

    //tabbed content
        const tabs = document.querySelector(".tabs");
        const panels = document.querySelectorAll(".panel");
        tabs.addEventListener("click", function(e){
            if(e.target.tagName == "LI"){
                const targetPanel = document.querySelector(e.target.dataset.target);
                Array.from(panels).forEach(function(panel){
                    if(panel == targetPanel){
                        panel.classList.add("active");
                    }
                    else{
                        panel.classList.remove("active");
                    }
                })
            }
        })
        
     })*/
