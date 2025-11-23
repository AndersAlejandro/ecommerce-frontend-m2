// Funcion para poder mostrar dinamicamente los productos del json
async function cargarProductos() {
  try {
    const respuesta = await fetch("assets/js/productos.json");
    const productos = await respuesta.json();
    const contenedor = document.getElementById("tarjetas-productos");
    productos.forEach((producto) => {
      const tarjetaHTML = `
  <div class="col"> <div class="card h-100 shadow-sm"> <img src="${producto.imagen}" class="card-img-top p-2" alt="${producto.titulo}" style="height: 200px; object-fit: contain;">
      
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-center text-truncate">${producto.titulo}</h5>
        
        <p class="card-text text-muted small text-truncate">${producto.descripcion}</p>
        <a href="detallesproducto.html?id=${producto.id}" class="btn text-end">
                  Ver Detalles
               </a>
        
        <div class="mt-auto d-flex justify-content-between align-items-center">
            <p class="fs-5 fw-bold text-end mb-2">$${producto.precio}</p>
            
            <button class="btn btn-outline-dark btn-sm fw-bold btn-agregar"${producto.id}">
                Agregar al Carrito
            </button>
        </div>
      </div>

    </div>
  </div>
`;
      contenedor.innerHTML += tarjetaHTML;
    });
    actualizarBotonAgregar();
  } catch (error) {
    console.error("Error al buscar los datos", error);
  }
}

//  funcion para poder actualizar el contador del carrito
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
cargarProductos();
