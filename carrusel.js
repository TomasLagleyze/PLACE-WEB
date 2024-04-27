
    let products = null;
    // get datas from file json
    fetch('../products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            showDetail2();
    })
    
    function showDetail2(){
    // remove datas default from HTML

    let listProductimg = document.querySelector('.listProductimg');
    let productId =  new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    //if there is no product with id = productId => return to home page
    if(!thisProduct){
        window.location.href = "/";
    }
    
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.image img').src = thisProduct.image;
    
    }
