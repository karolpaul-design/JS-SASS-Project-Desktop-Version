const buttonTop = document.querySelector('#buttonTop')
const topButtonContent = document.querySelector("#topButtonContent")
const body = document.querySelector('body')
const catalogBtnUkn = document.querySelector('#catalogBtnUkn')
const catalogFilterBtn = document.querySelector('#catalogFilterBtn')
const catalogFilterBtnImg = document.querySelector('.catalog__navigation-btn-img')
const catalogSidebar = document.querySelector(".catalog__sidebar")
const catalogContainer = document.querySelector(".catalog__container")
const catalogBlock = document.querySelector(".catalog__block-list")
const selectCityContent = document.querySelector("#topSelectContent")



//Header
//Call-Button
const toggleButtonTop = () => {
    selectCityContent.classList.add("hidden")

    if (topButtonContent.classList.length > 1) {
        topButtonContent.classList.remove("hidden")
        // buttonTop.style.transition='all 0.1s ease'
        buttonTop.style.background = 'rgba(62, 48, 101, 0.4)'
        buttonTop.style.backdropFilter = 'blur(5px)'
        $(".header__select-icon-img--a").attr("src", "img/Tringle.svg")

    } else {
        topButtonContent.classList.add("hidden")
        // buttonTop.style.transition='all 0.1s ease'
        buttonTop.style.background = ' rgba(255, 255, 255, 0.01)'
        buttonTop.style.backdropFilter = 'blur(40px)'

    }

}


buttonTop.addEventListener("click", toggleButtonTop)


//Функция что бы закрывать содержимое кнопки, когда нажато вне её содержимого
document.addEventListener('click', function (e) {

    let target = e.target;
    let itsContent = target == topButtonContent || topButtonContent.contains(target);
    let itsButton = target == buttonTop;
    let contentHidden = topButtonContent.classList.contains('hidden');

    if (!itsContent && !itsButton && !contentHidden) {
        topButtonContent.classList.add("hidden")
        buttonTop.style.transition = 'all 0.1s'
        buttonTop.style.background = 'inherit'
    }
})



//Header
//Select City
$(document).ready(function () {

    $("#selectCity").click(() => {
        if ($("#topSelectContent").hasClass("hidden")) {
            $("#topSelectContent").removeClass("hidden")
            $(".header__select-icon-img--a").attr("src", "img/VectorUp.svg")
        } else {
            $("#topSelectContent").addClass("hidden")
            $(".header__select-icon-img--a").attr("src", "img/Tringle.svg")
        }
    })


    $(".header__select-link1").click((e) => {

        e.preventDefault()
        let city = $(".header__select-city").text()

        $(".header__select-city").text($(".header__select-link1").text())
        $(".header__select-link1").text(city)
        $("#topSelectContent").addClass("hidden")
        $(".header__select-icon-img--a").attr("src", "img/Tringle.svg")
    })


    $(".header__select-link2").click((e) => {

        e.preventDefault()
        let city = $(".header__select-city").text()

        $(".header__select-city").text($(".header__select-link2").text())
        $(".header__select-link2").text(city)
        $("#topSelectContent").addClass("hidden")
        $(".header__select-icon-img--a").attr("src", "img/Tringle.svg")
    })


    $(".header__select-link3").click((e) => {

        e.preventDefault()
        let city = $(".header__select-city").text()

        $(".header__select-city").text($(".header__select-link3").text())
        $(".header__select-link3").text(city)
        $("#topSelectContent").addClass("hidden")
        $(".header__select-icon-img--a").attr("src", "img/Tringle.svg")
    })


    $(".header__select-link4").click((e) => {

        e.preventDefault()
        let city = $(".header__select-city").text()

        $(".header__select-city").text($(".header__select-link4").text())
        $(".header__select-link4").text(city)
        $("#topSelectContent").addClass("hidden")
        $(".header__select-icon-img--a").attr("src", "img/Tringle.svg")
    })
})


//Catalog
//Sidebar Button 

const toggleFilterTop = (e) => {

    e.preventDefault()

    if (catalogFilterBtn.classList.contains("visibility-hidden")) {
        catalogFilterBtn.classList.remove("visibility-hidden")

        catalogBtnUkn.style.background = "#D6D6D6"
        catalogSidebar.classList.remove("hidden")
        catalogContainer.style.display = "flex"

        createGoodsLength3();
    } else {
        catalogFilterBtn.classList.add("visibility-hidden")
        catalogSidebar.classList.add("hidden")
        catalogContainer.style.display = "block"

        catalogBtnUkn.style.background = "#FFFFFF"
        createGoodsLength4();
    }
}

catalogBtnUkn.addEventListener("click", toggleFilterTop)

function createGoodsLength4() {
    let block = $(".catalog__block-list")

    for (let i = 0; i < 3; i++) {
        while (block[i].children.length != 4 && block[i].children.length > 0) {
            block[i].append(block[i + 1].children[0]);
        }
    }
    $(".catalog__block-item")[3].style.display = 'none'
}


function createGoodsLength3() {
    let block = $(".catalog__block-list")

    for (let i = 0; i < 3; i++) {
        while (block[i].children.length != 3) {
            block[i + 1].prepend(block[i].children[block[i].children.length - 1]);
        }
    }
    $(".catalog__block-item")[3].style.display = 'block'
}



//Catalog
//Filter Remove

$('#catalogFilterBtn').click((e) => {

    e.preventDefault()
    $('.sidebar-label').removeClass('sidebar--active')
    $('.sidebar__color-label').removeClass('sidebar-color--active')
    $(".catalog__navigation-btn-img").addClass('hidden')
})

//Catalog
//Navigation

$(document).ready(function () {

    const block = $(".catalog__block-wrap")
    const item = $(".catalog__navigation-item")
    const active = $(".catalog__navigation-item--active")
    const tShirt = $(".tShirt")
    const hoody = $(".hoody")
    const sweater = $(".sweater")
    const cap = $(".cap")


    item.click(function () {

        item.removeClass("catalog__navigation-item--active")
        $(this).addClass("catalog__navigation-item--active")
        $('.sidebar-label').removeClass('sidebar--active')
        $('.sidebar__color-label').removeClass('sidebar-color--active')
        $(".catalog__navigation-btn-img").addClass('hidden')


        if ($(this).text() == "Футболки") {
            block.addClass("hidden")
            tShirt.removeClass("hidden")
        } else if ($(this).text() == "Толстовки") {
            block.addClass("hidden")
            hoody.removeClass("hidden")
        } else if ($(this).text() == "Cвитера") {
            block.addClass("hidden")
            sweater.removeClass("hidden")
        } else if ($(this).text() == "Кепки") {
            block.addClass("hidden")
            cap.removeClass("hidden")
        }
    })
})



//Catalog
//Sidebar select items


$(document).ready(function () {

    $('.sidebar-label').click(function () {

        $(".catalog__navigation-btn-img").removeClass('hidden')


        if ($(this).hasClass('sidebar--active')) {
            $(this).removeClass('sidebar--active')
        } else {
            $(this).addClass('sidebar--active')
        }
    })


    $('.sidebar__color-label').click(function () {

        $(".catalog__navigation-btn-img").removeClass('hidden')


        if ($(this).hasClass('sidebar-color--active')) {
            $(this).removeClass('sidebar-color--active')
        } else {
            $(this).addClass('sidebar-color--active')
        }
    })
})