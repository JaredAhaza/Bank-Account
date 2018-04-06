function AccountDetails (name, initial){
    this.names = name;
    this.initialDeposit = initial;
    this.newBal = initial;
}
AccountDetails.prototype.depositAmount = function(deposit){
    this.newBal = this.newBal+deposit;
    return this.newBal;
}
AccountDetails.prototype.withdrawAmount = function(withdraw){
    this.newBal = this.newBal-withdraw;
    return this.newBal;
}
$(document).ready(function(){
    var accounts = [];
    $("form#Account").submit(function(event){
        event.preventDefault();
        var inputtedNames = $("input#name").val();
        var inputtedDeposit = parseInt($("input#initialDeposit").val());
        var newAccount = new AccountDetails(inputtedNames, inputtedDeposit);
        accounts.push(newAccount);

        $("ol#accounts").append("<li><span class=account>"+newAccount.names+"</span></li>");

        $(".account").last().click(function(){
            var index = accounts.indexOf(newAccount);
            $("#showAccount h2").text(newAccount.names);
            $(".names").text(newAccount.names);
            $(".initial").text(newAccount.initialDeposit);
            $(".balance").text(newAccount.newBal);
            $("form#amount-change").data("id",index);
        });
    });
    $("button#deposit").click(function (event) {
        event.preventDefault();
        var index = $("form#amount-change").data("id");
        var findAccount = accounts[index];
        var inputtedNewAmount = parseInt($("input#initialDeposit").val());
        $(".balance").html(findAccount.depositAmount(inputtedNewAmount));
    });
    $("button#withdraw").click(function (event) {
        event.preventDefault();
        var index = $("form#amount-change").data("id");
        var findAccount = accounts[index];
        var inputtedNewAmount = parseInt($("input#withdrawal").val());
        $(".balance").html(findAccount.withdrawAmount(inputtedNewAmount));
    });

});
