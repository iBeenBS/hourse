let moeda = "Reais";
let simboloMoeda = "R$";

const botoes = document.querySelectorAll('.nav-btn');

botoes.forEach(btn => {
	btn.addEventListener('click', () => {

		botoes.forEach(b => b.classList.remove('active'));

		btn.classList.add('active');
	});
});
/*
  window.addEventListener('load', () => {
 
						document.querySelectorAll('.reveal').forEach(el => {
						el.classList.add('show');
						});
					});	*/


function setMoedaR() {
	  moeda = "Reais";
	  simboloMoeda = "R$";
}
function setMoedaT() {
	  moeda = "Thaisinhas";
	  simboloMoeda = "T$";
}