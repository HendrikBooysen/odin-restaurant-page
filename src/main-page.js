


const mainPage = () =>{
    
    const content = document.querySelector("#content");

    const background= document.createElement('div');
    background.setAttribute('id','background');
    content.appendChild(background);  
  
    const mainContent = document.createElement('div')
    mainContent.setAttribute('id','mainContent');
    mainContent.classList.add("mainContent");
    background.appendChild(mainContent);
    

    

    
    
};

export default mainPage;