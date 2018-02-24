// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	
this.currency = currency;
if(this.currency <= 0){
	this.obj= {}
}
else if(this.currency > 10000){
	this.obj= {
	error: "You are rich, my friend! We don't have so much coins for exchange"
	}
}	
else {
function hh() { return Math.floor(this.currency/50)};
function qq() { this.q = this.currency-hh()*50; return Math.floor(this.q/25)};
function dd() { this.d = this.q-qq()*25; return Math.floor(this.d/10)};
function nn() { this.n = this.d-dd()*10; return Math.floor(this.n/5)};
function pp() { this.p = this.n-nn()*5; return Math.floor(this.p/1)};

this.obj= {
	"H": hh(),
	"Q": qq(),
	"D": dd(),
	"N": nn(),
	"P": pp()	
	}
	
	for (var key in this.obj) {
		if(this.obj[key]==0){
			delete this.obj[key];
		}
	}			
}

return this.obj;
}
