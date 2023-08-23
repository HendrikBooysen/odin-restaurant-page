import menu from "./menu";
import contact from "./contact";
import home from "./home";
import { clearPage } from "./display";

const tabButtons = () => {

    const mainContent = document.querySelector('#mainContent')

    const tabButtonsDiv = document.createElement('div');
    tabButtonsDiv.setAttribute('id','tabButtonDiv');
    mainContent.appendChild(tabButtonsDiv);

    
    

    

const menuBtn = document.createElement('button');
menuBtn.setAttribute('id','menuBtn');
menuBtn.classList.add("menuBtn");
tabButtonsDiv.appendChild(menuBtn);
menuBtn.textContent = "Menu"

const homeBtn = document.createElement('button');
homeBtn.setAttribute('id','homeBtn');
homeBtn.classList.add("homeBtn");
tabButtonsDiv.appendChild(homeBtn);
homeBtn.textContent = "Home"


const contactBtn = document.createElement('button');
contactBtn.setAttribute('id','contactBtn');
contactBtn.classList.add("contactBtn");
tabButtonsDiv.appendChild(contactBtn);
contactBtn.textContent = "Contact"




menuBtn.addEventListener('click',()=>{
    clearPage();
    menu();
    });


    
contactBtn.addEventListener('click',()=>{
    clearPage();
    contact();
    });

homeBtn.addEventListener('click',()=>{
    clearPage();
    home();
    });


   

}



export default tabButtons