function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
}

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu: " + this.brand + "; kolor: " + this.color + "; cena: " + this.price + "zł; system: " + this.system + ".");
};

var galaxyS6 = new Phone('Samsung', 1657, 'biały', 'Android');
var iPhone6S = new Phone('Apple', 2250, 'srebrny', 'iOS');
var onePlusOne = new Phone ('OnePlus', 1299, 'czarny', 'Android');

galaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();