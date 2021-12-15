/*********************************
    DECLARACIÓN DE VARIABLES
**********************************/


/*********************************
    DECLARACIÓN DE FUNCIONES
**********************************/

function createTopic(reviewsList){
    divEquipos = document.createElement("div");
    
    Object.keys(reviewsList).forEach(function(key){
        var divTopic= document.createElement("div");
        divTopic.className = "topic"
        var img = document.createElement("img");
        img.src = reviewsList[key]['img'];
        var p = document.createElement("p");
        p.innerHTML = reviewsList[key]['nombre'];

        var a = document.createElement("a");
        a.href = "editarReview.php?id=" + reviewsList[key]['id'];
        a.innerHTML = "Editar";

        divTopic.appendChild(img);
        divTopic.appendChild(p);
        divTopic.appendChild(a);
        divEquipos.appendChild(divTopic);
    });

    var equiposContainer = document.querySelector("#reviews");
    equiposContainer.appendChild(divEquipos);
}


function documentLoaded(event){

    //Obtener los datos de los JSON
    var reviewsPromise = getJsonFile("./data/reviews.json");

    Promise.all([reviewsPromise]).then(function(data){
        console.log(1);
        createTopic(data[0]);

    });

}


/*********************************
    LÓGICA DE LA PÁGINA
**********************************/

//Esperar a que cargue el documento para comenzar
document.addEventListener("DOMContentLoaded",documentLoaded);
