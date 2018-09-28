//Select Dom Items

const menubtn = document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menubranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State

let showMenu = false;

menubtn.addEventListener('click',toggleMenu);


function toggleMenu(){
	if(!showMenu){
		menubtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menubranding.classList.add('show');
		navItems.forEach(item => item.classList.add('show'));

		//Set MenuSate
		showMenu = true;
	}else{
		menubtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menubranding.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'));

		//Set MenuSate
		showMenu = false;
	}
}