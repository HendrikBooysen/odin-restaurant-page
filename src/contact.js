


const contact = () => {
    const display = document.querySelector('#display');
    
    const contactPage = document.createElement('div');
    
    contactPage.classList.add("page-content");
    display.appendChild(contactPage);
    
    
    const para = document.createElement('p');
    const node = document.createTextNode("  Eget nullam non nisi est. Mauris pharetra et ultrices neque ornare aenean euismod. test Contact");
    
    para.appendChild(node);
    contactPage.appendChild(para);
    
    }
    
    export default contact;