const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
let product = [
  {
    id: 1,
    cate: "Giày nike",
    title: "Nike Dunk Low Green Paisley - Rep 1:1",
    price: "599,000",
    inCart: 0,
  },
  {
    id: 2,
    cate: "Giày nike",
    title: "SB Da Lộn Cà Phê  - Rep 1:1",
    price: "649,000",
    inCart: 0,
  },
  {
    id: 3,
    cate: "Giày nike",
    title: "SB Akira Khoai Môn - Rep 1:1",
    price: "649,000",
    inCart: 0,
  },
  {
    id: 4,
    cate: "Giày nike",
    title: "SB Akira Xanh Rêu - Rep 1:1",
    price: "649,000",
    inCart: 0,
  },
  {
    id: 5,
    cate: "Giày nike",
    title: "SB Akira Xanh Kem - Rep 1:1",
    price: "649,000",
    inCart: 0,
  },
  {
    id: 6,
    cate: "Giày nike",
    title: "SB Xanh Cam - Rep 1:1",
    price: "599,000",
    inCart: 0,
  },
  {
    id: 7,
    cate: "Giày nike",
    title: "SB Hồng - Rep 1:1",
    price: "599,000",
    inCart: 0,
  },
  {
    id: 8,
    cate: "Giày nike",
    title: "Jordan 3 Fragment - Rep 1:1",
    price: "679,000",
    inCart: 0,
  },
]
let newProduct = [
  {
    id: 1,
    cate: "Giày Gucci",
    title: "North Face Rhyton - Rep 1:1",
    price: "749,000",
    inCart: 0,
  },
  {
    id: 2,
    cate: "Giày MLB",
    title: "Boston Monogram  - Rep 1:1",
    price: "749,000",
    inCart: 0,
  },
  {
    id: 3,
    cate: "Giày nike",
    title: "Jordan 3 Retro Tinker - Rep 1:1",
    price: "679,000",
    inCart: 0,
  },
  {
    id: 4,
    cate: "Giày nike",
    title: "Jordan Chicago Red - Rep 1:1",
    price: "749,000",
    inCart: 0,
  },
  {
    id: 5,
    cate: "Giày nike",
    title: "Jordan Legacy Blue - Rep 1:1",
    price: "749,000",
    inCart: 0,
  },
  {
    id: 6,
    cate: "Giày nike",
    title: "Jordan Louis Vuitton - Rep 1:1",
    price: "749,000",
    inCart: 0,
  },
  {
    id: 7,
    cate: "Giày nike",
    title: "Jordan Xám Đen - Rep 1:1",
    price: "649,000",
    inCart: 0,
  },
  {
    id: 8,
    cate: "Giày nike",
    title: "Jordan Xanh Ngọc - Rep 1:1",
    price: "749,000",
    inCart: 0,
  },
]
if(bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  })
}
if(close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
}
function detailPage(){
  location.assign("detail.html");
}

if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
}else {
  ready();
}

function ready() {
  var removeBtns = document.getElementsByClassName('trash')
  for(var i = 0; i < removeBtns.length; i++) {
    var button = removeBtns[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for(var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  var addCart = document.getElementsByClassName('cart')
  for(var i = 0; i < addCart.length; i++) {
    var addButton = addCart[i]
    addButton.addEventListener("click", addCartClicked)
  }
}
function moveToShop() {
  var element = document.getElementsByClassName('shop-now')[0]
  var headerOffset = 80
  var elementPosition = element.getBoundingClientRect().top
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  }); 
}
function removeCartItem(e) {
  var buttonClicked = e.target
  buttonClicked.parentElement.remove()
  updateTotal()
}

function quantityChanged(e) {
  var input = e.target
  if(isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateTotal()
}

function addCartClicked(e) {
  var addButton = e.target
  var shopProducts = addButton.parentElement
  var cate = shopProducts.getElementsByClassName('pro-category')[0].innerText
  var title = shopProducts.getElementsByClassName('pro-title')[0].innerText
  var proImg = shopProducts.getElementsByTagName('img')[0].src
  // addProductToCart(cate, title, proImg)
  // updateTotal()
}

// function addProductToCart(cate, title, proImg) {
//   var addShopBox = document.createElement('div')
//   addShopBox.classList.add('cart-box')
//   var cartItems = document.getElementsByClassName('cart-container')[0]
//   var cartItemsCate = cartItems.getElementsByClassName('cart-pro-category')
//   for(var i = 0; i < cartItemsCate.length; i++) {
//     console.log(cartItems)
//     if( cartItemsCate.innerText == cate) {
//       return
//     }
//   }
//   var cartBoxContent = `
//   <div>
//   <img src="./assets/images/sneaker/green-paisley.jpg" alt="">
//   </div>
//   <div class="des">
//       <span class="cart-pro-category">Giày nike</span>
//       <h5 class="cart-pro-title">Nike Dunk Low Green Paisley - Rep 1:1</h5>
//       <input type="number" value="1" class="cart-quantity">
//       <h4 class="cart-price">599,000 VND</h4>
//   </div>
//   <i class="fas fa-trash trash"></i>
//   `
//   addShopBox.innerHTML = cartBoxContent
//   cartItems.append(addShopBox)
//   addShopBox.getElementsByClassName('trash')[0].addEventListener('click', removeCartItem)
//   addShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
// }

function updateTotal() {
  var cartContainer = document.getElementsByClassName('cart-container')[0]
  var cartBoxes = cartContainer.getElementsByClassName('cart-box')
  var total = 0
  for(var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName('cart-price')[0]
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace("VND","")) * 1000
    var quantity = quantityElement.value
    total = total + price * quantity
    document.getElementsByClassName('total-price')[0].innerText = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
  }
}