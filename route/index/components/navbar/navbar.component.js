module.exports = class {
	onCreate() {
		this.state = {
			listMenu: [
				{ name: 'Главная', route: '/' },
				{ name: 'Новости', route: '/news' },
				{ name: 'Статьи', route: '/article' },
				{ name: 'Акции', route: '/action' }
			]
		};
	}
	openBars() {
		let x = document.getElementById('myTopnav');
		if (x.className === 'topnav') {
			x.className += ' responsive';
		} else {
			x.className = 'topnav';
		}
	}
};
