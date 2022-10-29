function myFunction() {

    const form = document.getElementById('calc');

    form.addEventListener("submit", function(event){
        event.preventDefault();
    })
    
    var x = document.getElementById("calc");
    var total;
    var i;
    for (i = 0; i < x.length - 1;i++) {
        x.elements[i].value;
    }
    total = x.elements[0].value * (x.elements[2].value / 1200) / (1 - (Math.pow(1 / (1 + (x.elements[2].value / 1200)), (x.elements[1].value * 12))));
    formatTotal = total.toFixed(2);

    console.log(total);
        
    if (x.elements[0].value == ''){
        total = "Please enter data for loan amount";
        document.getElementById("demo").innerHTML = total;
    }
    else if (x.elements[1].value == ''){
        total = "Please enter data for loan duration";
        document.getElementById("demo").innerHTML = total;
    }
    else if (x.elements[2].value == ''){
        total = "Please enter data for loan interest rate";
        document.getElementById("demo").innerHTML = total;
    }
    else{           
        document.getElementById("demo").innerHTML = "<br>" + "<mark>" + "$" + formatTotal + " per month";
        document.getElementById("calculations").innerHTML = "<mark>" + "Formula for amortization: " + 
                                                            x.elements[0].value + "*" + "(" + x.elements[2].value + 
                                                            "/" + 1200 + ")" + "/" + 1 + "-" + "(" + 1 + "+" + "(" + 
                                                            x.elements[2].value + "/" + 1200 + ")" + ")" + "<sup>" + x.elements[1].value + "*" + 12 + "</sup>";
        
            var rnd = function(n) {
                return Math.round(n * 100) / 100; // round to 2 digits
            };
            //console.log("The button was clicked.");
            //var principal = document.getElementById('principal').value;
            var principal = Number(x.elements[0].value);
            var interest = Number(x.elements[2].value);
            var months = Number(x.elements[1].value) * 12;
            //console.log('principal = ', principal);
            //console.log('interest = ', interest);
            //console.log('months = ', months);
            var i = interest / 100.0 / 12;
            var payment = rnd(principal * (i + i / (Math.pow(1+i, months) -1 )));
            console.log('payment = ', payment);
            
            var tabledata = '';
            var m;
            var balance = principal;
            var totalinterest = 0;
            for (m = 1; m < months + 1; m++) {
                var tointerest = rnd(balance * i);
                // rounding errors accumulate when using floating point numbers
            // 
                totalinterest = rnd(totalinterest + tointerest);    
            var toprincipal = rnd(payment - tointerest);
            balance = rnd(balance - toprincipal);
            
            var row = '<tr>';
            row += '<td>' + m + '</td>';
            row += '<td>$' + toprincipal.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,") + '</td>';    
            row += '<td>' + tointerest.toFixed(2) + '%</td>';    
            row += '<td>$' + balance.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,") + '</td>';    
            row += '</tr>';
            
            tabledata += row;
            document.getElementById('tbl_result').className = 'show';
            }
            // grab the data or send the html data to the #tbl_body
            document.getElementById('tbl_body').innerHTML = tabledata;
            console.log("Total interest is", totalinterest);
            
            
            return false; // suppress default function
        }
        document.getElementById('btn_calculate').onclick = myFunction;
    
    
  }