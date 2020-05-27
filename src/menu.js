const renderMenu = (container) => {

	//creation of grid to house menu content
	let menu = container;
	menu.style.setProperty('display', 'grid');
	menu.style.setProperty('grid-template', 'repeat(2,150px) / repeat(2,150px)');

	//creation of grid items
	let i = 0;
	while (i < 4) {
		let menuItem = document.createElement('div');
		menuItem.style.setProperty('background-image', 'url(https://pinchofyum.com/wp-content/uploads/veggie-lasagna-square-183x183.jpg)');
		menuItem.style.setProperty('background-size', 'cover');
		menuItem.style.setProperty('background-repeat', 'no-repeat');
		menuItem.style.setProperty('height', '100px');
		menuItem.style.setProperty('width', '100px');
		menu.appendChild(menuItem);
		i++;
	}

	container.appendChild(menu);

}

export { renderMenu }