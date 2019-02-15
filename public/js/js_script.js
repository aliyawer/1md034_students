
/// This function gives you all data a you get from customers
function customerData ()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var payment = document.getElementById("payment_options").value;
    var gender = document.getElementsByName("gn");

    /// controls what gender is checked
    for (x in gender){
        if (gender[x].checked){
            return [name, email, payment, gender[x].value];
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
/// Gives all burgers with checkbox
var allBurgers = document.getElementsByName("ordered");

function getCheckedBurgers(){
    var orderedBurgers = [];
    for (order in allBurgers){
        if (allBurgers[order].checked){
            orderedBurgers.push(allBurgers[order].id);
        }
    }
    return orderedBurgers;
}
