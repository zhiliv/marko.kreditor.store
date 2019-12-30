module.exports = class {
	onCreate(inp) {}
	onOpenNav() {
		let st = document.getElementsByClassName('navbar-toggler')[0];
		let nav = document.getElementsByClassName('navbar-collapse')[0];
		if (st.classList.contains('open')) {
			nav.style.display = 'none';
			st.classList.remove('open');
		} else {
			nav.style.display = 'block';
			st.classList.add('open');
		}
	}
};
