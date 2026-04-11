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
if (window.innerWidth > 768) {
  document.body.innerHTML = `
    <div style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      color: white;
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <div>
        <h1>📱 Apenas celular</h1>
        <p>App bloqueado para computadores. Utilize uma resolução de 768px ou um telefone.</p>
      </div>
    </div>
  `;
}
