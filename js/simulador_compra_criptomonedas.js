// KRYPTOBOT
//del 2 de marzo de 2020 al 1 de marzo de 2021

//Mensaje de bienvenida
const kryptoBot = function(){

	let nombre = prompt("Hola! Me llamo Kryptobot, ¿Cuál es tu nombre?");
	
	alert(
		`Hola ${nombre}! Te cuento que este programa te permite cargar la criptomoneda que tengas en tu wallet y te dice a cuantos dólares equivalen`
	);
	
	document.write(`Esta es la billetera de: <b>${nombre}</b><br><br>`);
	
	let billetera = [];
	
	let respuesta = "S";
	
	while (respuesta == "S" || respuesta == "s") {
		let seleccionCripto = parseInt(
			prompt(
				"Seleccioná la criptomoneda que querés cargar: \n 1 = ADA / 2 = ATOM / 3 = bitcoin / 4 = ether / 5 = Litecoin"
			)
		);
	
		//Selección de cripto a simular
		let cantidad = parseInt(
			prompt(
				"Ingresá el monto que tenés en tu wallet de la criptomoneda seleccionada: "
			)
		);
	
		//Creación de objeto criptomoneda (si en un futuro tengo que agregar criptos, las agrego acá como nuevos objetos)
		class Criptomoneda {
			constructor(nombre, valor2021, porcentaje, cantidad) {
				this.nombre = nombre;
				this.valor2021 = valor2021;
				this.porcentaje = porcentaje;
				this.cantidad = cantidad;
			}
			imprimirDatos() {
				return `
				Criptomoneda: <b>${this.nombre}</b><br>
				En el último año tuvo un aumento del: <b>${this.porcentaje}%</b><br>
				Valor marzo 2021:<b>${this.valor2021}</b><br>`;
			}
			cantidadCompra() {
				return `
				Vos tenes: <b>${this.cantidad} ${this.nombre}</b><br>
				Equivalen a: <b>U$S${this.cantidad * this.valor2021}</b>`;
			}
		}
	
		//Valores criptomonedas
		let cripto01 = new Criptomoneda("ADA", 1.2961, 2635, cantidad);
		let cripto02 = new Criptomoneda("ATOM", 18.6954, 504, cantidad);
		let cripto03 = new Criptomoneda("Bitcoin", 49595, 556, cantidad);
		let cripto04 = new Criptomoneda("Eth", 1570.03, 677, cantidad);
		let cripto05 = new Criptomoneda("Litecoin", 61.415, 175.97, 75, cantidad);
	
		//función imprimir datos criptomoneda
		function datosCriptomoneda(seleccionCripto) {
			switch (seleccionCripto) {
				case 1:
					return `${cripto01.imprimirDatos()}<br>${cripto01.cantidadCompra()}<br><br>`;
				case 2:
					return `${cripto02.imprimirDatos()}<br>${cripto02.cantidadCompra()}<br><br>`;
				case 3:
					return `${cripto03.imprimirDatos()}<br>${cripto03.cantidadCompra()}<br><br>`;
				case 4:
					return `${cripto04.imprimirDatos()}<br>${cripto04.cantidadCompra()}<br><br>`;
				case 5:
					return `${cripto05.imprimirDatos()}<br>${cripto05.cantidadCompra()}<br><br>`;
				default:
					"El dato no es correcto. Intentalo nuevamente";
					break;
			}
		}
		billetera.push(datosCriptomoneda(seleccionCripto));
		respuesta = prompt("¿Querés probar con otro número? (S/N): ");
	}
	
	document.write(billetera);
	alert("Gracias por usarme! Volvé pronto 😉");
}
