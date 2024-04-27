
    let products = null;
    // get datas from file json
    fetch('../products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
    })

    function addDataToHTML(){
// remove datas default from HTML
    let listProductHTML = document.querySelector('.listProduct');

    // add new datas
    if(products != null) // if has data
    {
        products.forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = './detail.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            ` <img class="img-proyectos" src="${product.image}" alt="">
            <h2 class="nombre-proyecto">${product.name}</h2>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}
