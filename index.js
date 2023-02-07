
//---------------------------carousel--------------------------
//using raw JS
let carouselParent = document.querySelector("div.carousel");
let carouselItems = document.querySelectorAll(".carousel_item");

let currentIndex = 0;

let entered = false;
let visibleItem = carouselItems[currentIndex];

carouselParent.addEventListener("mouseenter", function(){
    this.style.background = "rgba(0, 0, 0, 0.4)";
    applyStyleCarouselItems();
})

carouselParent.addEventListener("mouseleave", function(){
    resetStyleCarouselItems();
    resetStyleCarouselParent();
})

let carouselNextButton = document.getElementById("carousel_button_next");

carouselNextButton.addEventListener("click", function(){
    let index = currentIndex == carouselItems.length - 1 ? 0 : currentIndex + 1;
    switchCarouselItem(index);
});

//using jQuery
let carouselPrevButton = $("#carousel_button_prev");

carouselPrevButton.click(function(){
    let index = currentIndex == 0 ? carouselItems.length - 1 : currentIndex - 1;
    switchCarouselItem(index);
});

//using raw JS
function switchCarouselItem(index)
{
    resetStyleCarouselItems();
    carouselItems[currentIndex].classList.remove("carousel_item_visible");
    carouselItems[index].classList.add("carousel_item_visible");
    currentIndex = index;
    visibleItem = carouselItems[currentIndex];
    applyStyleCarouselItems();
}

function resetStyleCarouselItems()
{
    visibleItem.style.width = "100%";
}

function applyStyleCarouselItems()
{
    visibleItem.style.width = "80%";
    visibleItem.style.margin = "auto";
}

function resetStyleCarouselParent()
{
    carouselParent.style.backgroundColor = "black";
    carouselParent.style.background = "rgba(0, 0, 0, 0)";
}

//--------------------------mouseover container-------------------------
//using jQuery
let mouseOverContainer = $(".mouseover-scale-container");
let mouseOverChildren = $(".mouseover-scale-child");

mouseOverContainer.mouseenter(function(){
    updateStyleScale();
    this.style.background = "rgba(0, 0, 0, 0.4)";
});

mouseOverContainer.mouseleave(function(){
    updateStyleScale(false);
    this.style.background = "rgba(0, 0, 0, 0)";
});

function updateStyleScale(applyStyle = true)
{
    if(applyStyle) mouseOverChildren.addClass("mouseover-scale");
    else mouseOverChildren.removeClass("mouseover-scale");
}