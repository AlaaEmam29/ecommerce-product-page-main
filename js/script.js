const cartBtn = document.querySelector(".cart-logo")
const cartDetails = document.querySelector(".cart-details")
const mainImgCursoual = document.querySelector(".main-img-carousel")
const imgsCursourl = document.querySelectorAll(".imgs-cur > *")
const imgs = document.querySelectorAll(".imgs >  *")
const mainImg = document.querySelector(".main-img")
const overlay = document.querySelector(".overlay")
const carousel = document.querySelector(".carousel")
const prevBtn = document.querySelector(".prev-btn")
const nxtBtn = document.querySelector(".next-btn")
const imgsList = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
]
const detailsDom = document.querySelector(".details")
detailsDom.addEventListener("click", function (e) {
  const btn = e.target.closest(".deleteBtn")
  if (!btn) return
  const parent = btn.parentNode
  parent.remove()
  priceNow.innerHTML =''
  valueItem.textContent = '0'
})
const closeBtn = document.querySelector(".close-carousel-btn")
let currIndex = 0
function handleToggleCursorl(i) {
  currIndex = currIndex + i
  if (currIndex > imgsCursourl.length - 1) currIndex = 0
  if (currIndex < 0) currIndex = imgsCursourl.length - 1
  const src = imgsList[currIndex]
  mainImgCursoual.setAttribute("src" , src)

}
[closeBtn, overlay].forEach((event) => {
  event.addEventListener("click", function () {
removeCur()
})
})
function removeCur() {
      overlay.classList.add("hidden")
  carousel.classList.add("hidden")

}
window.addEventListener("keyup",  (e)=> {
  if(e.key == 'Escape') removeCur()
})

nxtBtn.addEventListener("click",handleToggleCursorl.bind(null , 1))

prevBtn.addEventListener("click",handleToggleCursorl.bind(null , -1))
cartBtn.addEventListener("click", function () {
    if (cartDetails.classList.contains("show")) {
        cartDetails.classList.remove("show")
                cartDetails.classList.add("hidden_cart")

    } else {
                cartDetails.classList.remove("hidden_cart")
                cartDetails.classList.add("show")

    }
})
mainImg.addEventListener("click", function (e) {
  overlay.classList.remove("hidden")
  carousel.classList.remove("hidden")
  const img = mainImg.getAttribute("src")
  mainImgCursoual.setAttribute("src" , img)

})
imgs.forEach((img, i) => {

  handleImages(imgs , img,i, mainImg)
})
imgsCursourl.forEach((img, i) => {
  
  handleImages(imgsCursourl , img,i, mainImgCursoual)
})
function handleImages(imgs,img,i, mainImg) {
  img.addEventListener("click", () => {
    imgs.forEach((i) => i.classList.remove("active"));
    img.classList.add("active");
const imgUrl = mainImg.getAttribute("src").replace(/[1-4]/g,( i + 1 ));
      mainImg.setAttribute("src", imgUrl)
  });

}

const addToCart = document.querySelector(".addToCart")
const inc = document.querySelector(".inc")
const valueItem = document.querySelector(".value")
const dec = document.querySelector(".dec")
const cartNotification = document.querySelector(".cart-items")
const priceSales = document.querySelector(".price-sale")
const priceNow = document.querySelector(".price-Now")
addToCart.addEventListener("click", function (e) {
  const items =  Number.parseInt(valueItem.textContent)
  if (items > 0) addToCart.disabled = false
  
})
dec.addEventListener("click", function () {
  let num = Number.parseInt(valueItem.textContent)
  if (num < 1) {
    addToCart.disabled = true
    priceNow.textContent = ''
    return 
  }
  handlePrice(-1 , num)
})
inc.addEventListener("click", function () {
  let num = Number.parseInt(valueItem.textContent)
 
  handlePrice(1 , num)
})

function handlePrice(i , num) {
  
  
  addToCart.disabled = false
  num = num + i
  valueItem.textContent = num
  
  let priceStr = priceSales.textContent.substring(1);
  let price = parseFloat(priceStr); 
  
  priceNow.textContent = `${updatePrice(price , num)}$`

}
function updatePrice(price, num) {
  return price *  num
}
const details = document.querySelector(".details")
const check = document.querySelector(".btn-checkout")

addToCart.addEventListener("click", function () {
  if (valueItem.textContent <  1 ) return
  cartNotification.textContent = valueItem.textContent
  cartNotification.classList.remove("hidden")
  details.innerHTML = ''
  const html = `
  <div class='item'>
  <img src="/images/image-product-1-thumbnail.jpg" alt="cart item delete" class='img-item' >

  <div class='info-product'> Fall Limited Edition Sneakers

$125 x ${valueItem.textContent} <strong>$${priceNow.textContent}</strong></div>

<img class='deleteBtn' src="/images/icon-delete.svg" alt="cart item delete">
    </div>
  `
  check.classList.remove("hidden")
  details.innerHTML += html
  
  addToCart.disabled = true
  
})
const iconBtn = document.querySelector(".icon-menu")
const aside = document.querySelector(".aside")
const navMobile = document.querySelector(".nav-responsive")
iconBtn.addEventListener("click", function () {
  navMobile.classList.add("addAnimation")
  aside.classList.remove("hidden")
  // if (aside.classList.contains("hidden")) {
  //   iconBtn.setAttributeNS("src","/images/icon-close.svg")
  // }
  // else {
    
    // }
  })
const closeNav = document.querySelector(".closeNav")
// document.querySelector(".nav-list-aside").addEventListener("click", function (e) {
//   const btn = e.target.querySelector("img")
//   // if (!btn ) return
//   console.log(btn ,e.target.querySelector("li"))

// })
const navListAside = document.querySelector(".nav-list-aside");

aside.addEventListener("click", function (e) {
  const btn = e.target.closest("img");
  if (!btn) return;
  console.log("Close button clicked!" , btn);
  aside.classList.add("hidden")
  iconBtn.setAttribute("src","/images/icon-menu.svg")
  navMobile.classList.remove("addAnimation")

});
