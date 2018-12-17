(  function() {
    var app = {
        arregloLista: [],
    }


    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "https://jeisona.pythonanywhere.com/tienda/";

        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                var data = JSON.parse( this.responseText );
                app.arregloLista = data.results;
                displayPerros( data.results );
                localStorage.setItem('listas',JSON.stringify(data));
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }


    var displayPerros = function( listas ) {

        if(navigator.onLine){
        }else
        {
            if(localStorage.getItem('listas')!=null){
                console.log(listas.length)
            }
        }

        for( let lista of listas ) {
                $('#listascont').append(
                    '<div class="container1">'+
                        '<a><h3>'+"➤"  +lista.tienda+'</h3></a>'+
                    '</div>'
            )
        }
    }
    
    loadData();
} ) ( );

//function agregarlista(){
  //  $('#listascont').append(
    //    '<div class="bearContainer">'+
      //      '<h1>sadasdasd</h1>'+
        //    '<p>descripcion: adsadasd</p>'+
          //  '<p>estado: asdasdassad</p>'+
       // '</div>'
   // )
//}


function agregarlista(){
    var nombree = document.getElementById("nombrelista");
    var nombre = nombree.value;
    var xhr = new XMLHttpRequest();
    var url = "https://jeisona.pythonanywhere.com/tienda/";

    var data = { "tienda":nombre};
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var listas = JSON.parse(xhr.responseText);
    }
    xhr.send(JSON.stringify(data));
    location.reload();
}
