const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 0;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");
const p = document.getElementById("interest");
const interestRate = 4;
const posiRate = 2;

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

// accept deposits from user, store deposits in array
btnDeposit.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit.value < 0.01 || userDeposit.value > 1,000,000) {
            alert("You can only deposit between $0.01 and $1,000,000.")
            return userDeposit.value = '';
        } else {
    
        // push deposit to array
        deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        totalBalance += (Number(userDeposit.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
        if(totalBalance > 0){
            interest = totalBalance + ((posiRate/ 100) * totalBalance);
            interestFormatted = formatter.format(interest);
            document.getElementById("interest").innerHTML = "Total interest worth " + interestFormatted;
            p.style.color = "green";
            let link = document.getElementById("recommend");
            link.href="positivePage.html";
        }
        if(totalBalance < 0){
            debt = totalBalance + ((interestRate / 100) * totalBalance);
            debtFormatted = formatter.format(debt);
            document.getElementById("interest").innerHTML = "Total debt owed " + debtFormatted;
            p.style.color = "yellow";
            let link = document.getElementById("recommend");
            link.href="negativePage.html";
        }
        if(totalBalance == 0){
            document.getElementById("interest").innerHTML = null;
        }

    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        if (userWithdraw.value > totalBalance + 1000) {
            alert("Your total balance cannot drop below $1000.");
            return userWithdraw.value = '';
        } else {
        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        // calculate Total Balance
        totalBalance -= (Number(userWithdraw.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
        if(totalBalance > 0){
            interest = totalBalance + ((posiRate/ 100) * totalBalance);
            interestFormatted = formatter.format(interest);
            document.getElementById("interest").innerHTML = "Total interest worth " + interestFormatted;
            p.style.color = "green";
            let link = document.getElementById("recommend");
            link.href="positivePage.html"; 
        }
        if(totalBalance < 0){
            debt = totalBalance + ((interestRate / 100) * totalBalance);
            debtFormatted = formatter.format(debt);
            document.getElementById("interest").innerHTML = "Total debt owed " + debtFormatted;
            p.style.color = "yellow";
            let link = document.getElementById("recommend");
            link.href="negativePage.html";
        }
        if(totalBalance == 0){
            document.getElementById("interest").innerHTML = null;
        }

    // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});



// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
