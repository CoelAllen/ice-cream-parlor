const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}, {
  name: 'Gummi Worms',
  image: 'https://batesnutfarm.biz/images/F143830139.jpg',
  price: 2,
  quantity: 0
}]

function addScoop(name) {
  console.log(iceCream[0].name)
  let scoop = iceCream.find(scoop => scoop.name == name)
  scoop.quantity++
  drawCart()
}

function addTopping(name) {
  let topping = toppings.find(topping => topping.name == name)
  topping.quantity++
  drawCart()
}

function addVessel(name) {
  let vessel = vessels.find(vessel => vessel.name == name)
  vessel.quantity++
  drawCart()
}

function removeScoop(name) {

  let scoop = iceCream.find(scoop => scoop.name == name)
  scoop.quantity--
  drawCart()
}

function removeTopping(name) {

  let topping = toppings.find(topping => topping.name == name)
  topping.quantity--
  drawCart()
}

function removeVessel(name) {

  let vessel = vessels.find(vessel => vessel.name == name)
  vessel.quantity--
  drawCart()
}

function drawCart() {
  let cart = document.getElementById('cart')
  let template = ''
  iceCream.forEach(scoop => {
    if (scoop.quantity > 0) {
      template += `
      <div class="d-flex justify-content-between cart-items">
            <p class="col-3">${scoop.name}<i class="mdi mdi-delete text-danger" onclick="removeScoop('${scoop.name}')"></i></p>
            <p class="col-3 text-center">$${scoop.price}</p>
            <p class="col-3 text-center">X${scoop.quantity}</p>
            <p class="col-3 text-end">$${scoop.quantity * scoop.price}</p>
          </div>`
    }
  })

  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      template += `
      <div class="d-flex justify-content-between cart-items">
            <p class="col-3">${vessel.name}<i class="mdi mdi-delete text-danger" onclick="removeVessel('${vessel.name}')"></i></p>
            <p class="col-3 text-center">$${vessel.price}</p>
            <p class="col-3 text-center">X${vessel.quantity}</p>
            <p class="col-3 text-end">$${vessel.quantity * vessel.price}</p>
          </div>
      `
    }
  })

  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      template += `
      <div class="d-flex justify-content-between cart-items">
            <p class="col-3">${topping.name}<i class="mdi mdi-delete text-danger" onclick="removeTopping('${topping.name}')"></i></p>
            <p class="col-3 text-center">$${topping.price}</p>
            <p class="col-3 text-center">X${topping.quantity}</p>
            <p class="col-3 text-end">$${topping.quantity * topping.price}</p>
          </div>
      `
    }
  })

  cart.innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total = 0
  iceCream.forEach(scoop => {
    total += scoop.price * scoop.quantity
  })
  toppings.forEach(topping => {
    total += topping.price * topping.quantity
  })
  vessels.forEach(vessel => {
    total += vessel.price * vessel.quantity
  })
  document.getElementById("total").innerText = total
}

function clearCart() {
  if (window.confirm("Ready to Checkout?")) {
    iceCream.forEach(iceCream => {
      iceCream.quantity = 0
    })
    toppings.forEach(topping => {
      topping.quantity = 0
    })
    vessels.forEach(vessel => {
      vessel.quantity = 0
    })
  }
  drawCart()
}