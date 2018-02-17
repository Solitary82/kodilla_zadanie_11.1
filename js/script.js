function Phone(brand, price, color, stock, shippingCost) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.stock = stock;
    this.shippingCost = shippingCost;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and there are " + this.stock + " pieces in stock. Shipping cost worldwide is " + this.shippingCost + " $.");
}

var samsungGalaxyS6 = new Phone("Samsung", 1250, "gray", 60, 50);
var iPhone6s = new Phone("Apple", 2000, "white", 45, 60);
var onePlusOne = new Phone("Oneplus", 1670, "silver", 20, 55);

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();