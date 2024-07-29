let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
    sidebar.classList.toggle('active');
};


let pf2e = document.querySelector('#pf2e');
let otheritems = document.querySelector('.otheritems');


pf2e.onclick = function () {
    otheritems.classList.toggle('active');
    
};



