
let cart__price = document.querySelector("div.cart__price")
               
                // Récupération des données localStorage


let cart = (JSON.parse(localStorage.getItem("cart")));
console.log(cart);


if(cart__price){

                // Function affichage du panier

let data;


    for(let specs of cart){
        

        // Récupération des données

        async function getProductData(){
            return fetch("http://localhost:3000/api/products/" + specs.id)
            
            .then((res) => {
                if(res){
                    return res.json();
                }
            })
            .then((value) => {
                data = value;
                console.log(data);
            })
            .catch(function(err) {
        
            })
            
        };

        // Function création des cartes

        function cartCreator(){
            const sectionItems = document.getElementById("cart__items");

            // Article 

            let mainArticle = document.createElement("article");
            mainArticle.classList.add("cart__item");
            mainArticle.setAttribute("data-id", specs.id);
            mainArticle.setAttribute("data-color", specs.color);

            sectionItems.appendChild(mainArticle);

            // Div Image

            let divImage = document.createElement("div");
            divImage.classList.add("cart__item__img");

            mainArticle.appendChild(divImage);

            // Image

            let mainImage = document.createElement("img")
            mainImage.src = (data.imageUrl);

            divImage.appendChild(mainImage);

            // Div Content

            let divContent = document.createElement("div");
            divContent.classList.add("cart__item__content");

            mainArticle.appendChild(divContent);

            // Div Description

            let divDescription = document.createElement("div");
            divDescription.classList.add("cart_item__content_description")

            divContent.appendChild(divDescription);

            // H2 Description

            let h2Description = document.createElement("h2");
            let h2Content = document.createTextNode(data.name)

            h2Description.appendChild(h2Content);
            divDescription.appendChild(h2Description);

            // Paragraphe Color

            let parafColor = document.createElement("p");
            let parafColorContent = document.createTextNode(specs.color);

            parafColor.appendChild(parafColorContent);
            divDescription.appendChild(parafColor);

            // Paragraphe Price

            let parafPrice = document.createElement("p");
            let parafPriceContent = document.createTextNode(data.price + " $");

            parafPrice.appendChild(parafPriceContent);
            divDescription.appendChild(parafPrice);

            // Div Content Settings

            let divContentSettings = document.createElement("div");
            divContentSettings.classList.add("cart__item__content__settings");

            divContent.appendChild(divContentSettings);

            // Div Settings Quantity

            let divSettingsQuantity = document.createElement("div");
            divSettingsQuantity.classList.add("cart__item__content__settings__quantity");

            divContentSettings.appendChild(divSettingsQuantity);

            // Paragraphe Quantity

            let parafQuantity = document.createElement("p");
            let parafQuantityContent = document.createTextNode("Qté : " + specs.quantity);

            parafQuantity.appendChild(parafQuantityContent);
            divSettingsQuantity.appendChild(parafQuantity);
        
            // Input Quantity
            
            let inputQuantity = document.createElement("input");
            inputQuantity.classList.add("itemQuantity")
            inputQuantity.type = "number";
            inputQuantity.name = "itemQuantity";
            inputQuantity.min = "1"
            inputQuantity.max = "100"
            inputQuantity.value = specs.quantity;

            divSettingsQuantity.appendChild(inputQuantity);

                // Input Quantity EventListener Change

                inputQuantity.addEventListener("change", function(){
                    parafQuantity.innerHTML = "Qté : " + inputQuantity.value;

                    // Change value in cart array;

                    let objIndex = cart.findIndex((obj => obj.id == specs.id && obj.color == specs.color));
                    cart[objIndex].quantity = inputQuantity.value;
                    localStorage.cart = JSON.stringify(cart);

                })

            // Div Settings Delete

            let divDelete = document.createElement("div");
            divDelete.classList.add("cart__item__content__settings__delete");
            divDelete.id = data.name;

            divContentSettings.appendChild(divDelete);

            // Paraf Settings Delete

            let parafDelete = document.createElement("p");
            parafDelete.classList.add("deleteItem");
            let parafDeleteContent = document.createTextNode("Supprimer");
            
            parafDelete.appendChild(parafDeleteContent);
            divDelete.appendChild(parafDelete);

            // Delete button EventListener

            parafDelete.addEventListener("click", function(){
                let el = document.querySelector(`[data-id="${specs.id}"]`)
                while(el.firstChild){
                    el.removeChild(el.lastChild);
                }
                el.remove();

                // Cart Array Remove

                let objIndex = cart.findIndex((obj => obj.id == specs.id && obj.color == specs.color));
                console.log(objIndex);
                cart.splice(objIndex, 1);
                console.log(cart);
                localStorage.cart = JSON.stringify(cart);
            })

        }


        async function asynchroneFunction(){
            await getProductData();
            cartCreator();
        }
        

        asynchroneFunction();

        
    }

                        // COMMAND FORM


const commandButton = document.getElementById("order");

commandButton.addEventListener("click", function(event){
    
    event.preventDefault();

        // Post Request contact object

    let contact = {
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        email : "",
    }

        //Post Request products array

    let products = [];

        // Function Get Valid Form

    function getValidForm(){

        // Boolean Valid Variable

        let firstNameValid = false;
        let lastNameValid = false;
        let addressValid = false;
        let cityValid = false;
        let emailValid = false;
        let cartValid = false;

            // InputVariable

        const firstNameInput = document.getElementById("firstName")
        const lastNameInput = document.getElementById("lastName")
        const addressInput = document.getElementById("address")
        const cityInput = document.getElementById("city")
        const emailInput = document.getElementById("email");

            // firstName Input

        if(/^[A-Za-zÀ-ÿ]+$/.test(firstNameInput.value)){
            firstNameValid = true;
        }
        else{
            document.getElementById("firstNameErrorMsg").innerHTML = "Veuillez insérer votre prénom"
        }

            // lastName Input

        if(/^[A-Za-zÀ-ÿ]+$/.test(lastNameInput.value)){
            lastNameValid = true;
        }
        else{
            document.getElementById("lastNameErrorMsg").innerHTML = "Veuillez insérer votre nom"
        }

            // adress Input

        if(addressInput.value === ""){
            document.getElementById("addressErrorMsg").innerHTML = "Veuillez insérer votre adresse"
        }
        else{
            addressValid = true;
        }

            // city Input

        if(cityInput.value === ""){
            document.getElementById("cityErrorMsg").innerHTML = "Veuillez insérer votre ville"
        }
        else{
            cityValid = true;
        }

            // email Input

        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)){
            console.log(contact.email);
            emailValid = true;
        }
        else{
            document.getElementById("emailErrorMsg").innerHTML = "Veuillez renseigner votre email"
        }

            // Cart Valid

        if(cart.length > 0){
            cartValid = true;
        }
        else{
            let cartErrorMsg = document.querySelector("div.cart__price > p");
            cartErrorMsg.style.color = "red";
            cartErrorMsg.innerHTML = "Vous n'avez aucun article dans votre panier";
        }

        validVariable(firstNameValid, lastNameValid, addressValid, cityValid, emailValid, cartValid, firstNameInput, lastNameInput, addressInput, cityInput, emailInput, contact, products);
    }

    getValidForm();

})
}

 // Function validVariable / requete POST + push products array

function validVariable(firstNameValid, lastNameValid, addressValid, cityValid, emailValid, cartValid, firstNameInput, lastNameInput, addressInput, cityInput, emailInput, contact, products){
    if(firstNameValid && lastNameValid && addressValid && cityValid && emailValid && cartValid){

        contact.firstName = firstNameInput.value;
        contact.lastName = lastNameInput.value;
        contact.address = addressInput.value;
        contact.city = cityInput.value;
        contact.email = emailInput.value;

        // Products.push array

        for(let product of cart){
            products.push(product.id);
        }
        
        console.log(JSON.stringify(contact));

        postRequest(contact, products);
    }
}

// Function requête POST Form

function postRequest(contact, products){
    fetch("http://localhost:3000/api/products/order", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contact, products})
    })
    .then(res => res.json())
    .then(res => document.location.href = "http://127.0.0.1:5500/front/html/confirmation.html" + "?confirm=" + res.orderId)
    .catch(err => console.log(err));
}



const confirmationParaf = document.querySelector("div.confirmation > p");
if(confirmationParaf){
    confirmationParaf.textContent += new URLSearchParams(window.location.search).get("confirm");
}