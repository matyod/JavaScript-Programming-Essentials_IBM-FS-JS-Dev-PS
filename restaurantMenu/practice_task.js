/*
### Practice task
1. You can include prices for all the items in breakfastMenu, mainCourseMenu, and dessertMenu.
2. For this you can take include the prices as follows:
```js
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
```
3. Then, access it in the similar manner and you will see the output for the menu items along with prices as well.
*/

const breakfastMenu = ['Pancakes ($12)', 'Eggs Benedict ($22.99)', 'Oatmeal ($21.99)', 'Frittata ($15)'];
const mainCourseMenu = ['Steak ($35)', 'Pasta ($18)', 'Burger ($14)', 'Salmon ($25)'];
const dessertMenu = ['Cake ($8)', 'Ice Cream ($5)', 'Pudding ($7)', 'Fruit Salad ($6)'];

// STEP 2: Defining variables and map array method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => {
  return `<p>Item ${index + 1}: ${item}</p>`
}).join('');
// OR
/*
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
*/

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// STEP 3: Defining forEach array method and for loop iteration
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Iteration using for loop
let dessertItem = '';
dessertMenu.forEach((item, index) => {
  dessertItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('dessertMenuItems').innerHTML = dessertItem;