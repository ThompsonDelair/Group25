function CreateNavbar(){
    
    // get navigation div reference
    
    let navDiv = document.getElementById('navigation');
        
    // create nav element
    
    let nav = document.createElement("nav");
    nav.classList.add('navbar','navbar-expand-lg','navbar-dark');
    navDiv.appendChild(nav);
    
    // current page
    
    let currentUl = createElement('ul');
    currentUl.classList.add('nav','navbar-nav','navbar-logo','mx-auto');
    nav.appendChild(currentUl);
    
    let currentLi = createElement('li');
    currentLi.classList.add('nav-item');
    currentUl.appendChild(currentLi);
    
    let currentA = createElement('a');
    currentA.classList.add('nav-link');
    currentA.setAttribute('href','#');
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
    
    let collapseUl = createElement('ul');
    collapseUl.classList.add('navbar-nav','mr-auto');
    collapseDiv.appendChild(collapseUl);
    
    (i = 0; i < 3; i++){
        var li = createElement('li');
        li.classList.add('nav-item');
        collapseUl.appendChild(li);
        
        var a = createElement('a');
        a.classList.add('nav-link');
        li.appendChild(a);
    }
    
    let anchorOne = collapseUl.childNodes[0].childNodes[0];
    anchorOne.setAttribute('href','aboutus.html');
    anchorOne.innerHTML = 'About us';
    
    let anchorTwo = collapseUl.childNodes[1].childNodes[0];
    anchorTwo.setAttribute('href','page4.html');
    anchorTwo.innerHTML = 'Community Tips';
    
    collapseUl.childNodes[2].classList.add('dropdown');
    let achorThree = collapseUl.childNodes[2].childNodes[0];
    
    
    
}

function createElement (string input){
    return document.createElement(input);
}

function setAttributes(element, attributes){
    for(var key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}