module.exports = class {
	openBars() {
		let x = document.getElementById('navber');
		if (x.className === 'topnav') {
			x.className += ' responsive';
		} else {
			x.className = 'topnav';
		}
	}
};
