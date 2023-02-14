// tady je místo pro náš program

// DU - 4. lekce

let vystup = document.querySelector('.vysledek');

// Práce s řetězci - Vlastnosti a metody
let title = 'Pýcha a předsudek';

//Vypište do konzole počet znaků názvu.
console.log ('Délka: '+title.length);

//Vypište název filmu převedený na velká písmena.
console.log ('Název filmu: '+ title.toUpperCase());

//Vyřízněte z názvu prvních pět písmen.
console.log ('Ořez vpředu: '+ title.slice(5,title.length));

//Vyřízněte z názvu posledních pět písmen.
console.log ('Ořez vzadu: '+ title.slice(0,title.length-5));


//E-maily

let email = prompt('Zadejte svůj email:');

//Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
let atIndex = email.indexOf('@');

//Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.

let jmeno = email.slice(0,atIndex);

//Dále z e-mailu vyřízněte název domény tedy například gmail.com.

let domena = email.slice(atIndex+1, email.length);

//Ze získaných informací vytvořte objekt, který bude vypadat například takto:

const parsedEmail = {
	userName: jmeno,
	domain: domena,
}

//Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
vystup.textContent = `Jméno: ${parsedEmail.userName}, doména: ${parsedEmail.domain}`;



const address = {
	streetName: 'Pod Kaštany',
	number: 31,
	city: 'Horní Dlouhonosy',
	postalCode: '123 11',
  }
  
  // let vstupUzivatel = prompt("Zadej správné číslo domu:")
  // address.number = Number(vstupUzivatel)
  
  const user1 = {
	fullName: 'Lubomír Větvička',
	login: 'lubos',
	address: {
	  streetName: 'Pod Kaštany',
	  number: 31,
	  city: 'Horní Dlouhonosy',
	  postalCode: '123 11'
	},
	cartItems: 1
  }
  
  // DESTRUKTUROVÁNÍ
  
  const product = {
	name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč'
  }
  
  const {name, price, currency} = product
  