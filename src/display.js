

const displayPage = () =>{

    const display = document.createElement('div')
    display.setAttribute('id','display');
    display.classList.add("display");
    mainContent.appendChild(display);

}

function clearPage() {

    const display = document.querySelector('#display');
    const clear = document.querySelector(".page-content");
   
   if(clear){
    display.removeChild(clear);
   
   }
   
   }

export default displayPage;
export { clearPage };