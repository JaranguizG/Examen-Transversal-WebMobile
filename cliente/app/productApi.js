(  function() {
    var app = {
        dogFilter: document.getElementById( "dogFilter" ),
        perroList: [],
    }

    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "https://jeisona.pythonanywhere.com/producto/";

        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                displayProductos( data.results );
                app.perroList = data.results;
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }

    var displayProductos = function( dogs ) {
        for( let dog of dogs ) {
                // Variables
                let baseDeDatos = [
                    {
                        id: dog.id,
                        nombre: dog.name,
                        costo:dog.costo_pre,
                        precio: dog.costo_real,
                        tienda:dog.tienda,
                        nota:dog.nota_aditional
                    },
    
                ]
                let $items = document.querySelector('#items');
                let carrito = [];
                let total = 0;
                let $carrito = document.querySelector('#carrito');
                let $total = document.querySelector('#total');
                // Funciones
                function renderItems () {
                    for (let info of baseDeDatos) {
                        // Estructura
                        let miNodo = document.createElement('div');
                        miNodo.classList.add('card', 'col-sm-4');
                        // Body
                        let miNodoCardBody = document.createElement('div');
                        miNodoCardBody.classList.add('card-body');
                        // Titulo
                        let name = document.createElement('h5');
                        name.classList.add('card-title');
                        name.textContent = info['nombre'];
                        // Precio costo
                        let costo = document.createElement('p');
                        costo.classList.add('card-text');
                        costo.textContent = info['costo'] + '$';
                        // Precio Real
                        let precio = document.createElement('p');
                        precio.classList.add('card-text');
                        precio.textContent = info['precio'] + '$';
                        // Tienda
                        let tienda = document.createElement('p');
                        tienda.classList.add('card-text');
                        tienda.textContent = info['tienda'];
                        // Nota
                        let nota = document.createElement('p');
                        nota.classList.add('card-text');
                        nota.textContent = info['nota'];
                        // Boton 
                        let miNodoBoton = document.createElement('button');
                        miNodoBoton.classList.add('btn-1', 'btn-primary');
                        miNodoBoton.textContent = '+';
                        miNodoBoton.setAttribute('marcador', info['id']);
                        miNodoBoton.addEventListener('click', anyadirCarrito);
                        // Insertamos
                        miNodoCardBody.appendChild(name);
                        miNodoCardBody.appendChild(costo);
                        miNodoCardBody.appendChild(precio);
                        miNodoCardBody.appendChild(tienda);
                        miNodoCardBody.appendChild(nota);
                        miNodoCardBody.appendChild(miNodoBoton);
                        miNodo.appendChild(miNodoCardBody);
                        $items.appendChild(miNodo);
                    }
                }
                function anyadirCarrito () {
                    // Anyadimos el Nodo a nuestro carrito
                    carrito.push(this.getAttribute('marcador'))
                    // Calculo el total
                    calcularTotal();
                    // Renderizamos el carrito 
                    renderizarCarrito();
    
                }
    
                function renderizarCarrito () {
                    // Vaciamos todo el html
                    $carrito.textContent = '';
                    // Generamos los Nodos a partir de carrito
                    carrito.forEach(function (item, indice) {
                        // Obtenemos el item que necesitamos de la variable base de datos
                        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                            return itemBaseDatos['id'] == item;
                        });
                        // Creamos el nodo del item del carrito
                        let miNodo = document.createElement('li');
                        miNodo.classList.add('list-group-item', 'text-right');
                        miNodo.textContent = `${miItem[0]['nombre']} - ${miItem[0]['precio']}$`;
                        // Boton de borrar
                        let miBoton = document.createElement('button');
                        miBoton.classList.add('btn-2', 'btn-danger', 'mx-5');
                        miBoton.textContent = 'X';
                        miBoton.setAttribute('posicion', indice);
                        miBoton.addEventListener('click', borrarItemCarrito);
                        // Mezclamos nodos
                        miNodo.appendChild(miBoton);
                        $carrito.appendChild(miNodo);
                    })
                }
    
                function borrarItemCarrito () {
                    // Obtenemos la posicion que hay en el boton pulsado
                    let posicion = this.getAttribute('posicion');
                    // Borramos la posicion que nos interesa
                    carrito.splice(posicion, 1);
                    // volvemos a renderizar
                    renderizarCarrito();
                    // Calculamos de nuevo el precio
                    calcularTotal();
                }
    
                function calcularTotal () {
                    // Limpiamos precio anterior
                    total = 0;
                    // Recorremos el array del carrito
                    for (let item of carrito) {
                        // De cada elemento obtenemos su precio
                        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                            return itemBaseDatos['id'] == item;
                        });
                        total = total + miItem[0]['precio'];
                    }
                    // Formateamos el total para que solo tenga dos decimales
                    let totalDosDecimales = total;
                    // Renderizamos el precio en el HTML
                    $total.textContent = totalDosDecimales;
                }
                // Eventos
    
                // Inicio
                renderItems();
            } 
        
        
    }
    
	
    loadData();
} ) ( );
