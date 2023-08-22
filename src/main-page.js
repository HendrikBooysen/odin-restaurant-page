 

const mainPage = () =>{
    const background = document.querySelector('#background');
    const mainContent = document.createElement('div')
    mainContent.setAttribute('id','mainContent');
    mainContent.classList.add("mainContent");
    background.appendChild(mainContent);
    
}

export default mainPage;