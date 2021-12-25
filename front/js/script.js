
/*fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if(res){
            return res.json();
        }
    })
    .then(function(value) {
        return value;
    })
    .then((a) => {
        const data = a;
        console.log(data);
    })
    .catch(function(err) {

});*/


let data;

            // Fonctions de création des cartes sur la page d'accueil

function altTxtHTML(){
    for (let specs of data){
        console.log(specs.altTxt);

        let newDiv = document.createElement("p");
        let contenu = document.createTextNode(specs.altTxt);
        let SectionItems = document.getElementById("items")
        
        newDiv.appendChild(contenu);
        SectionItems.appendChild(newDiv);
        
    }
};


            // Récupération des données de l'API

async function getData(){
    return fetch("http://localhost:3000/api/products")
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

            // Fonction récupérant les fonctions de création des cartes 
            
function cardCreator(){
    console.log(data);
    altTxtHTML();/*
    colorsHTML();
    descriptionHTML();
    imageUrlHTML();
    nameHTML();
    priceHTML();
    idHTML();*/
};




            // Fonction asynchrone Générale

async function asynchroneFunction() {
    console.log("Waiting Data");    
    await getData();
    cardCreator();
}


asynchroneFunction();









    // CHAMP DE TEST

                // Fonction asynchrone opérationnel

/*
async function recuperationdonnee(){
    return fetch("http://localhost:3000/api/products")
        .then(function(res){if(res){return res.json()}})
        .then(function(value){return value})
        .then((a) => {
            const data = a;
            console.log(data);
        });
};

async function asynchroneFunction(){
    console.log("Waiting Data")
    await recuperationdonnee();
        
    console.log("Data Resp")
};

asynchroneFunction(); 
*/


            // Fonction d'origine

            
            // Récupération des données de l'API
/*
async function getData(){
    fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if(res){
            return res.json();
        }
    })
    .then(function(value) {
        return value;
    })
    .then((a) => {
        const data = a;
        console.log(data);
       
    })
    .catch(function(err) {

});
};

            // Fonction de création des cartes sur la page d'accueil   
            
async function cardCreator(){;
    console.log(data[1]);
};


            // Fonction test asynchrone 

async function consolelog(){
    console.log("Data Downloaded");  
}


            // Fonction asynchrone en travaux

async function asynchroneFunction() {
    console.log("Waiting Data");    
    await getData();
    await cardCreator();
}


asynchroneFunction(); */