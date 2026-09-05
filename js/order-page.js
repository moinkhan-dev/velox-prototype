(function () {
  const orderGrid = document.getElementById('order-grid');
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const checkoutButton = document.getElementById('checkout-btn');
  const paymentSection = document.getElementById('payment-section');
  const orderLayout = document.querySelector('.order-layout');
  const orderNotice = document.querySelector('.order-notice');
  const placeOrderButton = document.getElementById('place-order-btn');
  const backButton = document.getElementById('back-to-cart-btn');
  const branchSelector = document.getElementById('branch-selector');
  const paymentReference = document.getElementById('payment-reference');
  const paymentConfirmation = document.getElementById('payment-confirmation');
  let branchInfo = document.getElementById('branch-info');

  const branches = {
    daryaganj: { name: 'Daryaganj (Flagship)', phone: '7303390043', whatsapp: '917303390043', upi: 'veloxrestro@upi' },
    vijaypark: { name: 'Vijay Park', phone: '7303390042', whatsapp: '917303390042', upi: 'veloxrestro@upi' },
    faridabad: { name: 'Faridabad', phone: '9654515131', whatsapp: '919654515131', upi: 'veloxrestro@upi' }
  };

  let cart = [];

  if (!branchInfo) {
    branchInfo = document.createElement('div');
    branchInfo.id = 'branch-info';
    branchInfo.innerHTML = '<p><strong>Branch:</strong> <span></span></p><p><strong>Phone:</strong> <span></span></p>';
    document.querySelector('.cart-header').appendChild(branchInfo);
  }
  if (branchSelector) branchSelector.style.display = 'block';

  function selectedBranch() {
    const radio = document.querySelector('input[name="branch"]:checked');
    return radio ? branches[radio.value] : null;
  }

  function orderType() {
    const radio = document.querySelector('input[name="order-type"]:checked');
    return radio ? radio.value : 'delivery';
  }

  function deliveryFee(subtotal) {
    return orderType() === 'delivery' && subtotal < 1000 ? 100 : 0;
  }

  function validateOrder() {
    if (!selectedBranch()) {
      alert('Please select a branch before proceeding.');
      return false;
    }
    if (orderType() === 'delivery') {
      const name = document.getElementById('del-name').value.trim();
      const phone = document.getElementById('del-phone').value.trim();
      const address = document.getElementById('del-address').value.trim();
      if (!name || !phone || !address) {
        alert('Please fill in your name, phone, and delivery address.');
        return false;
      }
      if (!/^[+\d][\d\s-]{7,14}$/.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
      }
    }
    return cart.length > 0;
  }

  function updateBranchInfo() {
    const branch = selectedBranch();
    if (!branchInfo || !branch) return;
    const values = branchInfo.querySelectorAll('p span');
    if (values[0]) values[0].textContent = branch.name;
    if (values[1]) values[1].textContent = branch.phone;
  }

  function renderCart() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const fee = deliveryFee(subtotal);
    const total = subtotal + fee;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    checkoutButton.disabled = cart.length === 0;

    if (!cart.length) {
      cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Add items from the menu.</p>';
      document.querySelector('.cart-total').innerHTML = '<span>Total</span><span class="total-amount" id="cart-total">₹0</span>';
      return;
    }

    cartItems.innerHTML = cart.map(function (item) {
      return '<div class="cart-item"><div class="cart-item-info"><span class="' + item.veg + '"></span>' +
        '<span class="cart-item-name">' + item.name + '</span></div><div class="cart-item-controls">' +
        '<button class="cart-qty-btn" data-action="minus" data-name="' + item.name + '">-</button>' +
        '<span class="cart-qty">' + item.qty + '</span>' +
        '<button class="cart-qty-btn" data-action="plus" data-name="' + item.name + '">+</button>' +
        '<span class="cart-item-price">₹' + item.price * item.qty + '</span></div></div>';
    }).join('');

    document.querySelector('.cart-total').innerHTML = '<div style="display:flex;flex-direction:column;gap:4px;width:100%">' +
      '<div style="display:flex;justify-content:space-between"><span>Subtotal</span><span>₹' + subtotal + '</span></div>' +
      (fee ? '<div style="display:flex;justify-content:space-between;font-size:.8rem"><span>Delivery Fee</span><span>₹' + fee + '</span></div>' : '') +
      '<hr style="border:none;border-top:.5px solid rgba(222,187,124,.3);margin:4px 0">' +
      '<div style="display:flex;justify-content:space-between;font-weight:700"><span>Total</span><span>₹' + total + '</span></div></div>';
  }

  function updateTiming() {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const open = 12 * 60;
    const close = 23 * 60 + 30;
    const banner = document.getElementById('order-timing-banner');
    const openNow = minutes >= open && minutes <= close;
    banner.innerHTML = openNow ? '<div class="timing-open"><p>We\'re open! Orders accepted until <strong>11:30 PM</strong> · Delivery within 20–30 min.</p></div>' :
      '<div class="timing-closed"><p>We\'re closed right now. Ordering is available from <strong>12:00 PM to 11:30 PM</strong>.</p></div>';
    document.querySelectorAll('.btn-add, #checkout-btn').forEach(function (button) {
      button.disabled = !openNow;
    });
    placeOrderButton.disabled = !openNow || !paymentReference.value.trim() || !paymentConfirmation.checked;
  }

  document.querySelectorAll('.filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (item) {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('.order-card').forEach(function (card) {
        card.style.display = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter ? 'flex' : 'none';
      });
    });
  });

  orderGrid.addEventListener('click', function (event) {
    const button = event.target.closest('.btn-add');
    if (!button) return;
    const existing = cart.find(item => item.name === button.dataset.name);
    if (existing) existing.qty += 1;
    else cart.push({ name: button.dataset.name, price: Number(button.dataset.price), veg: button.dataset.veg, qty: 1 });
    renderCart();
  });

  cartItems.addEventListener('click', function (event) {
    const button = event.target.closest('.cart-qty-btn');
    if (!button) return;
    const item = cart.find(entry => entry.name === button.dataset.name);
    if (!item) return;
    item.qty += button.dataset.action === 'plus' ? 1 : -1;
    cart = cart.filter(entry => entry.qty > 0);
    renderCart();
  });

  document.querySelectorAll('input[name="order-type"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      document.getElementById('delivery-address').style.display = orderType() === 'delivery' ? 'block' : 'none';
      renderCart();
    });
  });

  document.querySelectorAll('input[name="branch"]').forEach(function (radio) {
    radio.addEventListener('change', updateBranchInfo);
  });

  checkoutButton.addEventListener('click', function () {
    if (!validateOrder()) return;
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + deliveryFee(subtotal);
    const branch = selectedBranch();
    document.getElementById('payment-summary').innerHTML = '<p><strong>Order:</strong> ' + orderType() + '</p>' +
      '<p><strong>Branch:</strong> ' + branch.name + '</p><p><strong>Total:</strong> ₹' + total + '</p>';
    document.getElementById('upi-pay-link').href = 'upi://pay?pa=' + encodeURIComponent(branch.upi) + '&pn=' + encodeURIComponent('Velox Restro & Cafe') + '&am=' + total + '&cu=INR';
    orderLayout.style.display = 'none';
    orderNotice.style.display = 'none';
    paymentSection.style.display = 'block';
  });

  backButton.addEventListener('click', function () {
    orderLayout.style.display = 'grid';
    orderNotice.style.display = 'block';
    paymentSection.style.display = 'none';
  });

  placeOrderButton.addEventListener('click', function () {
    if (!validateOrder()) return;
    if (!paymentReference.value.trim() || !paymentConfirmation.checked) {
      alert('Please complete the UPI payment, enter the transaction reference, and confirm it before sending the order.');
      return;
    }
    const branch = selectedBranch();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const fee = deliveryFee(subtotal);
    const total = subtotal + fee;
    let message = 'New Order:\n---\nType: ' + orderType() + '\nPayment: Online (UPI)\nUPI Reference: ' + paymentReference.value.trim() + '\nBranch: ' + branch.name + '\nPhone: ' + branch.phone;
    if (orderType() === 'delivery') message += '\nDelivery To:\nName: ' + document.getElementById('del-name').value.trim() + '\nPhone: ' + document.getElementById('del-phone').value.trim() + '\nAddress: ' + document.getElementById('del-address').value.trim();
    message += '\n---\n' + cart.map(item => item.name + ' x' + item.qty + ' = ₹' + item.price * item.qty).join('\n') + '\n---\nSubtotal: ₹' + subtotal + (fee ? '\nDelivery Fee: ₹' + fee : '') + '\nTotal: ₹' + total;
    window.open('https://wa.me/' + branch.whatsapp + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
  });

  const firstBranch = document.querySelector('input[name="branch"]');
  if (firstBranch) firstBranch.checked = true;
  document.getElementById('delivery-address').style.display = 'block';
  updateBranchInfo();
  renderCart();
  updateTiming();
  [paymentReference, paymentConfirmation].forEach(function (input) {
    input.addEventListener('input', updateTiming);
    input.addEventListener('change', updateTiming);
  });
  window.setInterval(updateTiming, 60000);
})();
