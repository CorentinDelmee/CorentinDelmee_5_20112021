
let data;
const productUrl = new URL("http://127.0.0.1:5500/front/html/product.html");

            // Récupération des données de l'API

async function getData(){
    return fetch("http://localhost:3000/api/products")
    .then((res) =>{
        if(res){
            return res.json();
        }
    })
    .then((value) => {
        data = value;
        console.log(value);
    })
    .catch(function(err) {

    })
};


            // Fonctions de création des cartes sur la page d'accueil

function cardCreator(){
    for (let specs of data){

        let SectionItems = document.getElementById("items");

            // Création d'un lien

        let newLink = document.createElement("a");
        newLink.href = productUrl + "?prod=" + specs._id;

        SectionItems.appendChild(newLink);

            // Création d'un article dans le lien

        let newArticle = document.createElement("article");
        
        newLink.appendChild(newArticle);

            // Création d'une image dans l'article

        let newImg = document.createElement("img");
        newImg.src = specs.imageUrl;

        newArticle.appendChild(newImg);

            // Création d'un titre dans l'article

        let newH3 = document.createElement("h3");
        newH3.classList.add("productName");
        let contenuH3 = document.createTextNode(specs.name);
        
        newH3.appendChild(contenuH3);
        newArticle.appendChild(newH3);

            // Création d'un paragraphe dans l'article

        let newParaf = document.createElement("p");
        newParaf.classList.add("productDescription");
        let contenuParaf = document.createTextNode(specs.description);

        newParaf.appendChild(contenuParaf);
        newArticle.appendChild(newParaf);

    }
};

            // Fonction asynchrone Générale

async function asynchroneFunction() {
    console.log("Waiting Data");    
    await getData();
    cardCreator();
}


asynchroneFunction();
