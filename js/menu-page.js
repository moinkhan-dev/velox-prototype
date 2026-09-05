(function () {
  const menuPage = document.getElementById('menu-page');
  if (!menuPage || !Array.isArray(window.menuData)) return;

  let menuHTML = '<div class="menu-filter-bar">' +
    '<button class="filter-btn active" data-filter="all" aria-pressed="true">All</button>' +
    '<button class="filter-btn" data-filter="veg" aria-pressed="false">Veg</button>' +
    '<button class="filter-btn" data-filter="nonveg" aria-pressed="false">Non-Veg</button>' +
    '</div>';

  window.menuData.forEach(function (category) {
    menuHTML += '<section class="menu-section" data-reveal id="' + category.id + '">' +
      '<h2 class="menu-section-title">' + category.name + '</h2><div class="menu-grid">';

    category.items.forEach(function (item) {
      const className = item.veg ? 'veg' : 'nonveg';
      const label = item.veg ? 'Veg' : 'Non-veg';
      menuHTML += '<div class="menu-item" data-veg="' + className + '">' +
        '<span class="' + className + '" aria-label="' + label + '"></span>' +
        '<span class="menu-item-name">' + item.name + '</span>' +
        '<span class="menu-item-price">₹' + item.price + '</span></div>';
    });
    menuHTML += '</div></section>';
  });

  menuHTML += '<aside class="menu-notice"><p><strong>Order Timing:</strong> 20 to 30 minutes</p>' +
    '<p>Outside food not allowed. Orders cannot be cancelled once taken.</p>' +
    '<p><strong>Free Home Delivery:</strong> 7303390042 (Min. order ₹1000) &bull; Taxes as applicable</p></aside>';
  menuPage.innerHTML = menuHTML;

  document.querySelectorAll('.filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (filterButton) {
        filterButton.classList.remove('active');
        filterButton.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('.menu-item').forEach(function (item) {
        item.style.display = button.dataset.filter === 'all' || item.dataset.veg === button.dataset.filter ? '' : 'none';
      });
    });
  });
})();
