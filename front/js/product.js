 
let productId;


            // Récupération de l'ID du produit


function getProductId(){
    productId = new URLSearchParams(window.location.search).get("prod");
    console.log("productId =" + productId);
}


            // Récupération des données du produit de la page 


async function getProductData(){
    return fetch("http://localhost:3000/api/products/" + productId)
    
    .then(function(res) {
        if(res){
            return res.json();
        }
    })
    .then(function(value) {
        return value;
    })
    .then((a) => {
        data = a;
        console.log("Specs du produit = " + data);
    })
    .catch(function(err) {

    })
    
};


            // Fonction de création des éléments HTML du produit


function ProductCreator(){
    
        // Image du produit

    let newImg = document.createElement("img");
    newImg.src = data.imageUrl;

    let imgRef = document.querySelector("div.item__img");
    imgRef.appendChild(newImg);


        // Titre du produit

    document.getElementById("title").innerHTML = data.name;
   
        // Prix du produit

    document.getElementById("price").innerHTML = data.price

        // Description du produit

    document.getElementById("description").innerHTML = data.description

        // Option de couleur du produit

    let selectRef = document.getElementById("colors");

    for (let options of data.colors){
        let newOption = document.createElement("option");
        let contentOption = document.createTextNode(options);
        newOption.value = options;

        newOption.appendChild(contentOption);
        selectRef.appendChild(newOption);}
};
    

            // Fonction asynchrone générale

async function asynchroneFunction3(){
    getProductId();
    await getProductData();
    ProductCreator();
}

asynchroneFunction3();


            // Fonction Ajout dans le panier


const cartButton = document.getElementById("addToCart").addEventListener("click",function(){
    
    console.log("bouton cliqué")

    let colorId = document.getElementById("colors");
    let quantityId = document.getElementById("quantity");

    let quantity = parseInt(quantityId.value, 10);
    let color = colorId.value;
    console.log(quantity);

    let specsProduct = {
        id: data._id,
        quantity: quantity,
        color: color,
    };

    let cart = []
    if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
    console.log(typeof cart);
    }

    if(quantity > 0 && color != ""){

        if (cart.some(e => e.id === specsProduct.id && e.color === specsProduct.color)){

            quantityId.style.border = "none";
            colorId.style.border = "none";

            console.log("yes")
            let objIndex = cart.findIndex((obj => obj.id === specsProduct.id && obj.color === specsProduct.color));

            console.log(typeof cart[objIndex].quantity)
            console.log(typeof quantity);
            cart[objIndex].quantity = cart[objIndex].quantity += quantity;

        }
        else{
            
            quantityId.style.border = "none";
            colorId.style.border = "none";
            
            cart.push(specsProduct);
        }
    }
    if(quantity == 0){
        quantityId.style.border = "2px solid red";
    }
    if(color == ""){
        colorId.style.border = "2px solid red";
    }

    console.log(cart);
    localStorage.cart = JSON.stringify(cart);


});

