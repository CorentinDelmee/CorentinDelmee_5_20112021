                // Récupération des données localStorage

let cart = (JSON.parse(localStorage.getItem("cart")));
console.log(cart);


                // Function affichage du panier

let data;



async function generalFunction(){
    for(let specs of cart){
        

        // Récupération des données

        async function getProductData(){
            return fetch("http://localhost:3000/api/products/" + specs.id)
            
            .then(function(res) {
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
            let sectionItems = document.getElementById("cart__items");

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

                    // A REVOIR !

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


        async function asynchroneFunction4(){
            await getProductData();
            cartCreator();
        }
        

        asynchroneFunction4();

        
    }
}

generalFunction()
    




                        // COMMAND FORM


let commandButton = document.getElementById("order");

let contact = {
    firstName : "",
    lastName : "",
    address : "",
    city : "",
    email : "",
    product:[],
}

commandButton.addEventListener("click", function(){
    
        // firstName Input

    let firstNameInput = document.getElementById("firstName")

    if(/^[A-Za-zÀ-ÿ]+$/.test(firstNameInput.value)){
        contact.firstName = firstNameInput.value;
    }
    else{
        document.getElementById("firstNameErrorMsg").innerHTML = "Veuillez insérer votre prénom"
    }

        // lastName Input

    let lastNameInput = document.getElementById("lastName")

    if(/^[A-Za-zÀ-ÿ]+$/.test(lastNameInput.value)){
        contact.lastName = lastNameInput.value;
    }
    else{
        document.getElementById("lastNameErrorMsg").innerHTML = "Veuillez insérer votre nom"
    }

        // adress Input

    let addressInput = document.getElementById("address")

    if(/./.test(addressInput.value)){
        contact.address = addressInput.value;
    }
    else{
        document.getElementById("addressErrorMsg").innerHTML = "Veuillez insérer votre adresse"
    }

        // city Input

    let cityInput = document.getElementById("city")

    if(cityInput.value == ""){
        document.getElementById("cityErrorMsg").innerHTML = "Veuillez insérer votre ville"
    }
    else{
        contact.city = cityInput.value
    }

        // email Input

    let emailInput = document.getElementById("email");

    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)){
        contact.email = emailInput.value;
        console.log(contact.email);
    }
    else{
        document.getElementById("emailErrorMsg").innerHTML = "Veuillez renseigner votre email"
    }

        // Product-ID

})

