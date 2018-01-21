//delete
const list = document.querySelector('#list');
list.addEventListener('click', function(e){
    if (e.target.className == 'list__delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
    let points = document.getElementById("list").getElementsByTagName("li").length;
    const end =  document.querySelector('#end');
    if(points < 1) {
        end.classList.remove("visible");
    }
});

//restart
const reload = document.querySelector('#reload');
reload.addEventListener("click", function(e){
    window.location.reload();
})

//add
const addForms = document.forms['addItem'];
addForms.addEventListener('submit', function(e){
    e.preventDefault();
    const val = addForms.querySelector('#add').value;

//create
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const delBtn = document.createElement('button');

//add content
    delBtn.textContent = 'Done!';
    nameSpan.textContent = val;

//add class
    li.classList.add('list__item');
    nameSpan.classList.add('list__name');
    delBtn.classList.add('list__delete');

//append
    li.appendChild(nameSpan);
    li.appendChild(delBtn);
    list.appendChild(li);
});

//hide items
    const hideBox = document.querySelector("#hide");
    hide.addEventListener("change", function(e) {
        if(hideBox.checked == true) {
            list.style.display = "none";
        }
        else {
            list.style.display = "initial";
        }
    });

//search
    const searchBar = document.forms["search"].querySelector("#searcher");
    searchBar.addEventListener("keyup", function(e) {
        const term = e.target.value.toLowerCase()
        const items = list.getElementsByTagName("li");
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

    //mail
        const mail = document.querySelector("#mail");
        const user = 'arleta.joanna.jedrzejczak';
        const domain = 'gmail.com';
        const subject = '?subject=Mail from To Do';
        const text = 'Nice, click please :)';
        const all = ('<a class="tabs__item--newlink" hr' + 'ef="mai' + 'lto:' + user + '\x40' + domain + subject + '">' + text + '<'+'/a>');
        mail.addEventListener("click", function(e){
            e.target.innerHTML = all;
        })