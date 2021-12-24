
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

            // Récupération des données de l'API

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


asynchroneFunction();



/*
async function recuperationdonnee(){
    fetch("http://localhost:3000/api/products")
        .then(function(res){if(res){return res.json()}})
        .then(function(value){return value})
        .then((a) => {
            const data = a;
            console.log(data);
            setInterval(() => {
              
            }, 2000);
        })
    };


async function asynchroneFunction(){
    console.log("Waiting Data")
    await recuperationdonnee();
        
    console.log("Data Resp")
};

asynchroneFunction(); */