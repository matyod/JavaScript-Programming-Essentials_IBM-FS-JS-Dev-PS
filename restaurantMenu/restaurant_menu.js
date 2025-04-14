const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

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