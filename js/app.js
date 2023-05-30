function loadNavbar() {
    let tiendaShoes = document.getElementById('id_tienda_shoes')
    tiendaShoes.innerHTML = 'Tienda Shoes'

    let quienesSomos = document.getElementById('id_quienes_somos')
    quienesSomos.innerHTML = 'Quienes somos'

    let ofertas = document.getElementById('id_ofertas')
    ofertas.innerHTML = 'Ofertas'
    ofertas.classList.add('active')

    let contacto = document.getElementById('id_contacto')
    contacto.innerText = 'Contactanos'
    contacto.classList.add('active')
}

loadNavbar()

const productos = [
    { id: 1, descripcion: 'Fila Joger', precio: 35000, imagen: 'fila.jpg', infoExtra: '+ más características del producto' },
    { id: 2, descripcion: 'Reebok Merge', precio: 38000, imagen: 'reebook.jpg', infoExtra: '+ más características del producto' },
    { id: 3, descripcion: 'Adidas Green', precio: 27000, imagen: 'adidas.jpg', infoExtra: '+ más características del producto' },
    { id: 4, descripcion: 'Nike Colors', precio: 39000, imagen: 'nike.jpg', infoExtra: '+ más características del producto' },
    { id: 5, descripcion: 'NB War', precio: 45000, imagen: 'newBalance.jpg', infoExtra: '+ más características del producto' },
    { id: 6, descripcion: 'Topper Pink', precio: 28000, imagen: 'topper.jpg', infoExtra: '+ más características del producto' },
];

function renderizarProductos() {
    for (const producto of productos) {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="./img/${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
        <div class="card-body">
          <h5 class="card-title">${producto.descripcion}</h5>
          <p class="card-text">${producto.infoExtra}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Precio: ${producto.precio}</li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-success">Comprar</button>
        </div>
        </div>`

        document.body.appendChild(card)
    }
}

renderizarProductos()