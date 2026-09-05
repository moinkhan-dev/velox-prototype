(function () {
  const grid = document.getElementById('order-grid');
  if (!grid || !Array.isArray(window.menuData)) return;

  let html = '';
  window.menuData.forEach(function (category) {
    html += '<h3 class="order-category-title">' + category.name + '</h3>';
    category.items.forEach(function (item) {
      const className = item.veg ? 'veg' : 'nonveg';
      const label = item.veg ? 'Veg' : 'Non-veg';
      html += '<div class="order-card" data-reveal data-category="' + className + '">' +
        '<div class="order-card-header"><span class="' + className + '" aria-label="' + label + '"></span>' +
        '<h3>' + item.name + '</h3></div><span class="order-price">₹' + item.price + '</span>' +
        '<button class="btn-add" data-name="' + item.name + '" data-price="' + item.price + '" data-veg="' + className + '">Add</button></div>';
    });
  });
  grid.innerHTML = html;
})();
