

const menu = () => {
const display = document.querySelector('#display');

const menuPage = document.createElement('div');

menuPage.classList.add("page-content");
display.appendChild(menuPage);


const para = document.createElement('p');
const node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit cursus risus at ultrices mi tempus imperdiet. Egestas congue quisque egestas diam in arcu. Consectetur lorem donec massa sapien faucibus et molestie. Tortor pretium viverra suspendisse potenti. Magna eget est lorem ipsum dolor sit amet. Vulputate ut pharetra sit amet aliquam id. Risus ultricies tristique nulla aliquet enim tortor at. Tortor pretium viverra suspendisse potenti nullam ac tortor. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Eget nullam non nisi est. Mauris pharetra et ultrices neque ornare aenean euismod.");

para.appendChild(node);
menuPage.appendChild(para);

}

export default menu;