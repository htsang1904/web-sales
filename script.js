const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
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
  console.log(cate)
}

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