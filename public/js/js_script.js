function MenuItem (burger, kcal, gluten, lactose){
    this.burger = burger;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.name = function () {
        return this.burger + " contains " + this.kcal + " kcal ";
    }
}

var burgerA = new MenuItem ("Wood Burger", 1200, true, true);
var burgerB = new MenuItem ("Bang Burger", 800, false, true);
var burgerC = new MenuItem ("Cheese Burger", 900, true, true);
var burgerD = new MenuItem ("Onion Burger", 1000, true, true);
var burgerE = new MenuItem ("Meatstick Burger", 1200, true, true);

var burgerList = [burgerA.name(),burgerB.name(),burgerC.name(),burgerD.name(),burgerE.name()];

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var myElement = document.getElementById("JS");

for (burger in food)
{
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var div = document.createElement("div");
    var newLine = document.createElement("br");
    var h5 = document.createElement("h5");

    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.id = food[burger].name;
    checkbox.name = "ordered";

    var burgerName = document.createTextNode(food[burger].name);
    var burgerImage = document.createElement("img");
    var burgerKcal = document.createTextNode(food[burger].kcal + " kcal ");

    burgerImage.src = food[burger].img;
    burgerImage.classList.add("menu_images");
    burgerImage.classList.add("wrapper");

    h5.appendChild(checkbox);
    h5.appendChild(burgerName);
    div.appendChild(h5);
    div.appendChild(burgerImage);
    li1.appendChild(burgerKcal);
    ul.appendChild(li1);

    if(food[burger].gluten){
        var li2 = document.createElement("li");
        var gluten = document.createTextNode("contains gluten");
        li2.appendChild(gluten);
        ul.appendChild(li2);
    }

    if(food[burger].lactose){
        var li3 = document.createElement("li");
        var lactose = document.createTextNode("contains lactose");
        li3.appendChild(lactose);
        ul.appendChild(li3);
    }

    div.appendChild(ul);
    myElement.appendChild(div);
}

////////////////////////////////////////////////////////////////////////////////

var customerSection = document.getElementById("orderInformation");

/// This function gives you all data a you get from customers
function customerData ()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var payment = document.getElementById("payment_options").value;

    var gender = document.getElementsByName("gn");

    /// controls what gender is checked
    for (x in gender){
        if (gender[x].checked){
            return [name, email, street, house, payment, gender[x].value];
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
/// Gives all burgers with checkbox
var orderedBurgers = document.getElementsByName("ordered");


////////////////////////////////////////////////////////////////////////////////
/// PRINTING OUT ORDERS

function printOrder() {
    var data = customerData ();
    var div = document.createElement("div");

    /// prevent to print out customer infromation many times
    if (customerSection.childNodes.length > 0) {
        customerSection.childNodes.forEach(node => customerSection.removeChild(node))

        /// checks if you forgot give your contacts information
        if(data.find(el => el === '') === ''){
            var empty = document.createTextNode("OBS: you have to give your contact infromation above! ");
            div.appendChild(empty);
            customerSection.appendChild(div);

        } else {

            var contactInformation = document.createTextNode("Your contact information: ");
            var h4 = document.createElement("h4");
            h4.appendChild(contactInformation);
            div.appendChild(h4);

            var name = document.createTextNode("Hi " + data[0] + "!");
            div.appendChild(name);
            div.appendChild(document.createElement("br"));

            var email = document.createTextNode("your email: " + data[1]);
            div.appendChild(email);
            div.appendChild(document.createElement("br"));

            var address = document.createTextNode("your address: " + data[2] + " " + data[3]);
            div.appendChild(address);
            div.appendChild(document.createElement("br"));

            var payment = document.createTextNode("you will pay by: " +  data[4]);
            div.appendChild(payment);
            div.appendChild(document.createElement("br"));

            var gender = document.createTextNode("your gender: "  + data[5]);
            div.appendChild(gender);
            div.appendChild(document.createElement("br"));

            var youOrdered=  document.createTextNode("you orderd: ");
            var h4 = document.createElement("h4");
            h4.appendChild(youOrdered);
            div.appendChild(h4);

            /// Contols if a burger is checked and print out it if it is checked
            for (order in orderedBurgers){
                if (orderedBurgers[order].checked){

                    var yourOrder = document.createTextNode(orderedBurgers[order].id);
                    var listitem = document.createElement("li");
                    listitem.appendChild(yourOrder);
                    div.appendChild(listitem);
                }
            }

            customerSection.appendChild(div);
        }
    }
}

/// calls the function "printOrder()" when you click on the button by ID placeOrderButton
var myButton = document.getElementById("placeOrderButton");
myButton.addEventListener("click", printOrder);

///////////////////////////////////////////////////////////////////////////////
