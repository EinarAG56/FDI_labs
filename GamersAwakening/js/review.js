/*********************************
    DECLARACIÓN DE VARIABLES
**********************************/
var idGame;

/*********************************
    DECLARACIÓN DE FUNCIONES
**********************************/
function getTitle(id){
    var plataforma = ["Microsoft", "Nintendo", "Sony", "PC Users"];
    return plataforma[parseInt(id)-1];
}

function createReview(reviewsList, id){
    divReview = document.createElement('div');
    divReview.style = "margin: 2% 10px; width:98%;";
    idGame = id;

    var h2 = document.createElement('h1');
    h2.style = "display: inline-block; padding: 20px;";
    h2.innerHTML = reviewsList[idGame]['nombre'];
    var divData = document.createElement('div');
    divData.className = "float-end";
    divData.style = "display: inline-block; padding: 25px;";
    var data = document.createElement('p');
    data.innerHTML = "<b>Por " + reviewsList[idGame]['user'] + "</b> | Publicado el " + reviewsList[idGame]['fecha'];
    var divImg = document.createElement('div');
    var img = document.createElement('img');
    img.src = reviewsList[idGame]['img'];
    img.alt = "gameImg";
    var divText = document.createElement('div');
    divText.style = "display: inline-block;";
    var sinopsis = document.createElement('p');
    sinopsis.innerHTML = "<b>Sinopsis:</b><br>" + reviewsList[idGame]['sinopsis'];
    var review = document.createElement('p');
    review.innerHTML = "<b>Review:</b><br>" + reviewsList[idGame]['review'];
    divText.appendChild(sinopsis);
    divText.appendChild(review);
    divImg.appendChild(img);
    divData.appendChild(data);
    divReview.appendChild(h2);
    divReview.appendChild(divData);
    divReview.appendChild(divImg);
    divReview.appendChild(divText);
    
    var reviewContainer = document.querySelector("#weekly");
    reviewContainer.appendChild(divReview);
}

function documentLoaded(event){

    //Obtener los datos de los JSON
    var reviewsPromise = getJsonFile("./data/reviews.json");
    var id = getParameter("id");
    Promise.all([reviewsPromise]).then(function(data){
        createReview(data[0], id);
    });

}


/*********************************
    LÓGICA DE LA PÁGINA
**********************************/

//Esperar a que cargue el documento para comenzar
document.addEventListener("DOMContentLoaded",documentLoaded);