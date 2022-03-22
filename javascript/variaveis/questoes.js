const imprimir = require('../modulo/index.js');

// A grande questão - variáveis

// escopo global
var resultado;
const y = 0;

{
	// bloco pai
	var x = 9;
	let resultado;

	{
		// bloco filho
		let y;

		x = x + 1;
		y = 10;
		resultado = x + y;
		total = resultado;
	}

	var total;
}

// O que será exibido no console?
// undefined, 20 ou 19
imprimir(resultado);

// Marque sua resposta
// A: [] undefined
// B: [] 20
// C: [] 19
