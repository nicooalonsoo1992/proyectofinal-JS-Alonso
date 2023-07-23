verCarrito.addEventListener('click', () => {
    // Creación de un modal, primero creamos un div
    const modalHeader = document.createElement('div');
    modalHeader.className = 'carrito';
    modalHeader.innerHTML = `
        <h1 class='tituloDelModal'>Carrito</h1>
    `;
    mostrandoCarro.append(modalHeader);
    // Creando botón para salir
    const button = document.createElement('h1');
    button.innerText = 'X';
    button.className = 'botonModal';
    button.addEventListener('click', () => {
      mostrandoCarro.innerHTML = ''; // Elimina el contenido del modal
    });
    modalHeader.append(button);
    let totalAPagar = 0; // Variable para almacenar el total a pagar
    carrito.forEach((product, index) => {
        let carritoContent = document.createElement('div');
        carritoContent.className = 'holaQueHace';
        carritoContent.innerHTML = `
        <h5>${product.nombre}</h5>
        <h6>${product.marca}</h6>
        <p>${product.precio}</p>
        <button class="quitarProducto" data-index="${index}">Eliminar</button>
        `;
        mostrandoCarro.appendChild(carritoContent);
      totalAPagar += parseFloat(product.precio.replace('$', '')); // Actualizar el total a pagar

        // console.log(carrito.length);
    });
    const totalpag = document.createElement('div');
    totalpag.className = 'totalContent';
    totalpag.innerHTML = `
    <button class="finalizarCompra">Comprar</button>
    Total a pagar: ${totalAPagar} `;
    mostrandoCarro.append(totalpag);

    // Agregar evento de clic al botón "Comprar"
    const finalizarCompraButton = document.querySelector('.finalizarCompra');
    finalizarCompraButton.addEventListener('click', () => {
        // Mostrar el mensaje de compra realizada
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })
            
            Toast.fire({
            icon: 'success',
            title: 'Compra finalizada con exito'
            })
        // Vaciar el carrito
        carrito = [];
        // Vaciar el contenido del modal
        mostrandoCarro.innerHTML = '';
        // Actualizar contador de carrito
        carritoCounter();
        // Eliminar el carrito del almacenamiento local
        localStorage.removeItem('carrito');
    });
    
    // Agregar evento de clic a los botones "Quitar"
    const quitarBotones = document.querySelectorAll('.quitarProducto');
    quitarBotones.forEach((boton) => {
        boton.addEventListener('click', (event) => {
        const index = event.target.dataset.index;
        const precioProducto = parseFloat(carrito[index].precio.replace('$', ''));
        carrito.splice(index, 1); // Eliminar el producto del carrito
        event.target.parentElement.remove(); // Eliminar el elemento del DOM sin cerrar el modal
        totalAPagar -= precioProducto; // Restar el precio del producto eliminado al total a pagar
        totalpag.innerHTML = `Total a pagar: ${totalAPagar} `; // Actualizar el total a pagar en el modal
        // Actualizar los botones "Quitar" con los nuevos índices
        const nuevosBotones = document.querySelectorAll('.quitarProducto');
        nuevosBotones.forEach((nuevoBoton, newIndex) => {
            nuevoBoton.dataset.index = newIndex;
        });
        carritoCounter();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        }); 
    });
    });


    const carritoCounter = () => {
        mostrandoCantidad.style.display  = "block";
        const carritoLength = carrito.Length;
        localStorage.setItem('carritoLength', JSON.stringify(carritoLength));
        mostrandoCantidad.innerText = carrito.length;
        };

        carritoCounter();
