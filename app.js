var itemsArray = [];

//Constructor for the image objects
function PictureObject (name, filepath) {
  this.name = name;
  this.filePath = filepath;
  this.totalNumberOfTimesDisplayed = 0;
  this.totalNumberOfTimesClicked = 0;


  itemsArray.push(this.name);
};

//Methods

//Creating the image objects
var bagObject = new PictureObject ('bagpicture', 'img/bag.jpg');
var bananaObject = new PictureObject ('bananapicture', 'img/banana.jpg');
var bathroomObject = new PictureObject ('bathroom','img/bathroom.jpg');
var bootsObject = new PictureObject ('boots', 'img/boots.jpg');
var breakfastObject = new PictureObject ('breakfast', 'img/breakfast.jpg');


//Random Number for Images
function randomNumber () {
  return Math.floor(Math.random() * itemsArray.length)
}




//Clicks
function handleButtonClick (event) {
  event.target;
  console.log('worked');
}

var image1 = document.getElementById('left');
image1.addEventListener('click', handleButtonClick);
