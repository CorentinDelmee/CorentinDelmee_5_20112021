                // Récupération des données localStorage

let cart = (JSON.parse(localStorage.getItem("cart")));
console.log(cart);


                // Function affichage du panier

function generalFunction(){
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

                    // A REVOIR !

            // Div Settings Delete

            let parafDelete = document.createElement("p");
            parafDelete.classList.add("deleteItem");
            let parafDeleteContent = document.createTextNode("Supprimer");
            
            parafDelete.appendChild(parafDeleteContent);
            divContentSettings.appendChild(parafDelete);


        }

        async function asynchroneFunction4(){
            await getProductData();
            cartCreator();
        }
        
        asynchroneFunction4();
    }
}

generalFunction();