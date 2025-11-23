Tienda DecoHome (H&K) - E-commerce Frontend

Este proyecto es de una tienda en línea de objetos del hogar. Fue desarrollado como parte final del Módulo 2.
Link del repositorio del proyecto:
🔗 https://github.com/AndersAlejandro/ecommerce-frontend-m2

📋 Características

Catálogo Dinámico: Los productos se cargan dinámicamente en el Home desde un archivo JSON local usando fetch.

Página de Detalles: Al hacer clic en "Ver Detalles", se navega a una página específica que muestra la información del producto seleccionado mediante parámetros de URL.

Carrito de Compras:

Contador en el Navbar que se actualiza en tiempo real.

Diseño Responsivo:

Layout Mobile-First utilizando el sistema de grillas de Bootstrap.

🛠️ Tecnologías Utilizadas

HTML5 Semántico: Uso de etiquetas como <header>, <main>, <section>, <nav>.

CSS3 & Bootstrap 5.3:

Uso de Grid System (row, col).

Componentes: Navbar, Cards, Buttons, Badges.

Utilidades de espaciado y tipografía.

JavaScript (ES6):

Consumo de datos con fetch y async/await.

Manipulación del DOM.

Manejo de eventos (click).

Uso de window.location.search para navegación entre páginas.

localStorage para mantener el estado del carrito.

📂 Estructura del Proyecto

├── index.html              # Página de Inicio (Grilla de productos)
├── detallesproductos.html  # Página de detalle individual
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos personalizados
│   ├── js/
│   │   ├── index.js             # Lógica del Home
│   │   ├── detallesproducto.js  # Lógica del Detalle
│   │   └── productos.json       # "Base de datos" de productos
│   └── img/                # Imágenes del sitio
└── README.md


🚀 Cómo ejecutar el proyecto

Dado que el proyecto utiliza fetch para cargar el archivo JSON, es necesario ejecutarlo a través de un servidor local para evitar errores de políticas de CORS.

Clona este repositorio o descarga el ZIP.

Abre el proyecto en Visual Studio Code.


✒️ Autor

Anders Alejandro Mamani Choquehuanca - Alumno Bootcamp Java Full Stack.