// Funcion para obtener el producto especifico por el id enviado de la url
async function  mostrarDetalle() {
    
    const params = new URLSearchParams(window.location.search);
    const idRecibido = params.get("id");
     try {
        const responde = await fetch("assets/js/productos.json");
        const productos = await responde.json();
        
        const producto = productos.find(p => p.id == idRecibido);
        console.log(producto)

        const contenedor = document.getElementById("contenedor");
        if (producto) {
         contenedor.innerHTML = `
              <div class="row align-items-center">
                  <!-- Columna 1: Imagen (Centrada) -->
                  <div class="col-md-6 text-center mb-4">
                      <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.titulo}">
                  </div> 
                  
                  <!-- Columna 2: Texto (Alineado a la izquierda por defecto) -->
                  <div class="col-md-6">
                      <h1 class="fw-bold">${producto.titulo}</h1>
                      <p class="fs-3 fw-bold my-3">$${producto.precio}</p>
                      <p class="lead mb-4">${producto.descripcion}</p>
                      
                      <!-- Botones separados del texto -->
                      <div class="d-grid gap-2 d-md-block">
                          <button class="btn btn-dark btn-lg btn-agregar" data-id="${producto.id}">
                              Agregar al Carrito
                          </button>        
                          <a href="index.html" class="btn btn-outline-secondary btn-lg">Volver</a>
                      </div>
                  </div>
              </div>
            `;
        } else {
            contenedor.innerHTML = "<h3>Producto no encontrado</h3>";
        }
    } catch (error) {
        console.error("Error al buscar los datos", error);
        document.getElementById("contenedor").innerHTML = "<h3>Error al cargar los datos. Intente nuevamente.</h3>";       
    }
    actualizarBotonAgregar();
}

// boton actualizar contador de carrito
const contador = document.getElementById("contador-badge");

let cantidadProductos = 0;

function actualizarBotonAgregar() {
  const botonAgregar = document.querySelectorAll(".btn-agregar");

  botonAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
      cantidadProductos++;
      contador.innerText = cantidadProductos;
    });
  });
}

mostrarDetalle() 
