const prompt = require('prompt-sync')();
// Alumna: Victoria Garcia Bustos
// 1. Estructura de Datos
// Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades: id (número), título (string), autor (string), año (número), género (string), disponible (booleano).


let libros = [
    { id: 1, titulo: "Zama", autor: "Antonio Di Benedetto", año: 1956, genero: "Novela histórica", disponible: true },
    { id: 2, titulo: "Los Sorias", autor: "Alberto Laiseca", año: 1998, genero: "Ficción fantástica", disponible: true },
    { id: 3, titulo: "La invención de Morel", autor: "Adolfo Bioy Casares", año: 1940, genero: "Ciencia Ficción", disponible: true },
    { id: 4, titulo: "El entenado", autor: "Juan José Saer", año: 1983, genero: "Ficción histórica", disponible: true },
    { id: 5, titulo: "El campo", autor: "Martín Kohan", año: 2000, genero: "Novela contemporánea", disponible: true },
    { id: 6, titulo: "La ciudad ausente", autor: "Ricardo Piglia", año: 1992, genero: "Ficción literaria", disponible: true },
    { id: 7, titulo: "Formas de volver a casa", autor: "Alejandro Zambra", año: 2011, genero: "Novela intimista", disponible: true },
    { id: 8, titulo: "El origen de la tristeza", autor: "Pablo Ramos", año: 2004, genero: "Novela autobiográfica", disponible: true },
    { id: 9, titulo: "Las primas", autor: "Aurora Venturini", año: 2007, genero: "Novela", disponible: true },
    { id: 10, titulo: "Ciencias morales", autor: "Martín Kohan", año: 2007, genero: "Novela", disponible: true }
];


// Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener: id (número), nombre (string), email (string), librosPrestados (array de ids de libros).


let usuarios = [
    { id: 1, nombre: "Alejandro Bornico", email: "ale.bornico@gmail.com", librosPrestados: [] },
    { id: 2, nombre: "Julia Mantero", email: "julia_m@hotmail.com", librosPrestados: [] },
    { id: 3, nombre: "Morena Sanguinetti", email: "morena.sanguinetti@yahoo.com", librosPrestados: [] },
    { id: 4, nombre: "Graciela Bustos", email: "gracibustos@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Victoria Garcia", email: "vic_garcia89@hotmail.com", librosPrestados: [] }
];


console.log("Libros:", libros);
console.log("Usuarios:", usuarios);


// 2. Funciones de Gestión de Libros


// A- Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(titulo, autor, anio, genero) {
    let nuevoId = libros.length > 0 ? libros[libros.length - 1].id + 1 : 1;
    let nuevoLibro = {
        id: nuevoId,
        titulo: titulo,
        autor: autor,
        año: anio,
        genero: genero,
        disponible: true
    };
    libros.push(nuevoLibro);
    console.log(`Libro "${titulo}" agregado correctamente con ID ${nuevoId}.`);
}

// Agregar "El visitante" de Alma Maritano
agregarLibro("El visitante", "Alma Maritano", 1980, "Literatura juvenil");
console.log(libros);
 
// B- Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor) {
    let resultado = libros.filter(libro => libro[criterio].toLowerCase() === valor.toLowerCase());
   
    if (resultado.length > 0) {
        console.log("Libros encontrados:", resultado);
    } else {
        console.log("No se encontraron libros con ese criterio.");
    }
}


// Prueba buscando un libro por título
buscarLibro("titulo", "Zama");


// Prueba buscando un libro por autor
buscarLibro("autor", "Martín Kohan");


// Prueba buscando por género
buscarLibro("genero", "Novela");


// C- Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.


function ordenarLibros(criterio) {
    let n = libros.length;
    let librosOrdenados = [...libros]; // Copia del array original
   
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (librosOrdenados[j][criterio] > librosOrdenados[j + 1][criterio]) {
                let temp = librosOrdenados[j];
                librosOrdenados[j] = librosOrdenados[j + 1];
                librosOrdenados[j + 1] = temp;
            }
        }
    }
    console.log("Libros ordenados por " + criterio + ":", librosOrdenados);
}


// Prueba ordenando por título
ordenarLibros("titulo");


// Prueba ordenando por año
ordenarLibros("año");


// D- Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
    let indice = libros.findIndex(libro => libro.id === id);


    if (indice !== -1) {
        let libroEliminado = libros.splice(indice, 1);
        console.log(`Libro "${libroEliminado[0].titulo}" eliminado correctamente.`);
    } else {
        console.log("No se encontró un libro con ese ID.");
    }
}


// Prueba eliminando un libro
borrarLibro(3);
console.log(libros);


// 3. Gestión de Usuarios

// A- Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

function registrarUsuario(id, nombre, email) {
    let nuevoUsuario = {
        id: id,
        nombre: nombre,
        email: email.toLowerCase(),
        librosPrestados: []
    };
    usuarios.push(nuevoUsuario);
    console.log(`Usuario "${nombre}" registrado correctamente.`);
}

// Prueba registrando un usuario
registrarUsuario(6, "Josefina Villegas", "jovillegas@gmail.com");
console.log(usuarios);

// B- Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

function mostrarTodosLosUsuarios() {
    console.log("Lista de usuarios:", usuarios);
}

// Prueba mostrando todos los usuarios
mostrarTodosLosUsuarios();



// C- Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) {
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email.toLowerCase());
    
    if (usuarioEncontrado) {
        console.log("Usuario encontrado:", usuarioEncontrado);
    } else {
        console.log("No se encontró un usuario con ese email.");
    }
}

// Prueba buscando un usuario
buscarUsuario("ale.bornico@gmail.com");

// D- Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(email) {
    let indice = usuarios.findIndex(usuario => usuario.email === email.toLowerCase());

    if (indice !== -1) {
        let usuarioEliminado = usuarios.splice(indice, 1);
        console.log(`Usuario "${usuarioEliminado[0].nombre}" eliminado correctamente.`);
    } else {
        console.log("No se encontró un usuario con ese email.");
    }
}

// Prueba eliminando un usuario
borrarUsuario("ale.bornico@gmail.com");
console.log(usuarios);

// 4. Sistema de Préstamos

// A- Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.

function prestarLibro(idLibro, idUsuario) {
    let libro = libros.find(l => l.id === idLibro);
    let usuario = usuarios.find(u => u.id === idUsuario);

    // Si no se encuentra el libro
    if (libro === undefined || libro === null) {
        console.log("Libro no encontrado.");
        return;
    }

    // Si no se encuentra el usuario
    if (usuario === undefined || usuario === null) {
        console.log("Usuario no encontrado.");
        return;
    }

    // Si el libro ya está disponible
    if (libro.disponible === true) {
        console.log(`El libro "${libro.titulo}" ya está disponible.`);
        return;
    }

    // Devolver el libro
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    console.log(`El libro "${libro.titulo}" fue devuelto por ${usuario.nombre}.`);
}

// Prueba devolviendo un libro
prestarLibro(2, 1);
console.log(libros);
console.log(usuarios);

// B- Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
    let libro = libros.find(l => l.id === idLibro);
    let usuario = usuarios.find(u => u.id === idUsuario);

    // Verificar si el libro no fue encontrado
    if (libro === undefined || libro === null) {
        console.log("Libro no encontrado.");
        return;
    }

    // Verificar si el usuario no fue encontrado
    if (usuario === undefined || usuario === null) {
        console.log("Usuario no encontrado.");
        return;
    }

    // Verificar si el libro ya está disponible
    if (libro.disponible === true) {
        console.log(`El libro "${libro.titulo}" ya está disponible.`);
        return;
    }

    // Devolver el libro
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    console.log(`El libro "${libro.titulo}" fue devuelto por ${usuario.nombre}.`);
}

// Prueba devolviendo un libro
devolverLibro(2, 1);
console.log(libros);
console.log(usuarios);

// 5. Reportes
// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información: Cantidad total de libros, Cantidad de libros prestados, Cantidad de libros por género, Libro más antiguo y más nuevo.
function generarReporteLibros() {
    let totalLibros = libros.length;

    let librosPrestados = libros.filter(libro => !libro.disponible).length;

    let librosPorGenero = libros.reduce((acc, libro) => {
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;
    }, {});

    let libroMasAntiguo = libros.reduce((min, libro) => (libro.año < min.año ? libro : min), libros[0]);
    let libroMasNuevo = libros.reduce((max, libro) => (libro.año > max.año ? libro : max), libros[0]);

    console.log("Reporte de la Biblioteca:");
    console.log(`Cantidad total de libros: ${totalLibros}`);
    console.log(`Cantidad de libros prestados: ${librosPrestados}`);
    console.log("Cantidad de libros por género:", librosPorGenero);
    console.log(`Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
    console.log(`Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);
}

// Prueba generando el reporte
generarReporteLibros();

// 6. Identificación Avanzada de libros
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante. 

function librosConPalabrasEnTitulo() {
    
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    let librosFiltrados = libros.filter(libro => {
        // Para eliminar espacios al principio y al final del título y separar por espacios
        let palabras = libro.titulo.trim().split(/\s+/);
        
        // Para verificar que el título tenga más de una palabra y que solo tenga letras y espacios
        let tieneMasDeUnaPalabra = palabras.length > 1;
        let soloLetrasYEspacios = regex.test(libro.titulo);
        
        // Si ambas condiciones se cumplen true
        return tieneMasDeUnaPalabra && soloLetrasYEspacios;
    });

    // Mostrar los resultados
    console.log("📚 Libros con más de una palabra en el título:");
    // Mostrar solo los títulos de los libros filtrados
    console.log(librosFiltrados.map(libro => libro.titulo));
}

// Prueba mostrando los libros con más de una palabra en el título
librosConPalabrasEnTitulo();

// 7. Cálculos Estadísticos
// Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros: Obtener un array con los años de publicación de todos los libros. Calcular el promedio de los años de publicación. Encontrar el año de publicación más frecuente. Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()

function calcularEstadisticas() {
    let añosPublicacion = libros.map(libro => libro.año);

    let promedioAños = Math.round(añosPublicacion.reduce((acc, año) => acc + año, 0) / añosPublicacion.length);

    let frecuenciaAños = añosPublicacion.reduce((acc, año) => {
        acc[año] = (acc[año] || 0) + 1;
        return acc;
    }, {});

    let añoMasFrecuente = Object.keys(frecuenciaAños).reduce((a, b) => 
        frecuenciaAños[a] > frecuenciaAños[b] ? a : b
    );

    let añoMasAntiguo = Math.min(...añosPublicacion);
    let añoMasNuevo = Math.max(...añosPublicacion);
    let diferenciaAños = añoMasNuevo - añoMasAntiguo;

    console.log("Estadísticas de Publicación:");
    console.log(`Años de publicación: ${añosPublicacion}`);
    console.log(`Promedio de años de publicación: ${promedioAños}`);
    console.log(`Año más frecuente: ${añoMasFrecuente} (${frecuenciaAños[añoMasFrecuente]} veces)`);
    console.log(`Año más antiguo: ${añoMasAntiguo}`);
    console.log(`Año más nuevo: ${añoMasNuevo}`);
    console.log(`Diferencia entre el más antiguo y el más nuevo: ${diferenciaAños} años`);
}

// Prueba calculando estadísticas
calcularEstadisticas();

// 8. Manejo de Cadenas
// Crear una función normalizarDatos() que utilice métodos de strings para: Convertir todos los títulos a mayúsculas. Eliminar espacios en blanco al inicio y final de los nombres de autores. Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });

    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });

    console.log("Datos normalizados correctamente.");
}

// Prueba normalizando datos
normalizarDatos();
console.log(libros);
console.log(usuarios);

// 9. Interfaz de Usuario por Consola
// Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt(). El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

function menuPrincipal() {
    let opcion; // Variable donde se guarda la opción elegida por el usuario

    do {
        // Mostramos el menú y pedimos al usuario que elija una opción
        opcion = prompt(
            "📚 SISTEMA DE BIBLIOTECA\n\n" +
            "1. Agregar libro\n" +
            "2. Buscar libro\n" +
            "3. Ordenar libros\n" +
            "4. Borrar libro\n" +
            "5. Registrar usuario\n" +
            "6. Mostrar todos los usuarios\n" +
            "7. Buscar usuario\n" +
            "8. Borrar usuario\n" +
            "9. Prestar libro\n" +
            "10. Devolver libro\n" +
            "11. Generar reporte de libros\n" +
            "12. Mostrar títulos con más de una palabra\n" +
            "13. Calcular estadísticas\n" +
            "14. Normalizar datos\n" +
            "0. Salir\n\n" +
            "Ingrese el número de la opción deseada:"
        );

        switch (opcion) {
            case "1":
                let id = Number(prompt("Ingrese ID del libro:"));
                let titulo = prompt("Ingrese título del libro:");
                let autor = prompt("Ingrese autor:");
                let anio = Number(prompt("Ingrese año de publicación:"));
                let genero = prompt("Ingrese género:");
                agregarLibro(id, titulo, autor, anio, genero);
                break;

            case "2":
                let criterio = prompt("Buscar por: título, autor o género:");
                let valor = prompt("Ingrese el valor de búsqueda:");
                console.log(buscarLibro(criterio, valor));
                break;

            case "3":
                let criterioOrden = prompt("Ordenar por: título o año:");
                ordenarLibros(criteroOrden);
                break;

            case "4":
                let idBorrar = Number(prompt("Ingrese ID del libro a borrar:"));
                borrarLibro(idBorrar);
                break;

            case "5":
                let idUsuario = Number(prompt("Ingrese ID del usuario:"));
                let nombreUsuario = prompt("Ingrese nombre del usuario:");
                let emailUsuario = prompt("Ingrese email del usuario:");
                registrarUsuario(idUsuario, nombreUsuario, emailUsuario);
                break;

            case "6":
                mostrarTodosLosUsuarios();
                break;

            case "7":
                let emailBuscar = prompt("Ingrese email del usuario:");
                buscarUsuario(emailBuscar);
                break;

            case "8":
                let emailBorrar = prompt("Ingrese email del usuario a borrar:");
                borrarUsuario(emailBorrar);
                break;

            case "9":
                let idLibroPrestar = Number(prompt("Ingrese ID del libro a prestar:"));
                let idUsuarioPrestar = Number(prompt("Ingrese ID del usuario que lo recibe:"));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;

            case "10":
                let idLibroDevolver = Number(prompt("Ingrese ID del libro a devolver:"));
                let idUsuarioDevolver = Number(prompt("Ingrese ID del usuario que lo devuelve:"));
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;

            case "11":
                generarReporteLibros();
                break;

            case "12":
                librosConPalabrasEnTitulo();
                break;

            case "13":
                calcularEstadisticas();
                break;

            case "14":
                normalizarDatos();
                break;

            case "0":
                console.log("Gracias por usar el sistema de biblioteca. ¡Hasta luego!");
                break;

            default:
                console.log("Opción inválida. Por favor, intente con un número del 0 al 14.");
                break;
        }

    } while (opcion !== "0"); // El menú se repite hasta que el usuario elija "0"
}

// Ejecutar el menú
menuPrincipal();





