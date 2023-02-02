const kong = document.querySelector('.header .nav-bar .nav-list .kong');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

kong.addEventListener('click', () => {
	kong.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		Inicio.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});