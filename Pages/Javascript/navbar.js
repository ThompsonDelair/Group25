
// get navigation div reference

let navDiv = document.getElementById('navigation');

// create nav element

let nav = document.createElement("nav");
nav.classList.add('navbar','navbar-expand-lg','navbar-dark');
//nav.setAttribute('style','background-color: #3f7547');
navDiv.appendChild(nav);

// back button
let back = document.createElement('a');
back.setAttribute('id','back');
back.setAttribute('href','Not implemented');
back.style.marginRight = 10;
back.style.color = '#FFFFFF';
back.innerHTML = '<i style="font-size:28px" class="fa">&#xf0d9;</i>';
nav.append(back);

// current page

let currentUl = createElement('ul');
currentUl.classList.add('nav','navbar-nav','navbar-logo','mx-auto');
nav.appendChild(currentUl);

let currentLi = createElement('li');
currentLi.classList.add('nav-item');
currentUl.appendChild(currentLi);

let currentA = createElement('span');
currentA.setAttribute('id','currentPage');
currentA.style.color = '#F9F9F9';
currentA.innerHTML = 'Home';
currentLi.appendChild(currentA);

// navbar toggle

let button = createElement('button');
button.classList.add('navbar-toggler','pull-right');
setAttributes(button,{
    'type':'button',
    'data-toggle':'collapse',
    'data-target':'#navbarSupportedContent',
    'aria-controls':'navbarSupportedContent',
    'aria-expanded':'false',
    'aria-label':'Toggle navigation'
});
nav.appendChild(button);

let buttonSpan = createElement('span');
buttonSpan.classList.add('navbar-toggler-icon');
button.appendChild(buttonSpan);

// collapse div

let collapseDiv = createElement('div');
setAttributes(collapseDiv,{
    'class':'collapse navbar-collapse',
    'id':'navbarSupportedContent'
});
nav.appendChild(collapseDiv);

// collapse list

let collapseUl = createElement('ul');
collapseUl.classList.add('navbar-nav','mr-auto');
collapseDiv.appendChild(collapseUl);

for (i = 0; i < 3; i++){
    var li = createElement('li');
    li.classList.add('nav-item');
    collapseUl.appendChild(li);
    
    var a = createElement('a');
    a.classList.add('nav-link');
    li.appendChild(a);
}

let anchorOne = collapseUl.childNodes[0].childNodes[0];
anchorOne.setAttribute('href','index.html');
anchorOne.innerHTML = 'Home';

let anchorTwo = collapseUl.childNodes[1].childNodes[0];
anchorTwo.setAttribute('href','aboutus.html');
anchorTwo.innerHTML = 'About us';

//let anchorTwo = collapseUl.childNodes[1].childNodes[0];
//anchorTwo.setAttribute('href','page4.html');
//anchorTwo.innerHTML = 'Community Tips';

collapseUl.childNodes[2].classList.add('dropdown');
let anchorThree = collapseUl.childNodes[2].childNodes[0];
anchorThree.classList.add('dropdown-toggle');
setAttributes(anchorThree,{
    'href':'#',
    'id':'navbarDropdown',
    'role':'button',
    'data-toggle':'dropdown',
    'aria-haspopup':'true',
    'aria-expanded':'false'
});
anchorThree.innerHTML = "Get Involved";

// drop down options

let dropdownDiv = createElement('div');
dropdownDiv.classList.add('dropdown-menu');
dropdownDiv.setAttribute('aria-labelledby','navbarDropdown');
collapseUl.childNodes[2].appendChild(dropdownDiv);

for (i = 0;i < 5;i++){
    var a = createElement('a');
    a.classList.add('dropdown-item');
    dropdownDiv.appendChild(a);
    i++
    if(i < 4){
        var div = createElement('div');
        div.classList.add('dropdown-divider');
        dropdownDiv.appendChild(div);
    }
}

dropdownDiv.childNodes[0].setAttribute('href','http://www.lovefoodhatewaste.ca');
dropdownDiv.childNodes[0].innerHTML = "Love Food Hate Waste";

dropdownDiv.childNodes[2].setAttribute('href','https://www.foodbank.bc.ca/our-programs/food-recovery/');
dropdownDiv.childNodes[2].innerHTML = "Greater Vancouver Foodbank";

dropdownDiv.childNodes[4].setAttribute('href','http://www.tapncook.ca/');
dropdownDiv.childNodes[4].innerHTML = "Tap'N Cook recipes";

function createElement (input){
    return document.createElement(input);
}

function setAttributes(element, attributes){
    for(var key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}

// set page-specific info
setPage();
function setPage(){
    var currentPage = document.getElementById('currentPage');
    var back = document.getElementById('back');
    
    switch(navDiv.getAttribute('pageNumber')){
        case '1':
            currentPage.innerHTML = ('Home');
            back.setAttribute('display','none');
            break;
        case '2':
            currentPage.innerHTML = ('Food Selection');
            back.setAttribute('href','index.html');
            break;
        case '3':
            currentPage.innerHTML = ('Food Info');
            back.setAttribute('href','page2.html');
            break;
        case 'about':
            currentPage.innerHTML = ('About us');
            back.style.display = 'none';
            break;        
        default:
            back.setAttribute('href','#');
            break;
    }
}
