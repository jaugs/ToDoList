 export {createMenu}
 import beer from './beer.jpg';
 import wine from './wine.jpg';
 import breakfast from './breakfast.jpg';
 import chicken from './chicken.JPG';
 import stew from './stew.jpg';
 import rooms from './rooms.jpg';
 import stables from './stables.jpg';

 function createItem(string, id) {
   let title = string;
   let item = document.createElement('div');
   item.setAttribute('id', id);
   item.setAttribute('class', 'item');
   item.innerText = title;
   return item;
}

function createTitle(string) {
   let titleText = string;
   let title = document.createElement('div');
   title.setAttribute('class', 'title');
   title.innerText = titleText;
   return title;
}

function createDescription(string) {
   let title = document.createElement('div');
   title.setAttribute('class', 'text');
   title.innerText = string;
   return title;
}

function createImage(string, id){
   let newImage = new Image();
   newImage.src = string;
   newImage.id = id;
   newImage.className = 'image';
   return newImage;
}

 function createMenu() {
   let content = document.getElementById('content');
   content.setAttribute('class', 'menuContent');

   let drinkTitle = createTitle('Beverages');
   content.appendChild(drinkTitle);

   let beerCard = createItem('Beer', 'beer')
   content.appendChild(beerCard);
   let beerImage = createImage(beer, 'beer');
   beerCard.appendChild(beerImage);
   let beerText = createDescription('Best beer west of the Misty Mountains, enchanted by the great Wizard Gandalf himself! Comes in pints or Hobbit sized mugs.');
   beerCard.appendChild(beerText);

   let wineCard = createItem('Wine', 'wine')
   content.appendChild(wineCard);
   let wineImage = createImage(wine, 'wine');
   wineCard.appendChild(wineImage);
   let wineText = createDescription('Imported white wine from the Old Winyards in the Southfarthing.');
   wineCard.appendChild(wineText);

   let foodTitle = createTitle('Food');
   content.appendChild(foodTitle);

   let breakfastCard = createItem('Full Breeland Breakfast', 'breakfast')
   content.appendChild(breakfastCard);
   let breakfastImage = createImage(breakfast, 'breakfast');
   breakfastCard.appendChild(breakfastImage);
   let breakfastText = createDescription('Toast, fried egg, tomatos, beans, sausage and nice crispy bacon.');
   breakfastCard.appendChild(breakfastText);

   let chickenCard = createItem('Roast Chicken Dinner', 'chicken')
   content.appendChild(chickenCard);
   let chickenImage = createImage(chicken, 'chicken');
   chickenCard.appendChild(chickenImage);
   let chickenText = createDescription('Hand-carved roast chicken, gravy drippings, golden mashed taters with mushy peas.');
   chickenCard.appendChild(chickenText);

   let stewCard = createItem('Beef and Tater Stew', 'stew')
   content.appendChild(stewCard);
   let stewImage = createImage(stew, 'stew');
   stewCard.appendChild(stewImage);
   let stewText = createDescription('Rich and hearty beef stew, with potatoes, carrots, peas and celery. Served with hunks of fresh baked bread.');
   stewCard.appendChild(stewText);

   let serviceTitle = createTitle('Services');
   content.appendChild(serviceTitle);

   let roomsCard = createItem('Accomodations', 'rooms')
   content.appendChild(roomsCard);
   let roomsImage = createImage(rooms, 'rooms');
   roomsCard.appendChild(roomsImage);
   let roomsText = createDescription('Big People sized and even some lower-level Hobbit sized rooms available, each with personal fireplace to drive out the cold.');
   roomsCard.appendChild(roomsText);

   let stablesCard = createItem('Stables', 'stables')
   content.appendChild(stablesCard);
   let stablesImage = createImage(stables, 'stables');
   stablesCard.appendChild(stablesImage);
   let stablesText = createDescription('If you require a stall, let the innkeep know. We take the greatest care of all beasts of burden.');
   stablesCard.appendChild(stablesText);
 }
