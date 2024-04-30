
let products4 = null;
// get datas from file json
fetch('../products4.json')
    .then(response => response.json())
    .then(data => {
        products4 = data;
        addDataToHTML();
})

function addDataToHTML(){
// remove datas default from HTML
let listProduct4HTML = document.querySelector('.listProduct4');

// add new datas
if(products4 != null) // if has data
{
    products4.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = './detail4.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        ` <img class="img-proyectos" src="${product.image}" alt="">
        <h2 class="nombre-proyecto">${product.name}</h2>`;
        listProduct4HTML.appendChild(newProduct);
    });
}
}
