//User interface
$(document).ready(function() {
  $("form#Enter").submit(function(event) {
    event.preventDefault();
var name = $('#name').val();
var initialdeposit = $('#initialDeposit').val();
var depositamount = $('#deposit').val();
var withdrawamount = $('#withdraw').val();
//backend logic
function Bank(name, initialDeposit, withdrawamount, depositamount) {
this.name = name;
this.withdrawamount = initialDeposit;
this.depositamount = AmountW;
this.depositamount = AmoutD
};

Bank.prototype.getName = function() {
  return this.name
};
Bank.prototype.getinitialDeposit = function() {
  return this.initialDeposit
};
Bank.prototype.getwithdrawamount = function() {
  return this.withdrawamount
};
Bank.prototype.getdepositamount = function() {
  return this.depositamount
};
function currentbalance(balance){

}
