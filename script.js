let btn = document.querySelector('#btn');
let othersidebaritems = document.querySelector('.othersidebaritems')
let secondarysidebar = document.querySelector('.secondarysidebar');

btn.onclick = function () {
    othersidebaritems.classList.toggle('active')
    secondarysidebar.classList.toggle('active')
    ;
};


let pf2e = document.querySelector('#pf2e');
let otheritems = document.querySelector('.otheritems');


pf2e.onclick = function () {
    otheritems.classList.toggle('active');
    
};



