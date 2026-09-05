const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

function loadMenuData() {
  const source = fs.readFileSync('js/menu-data.js', 'utf8');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context);
  return context.window.menuData;
}

test('menu data has valid categories and items', () => {
  const menuData = loadMenuData();
  assert.equal(menuData.length, 18);
  assert.ok(menuData.every(category => category.id && category.name && category.items.length));
  assert.ok(menuData.flatMap(category => category.items).every(item => item.name && Number.isInteger(item.price) && typeof item.veg === 'boolean'));
});

test('menu category ids and item names are unique', () => {
  const menuData = loadMenuData();
  const categoryIds = menuData.map(category => category.id);
  const itemNames = menuData.flatMap(category => category.items.map(item => item.name));
  assert.equal(new Set(categoryIds).size, categoryIds.length);
  assert.equal(new Set(itemNames).size, itemNames.length);
});
