const basketBtn = document.querySelector("#basketBtn")
const basketContinueBtn = document.querySelector("#basketContinueBtn")
const basketCloseIcon = document.querySelector("#basketCloseIcon")
const cardBtn = document.querySelectorAll(".card-button")
const goodsQuantity = document.querySelector(".header__icon-quantity")
const quantityWrap = document.querySelector(".header__icon-link")
const basket = document.querySelector(".basket")
const cardProductsList = document.querySelector(".basket__goods-list")
const fullPrice = document.querySelector(".basket__footer-sum")
// const deleteGoodsBtn =


let price = 0;

function plusFullPrice(currentPrice){
    return price += currentPrice
}

function minusFullPrice(currentPrice){
    return price -= currentPrice
}

function printFullPrice () {
    fullPrice.textContent = `${normalPrice(price.toFixed(2))}`
}

function printQuantity () {
    let length = cardProductsList.children.length;
    goodsQuantity.textContent = length;
    length > 0 ? quantityWrap.style.display = "flex" : quantityWrap.style.display = "none";
}

function checkEmptyBasket(){
    let length = cardProductsList.children.length;
    if(length>0){
        document.querySelector('.basket__title-empty').style.display ="none";
    }else{
        document.querySelector('.basket__title-empty').style.display ="flex";

    }
 
}

cardProductsList.addEventListener('click', (e) => {
    
    e.preventDefault()
    if(e.target.classList.contains('basket__card-icon-img')) {
        
        deleteProducts(e.target.closest('.basket__goods-item'))
        
        
    }
    
    
})

function deleteProducts (productParent) {
    //get id
    let id = productParent.dataset.id;

    //disable false
    document.querySelector(`.product--card[data-id="${id}"]`).querySelector(".card-button").disabled=false;
    //minus price
    let currentPrice = +priceWithoutSpaces(productParent.querySelector(".basket__card-total").textContent);
    
    minusFullPrice(currentPrice);
    //print fullprice
    printFullPrice();
    //remove productParent
    productParent.remove();
    //count and print quantity
    printQuantity();
    checkEmptyBasket();

}

printQuantity()
 




cardBtn.forEach( el => {
    el.closest('.product--card').setAttribute('data-id', randomID());
    el.addEventListener('click', (e)=> {
        let self = e.currentTarget;
        let parent = self.closest('.product--card');
        let id = parent.dataset.id;
        let img = parent.querySelector(".card--img").getAttribute("src");
        let title = parent.querySelector(".card--text").textContent;
        let priceString = parent.querySelector(".card--price").textContent;
        let priceNumber = +priceWithoutSpaces(priceString);
        
        

        //sum 
        
        plusFullPrice(priceNumber);
        
 
        
     


        //print 
        printFullPrice();
        //add to card
        cardProductsList.insertAdjacentHTML('afterbegin', generateCardProduct(img, title, priceNumber, id))
        //count and print quantity
        printQuantity();
        //disable btn
        self.disabled = true;
        checkEmptyBasket();
    })
})


basketBtn.addEventListener('click', (e) => {

    basketToggle();
    e.preventDefault();
});

basketContinueBtn.addEventListener('click', (e) => {
    e.preventDefault();
    basketToggle();
});

basketCloseIcon.addEventListener('click', (e) => {
    e.preventDefault();
    basketToggle();
});



function basketToggle() {

    if (basket.classList.contains("slideOutLeft")) {
        document.querySelector(".body").style.overflow = "hidden";
        basket.style.display = "flex";
        basket.classList.remove("slideOutLeft")
        basket.classList.add("slideInLeft")


    } else {
        console.log(basket.style.display)

        basket.classList.remove("slideInLeft")
        basket.classList.add("slideOutLeft")
        document.querySelector(".body").style.overflow = "auto";

    }
}


function randomID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function priceWithoutSpaces(str) {
    return str.replace(/\$/, '');
}


function normalPrice(str) {
    return "$ " + str
}



function generateCardProduct(img, title, price, id) {
    return `
    <li class="basket__goods-item" data-id="${id}">
      <div class="basket__card__top-wrap">
        <img src="${img}" alt="" class="basket__card-img">
        <p class="basket__card-text">${title}</p>
        <a href="" class="basket__card-icon">
            <img src="img/Vector116.svg" alt="" class="basket__card-icon-img">
        </a>
      </div>
      <div class="basket__card__footer-wrap">
        <div class="basket__card-total-wrap">
            <p class="basket__card-total">$ ${price}</p>
        </div>
      </div>
    </li>
`
}