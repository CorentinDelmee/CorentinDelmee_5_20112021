            
let productId;


            // Récupération de l'ID du produit


function getProductId(){
    productId = new URLSearchParams(window.location.search).get("prod");
    console.log(productId);
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
        console.log(data);
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

