const pageLoad = (elementArray,container) => {
	let i = 0;
	while (i < elementArray.length) {
		container.appendChild(elementArray[i]);
		i++;
	}
	container.style.setProperty('background-image', 'url(https://paulmartinsamericangrill.com/wp-content/uploads/2017/04/Paul-Martins-American-Grill-Rancho-Cucamonga-5.jpg)');
	container.style.setProperty('background-repeat', 'no-repeat');
	container.style.setProperty('background-size', 'cover');
	container.style.setProperty('color', 'white');
}

export { pageLoad }