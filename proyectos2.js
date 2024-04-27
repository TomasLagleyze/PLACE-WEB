
    let products2 = null;
    // get datas from file json
    fetch('../products2.json')
        .then(response => response.json())
        .then(data => {
            products2 = data;
            addDataToHTML2();
    })

    function addDataToHTML2(){
// remove datas default from HTML
    let listProduct2HTML = document.querySelector('.listProduct2');

    // add new datas
    if(products2 != null) // if has data
    {
        products2.forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = './detail.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            ` <img class="img-proyectos" src="${product.image}" alt="">
            <h2 class="nombre-proyecto">${product.name}</h2>`;
            listProduct2HTML.appendChild(newProduct);
        });
    }
}
