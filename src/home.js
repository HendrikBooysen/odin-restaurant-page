

const home = () => {
    const display = document.querySelector('#display');
    
    const homePage = document.createElement('div');
    
    homePage.classList.add("page-content");
    display.appendChild(homePage);
    
    
    const para = document.createElement('p');
    const node = document.createTextNode(" Welcome Home! ");
    
    para.appendChild(node);
    homePage.appendChild(para);
    
    }
    
    export default home;