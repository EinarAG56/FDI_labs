/*********************************
    DECLARACIÓN DE VARIABLES
**********************************/
var idGame;

/*********************************
    DECLARACIÓN DE FUNCIONES
**********************************/
function compareFecha( a, b ) {
    if ( Date.parse(a.fecha) > Date.parse(b.fecha) ){
      return -1;
    }
    if ( Date.parse(a.fecha) < Date.parse(b.fecha) ){
      return 1;
    }
    return 0;
}

const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

function getArrayWeek(obj){
    var array = [];
    Object.keys(obj).forEach(function(key){
        if(obj[key]['week'] == '1'){
            array.push(obj[key]);
        }
    });
    return array;
}
function getArray(obj, consola){
    var array = [];
    Object.keys(obj).forEach(function(key){
        if(obj[key]['plataforma'] == consola){
            array.push(obj[key]);
        }
    });
    return array;
}
function getPlataforma(id){
    var plataforma = ["microsoft", "nintendo", "sony", "pc"];
    return plataforma[parseInt(id)-1];
}
function getTitle(id){
    var plataforma = ["Microsoft", "Nintendo", "Sony", "PC Users"];
    return plataforma[parseInt(id)-1];
}
function createReview(reviewsList){
    divReview = document.createElement('div');
    divReview.style = "margin: 2% 10px; width:98%;";
    var order = getArrayWeek(reviewsList);
    order.sort(compareFecha);
    if(order[0] != null){
        idGame= order[0]['id'];
        reviewsList = convertArrayToObject(order, 'id');

        var h1 = document.createElement('h1');
        h1.innerHTML = "Juego de la Semana";
        var h2 = document.createElement('h2');
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
        img.style = "width: 80;"
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
        divReview.appendChild(h1);
        divReview.appendChild(h2);
        divReview.appendChild(divData);
        divReview.appendChild(divImg);
        divReview.appendChild(divText);
    }
    var reviewContainer = document.querySelector("#weekly");
    reviewContainer.appendChild(divReview);
}

function createTopic(reviewsList, id){
    divReview = document.createElement('div');
    divReview.style = "margin: 2% 10px; width:98%;";
    var h1 = document.createElement('h1');
    h1.innerHTML = getTitle(id);
    divReview.appendChild(h1);
    var order = getArray(reviewsList, getPlataforma(id));
    order.sort(compareFecha);
    if(order[0] != null){
        idGame = order[0]['id'];
        reviewsList = convertArrayToObject(order, 'id');
        var divRow = document.createElement('div');
        divRow.className = "row";
        Object.keys(reviewsList).forEach(function(key){

            var a = document.createElement('a');
            a.href = "review.html?id=" + reviewsList[key]['id'];
            var div = document.createElement('div');
            div.style = "display: inline-block; col-xs-4";
            var img = document.createElement('img');
            img.src = reviewsList[key]['img'];
            img.alt = "gameImg";
            img.style = "width:100%; height:100%;";
            var divData = document.createElement('div');
            divData.className = 'reviewName';
            var title = document.createElement('h3');
            title.innerHTML = reviewsList[key]['nombre'];
            var data = document.createElement('p');
            data.innerHTML = "<b>" + reviewsList[key]['user'] + "</b>    " + reviewsList[key]['fecha'];
            divData.appendChild(title);
            divData.appendChild(data);
            div.appendChild(img);
            div.appendChild(divData);
            a.appendChild(div);
            divReview.appendChild(a);

        });
    }
    var reviewContainer = document.querySelector("#weekly");
    reviewContainer.appendChild(divReview);
    
}

function documentLoaded(event){

    //Obtener los datos de los JSON
    var reviewsPromise = getJsonFile("./data/reviews.json");
    var id = getParameter("id");
    Promise.all([reviewsPromise]).then(function(data){

        if(id != null){
            createTopic(data[0], id);
        }else{
            createReview(data[0]);
        }
    });

}


/*********************************
    LÓGICA DE LA PÁGINA
**********************************/

//Esperar a que cargue el documento para comenzar
document.addEventListener("DOMContentLoaded",documentLoaded);