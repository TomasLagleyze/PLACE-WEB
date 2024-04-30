
let products2 = null;
// get datas from file json
fetch('../products3.json')
    .then(response => response.json())
    .then(data => {
        products3 = data;
        addDataToHTML2();
})

function addDataToHTML2(){
// remove datas default from HTML
let listProduct3HTML = document.querySelector('.listProduct3');

// add new datas
if(products3 != null) // if has data
{
    products3.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = './detail3.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        ` <img class="img-proyectos" src="${product.image}" alt="">
        <h2 class="nombre-proyecto">${product.name}</h2>`;
        listProduct3HTML.appendChild(newProduct);
    });
}
}
