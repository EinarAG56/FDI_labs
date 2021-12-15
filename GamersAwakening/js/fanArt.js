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

function getArray(obj){
    var array = [];
    Object.keys(obj).forEach(function(key){
        array.push(obj[key]);
    });
    return array;
}

function createArtList(reviewsList){
   
    divReview = document.createElement('div');
    divReview.style = "margin: 2% 10px; width:98%;";
    var h1 = document.createElement('h1');
    h1.innerHTML = "Fan Art";
    divReview.appendChild(h1);
    var order = getArray(reviewsList);
    order.sort(compareFecha);
    if(order[0] != null){
        reviewsList = convertArrayToObject(order, 'id'); 
        
        var divRow = document.createElement('div');
        divRow.className = "row";
        Object.keys(reviewsList).forEach(function(key){

            var div = document.createElement('div');
            div.className = "col-lg-12";
            var divImg = document.createElement('div');
            divImg.style = "width: 45%; margin: 10px; display:inline-block;";
            var img = document.createElement('img');
            img.src = reviewsList[key]['img'];
            img.alt = "artImg";
            img.style = "width:100%; height:100%; border-radius: 16px";
            var divData = document.createElement('div');
            divData.style = 'width: 45%; margin: 10px; display:inline-block;';
            var title = document.createElement('h3');
            title.innerHTML = reviewsList[key]['nombre'];
            var data = document.createElement('p');
            data.innerHTML = "<b>" + reviewsList[key]['user'] + "</b>    " + reviewsList[key]['fecha'];
            var descrip = document.createElement('p');
            descrip.innerHTML = reviewsList[key]['sinopsis'];
            
            divImg.appendChild(img);
            divData.appendChild(title);
            divData.appendChild(data);
            divData.appendChild(descrip);
            div.appendChild(divImg);
            div.appendChild(divData);
            divRow.appendChild(div);
            

        });
    }
    divReview.appendChild(divRow);
    var reviewContainer = document.querySelector("#fanArt");
    reviewContainer.appendChild(divReview);

}

function documentLoaded(event){

    //Obtener los datos de los JSON
    var artPromise = getJsonFile("./data/fanArt.json");

    Promise.all([artPromise]).then(function(data){
        createArtList(data[0]);
    });

}


/*********************************
    LÓGICA DE LA PÁGINA
**********************************/

//Esperar a que cargue el documento para comenzar
document.addEventListener("DOMContentLoaded",documentLoaded);