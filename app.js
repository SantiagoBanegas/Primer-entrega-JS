let productos = [
    {nombre: "Zapatilla Nike", talle: 36, precio: "$10.000"},
    {nombre: "Zapatilla Nike", talle: 37, precio: "$10.500" },
    {nombre: "Zapatilla Nike", talle: 38, precio: "$11.000" },
    {nombre: "Zapatilla Nike", talle: 39, precio: "$12.000" },
    {nombre: "Zapatilla Nike", talle: 40, precio: "$12.500" },
    {nombre: "Zapatilla Nike", talle: 41, precio: "$13.000" },
    {nombre: "Zapatilla Nike", talle: 42, precio: "$13.500" },
    {nombre: "Zapatilla Nike", talle: 43, precio: "$13.500" },
    {nombre: "Zapatilla Nike", talle: 44, precio: "$15.000" },
    {nombre: "Zapatilla Nike", talle: 45, precio: "$15.000" },

    {nombre: "Zapatilla Adidas", talle: 36, precio: "$11.000" },
    {nombre: "Zapatilla Adidas", talle: 37, precio: "$11.500" },
    {nombre: "Zapatilla Adidas", talle: 38, precio: "$12.000" },
    {nombre: "Zapatilla Adidas", talle: 39, precio: "$12.500" },
    {nombre: "Zapatilla Adidas", talle: 40, precio: "$13.000" },
    {nombre: "Zapatilla Adidas", talle: 41, precio: "$13.500" },
    {nombre: "Zapatilla Adidas", talle: 42, precio: "$14.000" },
    {nombre: "Zapatilla Adidas", talle: 43, precio: "$14.000" },
    {nombre: "Zapatilla Adidas", talle: 44, precio: "$16.000" },
    {nombre: "Zapatilla Adidas", talle: 45, precio: "$16.000" },

    {nombre: "Zapatilla Puma", talle: 36, precio: "$8.000" },
    {nombre: "Zapatilla Puma", talle: 37, precio: "$8.500" },
    {nombre: "Zapatilla Puma", talle: 38, precio: "$8.500" },
    {nombre: "Zapatilla Puma", talle: 39, precio: "$9.000" },
    {nombre: "Zapatilla Puma", talle: 40, precio: "$9.500" },
    {nombre: "Zapatilla Puma", talle: 41, precio: "$10.000" },
    {nombre: "Zapatilla Puma", talle: 42, precio: "$10.500" },
    {nombre: "Zapatilla Puma", talle: 43, precio: "$10.700" },
    {nombre: "Zapatilla Puma", talle: 44, precio: "$12.000" },
    {nombre: "Zapatilla Puma", talle: 45, precio: "$12.500" },
];


let talleIngresado = Number(prompt("Ingrese el talle que desea buscar"));
let filtrados = productos.filter(elemento => elemento.talle === talleIngresado);
console.log(filtrados)

// let prodDisponible = alert("Disponemos de las siguientes unidades" + filtrados);
