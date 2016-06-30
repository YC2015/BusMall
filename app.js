var pictureObjectsArray = [];

//Constructor for the image objects
function PictureObject (name, filepath) {
  this.name = name;
  this.filePath = filepath;
  this.totalNumberOfTimesDisplayed = 0;
  this.totalNumberofTimesClicked = 0;
  pictureObjectsArray.push(this);
};

//Methods

//Creating the image objects
var bagObject = new PictureObject ('bagpicture', 'img/bag.jpg');
var bananaObject = new PictureObject ('bananapicture', 'img/banana.jpg');
var bathroomObject = new PictureObject ('bathroom','img/bathroom.jpg');
var bootsObject = new PictureObject ('boots','img/boots.jpg');
var breakfastObject = new PictureObject ('breakfast', 'img/breakfast.jpg');
var bubblegumObject = new PictureObject ('bubblegum', 'img/bubblegum.jpg');
var chairObject = new PictureObject ('chair', 'img/chair.jpg');
var cthulhuObject = new PictureObject ('cthulhu', 'img/cthulhu.jpg');
var dogduck = new PictureObject ('dog-duck', 'img/dog-duck.jpg');
var dragon = new PictureObject ('dragon', 'img/dragon.jpg');
var pen = new PictureObject ('pen','img/pen.jpg');
var petsweep = new PictureObject ('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new PictureObject ('scissors', 'img/scissors.jpg');
var shark = new PictureObject ('shark', 'img/shark.jpg');
var sweep = new PictureObject ('sweep', 'img/sweep.png');
var tauntuan = new PictureObject ('tauntaun', 'img/tauntaun.jpg');
var unicorn = new PictureObject ('unicorn', 'img/unicorn.jpg');
var usb = new PictureObject ('usb', 'img/usb.jpg');
var watercan = new PictureObject ('water-can', 'img/water-can.jpg');
var wineglass = new PictureObject ('wine-glass','img/wine-glass.jpg');



//create index with randomized numbers
function randomIndex (){
  var randomImage1 = Math.floor(Math.random() * pictureObjectsArray.length);
  var randomImage2 = Math.floor(Math.random() * pictureObjectsArray.length);
  var randomImage3 = Math.floor(Math.random() * pictureObjectsArray.length);

  while (randomImage1 === randomImage2){
    randomImage2 = Math.floor(Math.random() * pictureObjectsArray.length);
  }

  while (randomImage3 === randomImage2 || randomImage3 === randomImage1){
    randomImage3 = Math.floor(Math.random() * pictureObjectsArray.length);
  }

  return [randomImage1, randomImage2, randomImage3];
};

//display images
function randomObjects() {
  var index = randomIndex(pictureObjectsArray);
  var image1 = pictureObjectsArray[index[0]];
  var image2 = pictureObjectsArray[index[1]];
  var image3 = pictureObjectsArray[index[2]];
  return [image1, image2, image3];
}

function displayPictures() {
  var objectValues = randomObjects();
  var imagedisplay1 = document.getElementById('left');
  imagedisplay1.src = objectValues[0].filePath;
  imagedisplay1.addEventListener('click', handleButtonClick);
  var imagedisplay2 = document.getElementById('middle');
  imagedisplay2.src = objectValues[1].filePath;
  imagedisplay2.addEventListener('click', handleButtonClick);
  var imagedisplay3 = document.getElementById('right');
  imagedisplay3.src = objectValues[2].filePath;
  imagedisplay3.addEventListener('click', 'handleButtonClick');
}
displayPictures();


//Clicks - not completed (not sure how to target and track the clicks on images; assuming it is through event objects? Should I be making this into a form to get the page to refresh?)
function handleButtonClick (event) {
  event.target;
  console.log(event);
  console.log('worked');
}

handleButtonClick();

//Create ChartJS

/*chart = function(){
var ctx =  doucment.getElementByID('canvas').getContext ('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels:[incorporate pictureObjectsArray.name for photos?]
    datasets: [{
      label: '# of Votes',
      data:[?],
      backgroundColor:[
      'rgba(255, 99, 132, 0.2)' X20
    ],
    borderColor: [
      'rgba(255, 99, 132, 0.2)' X20
    ],
    borderWidth:1
  }]
},
options:{
  scales:{
    yAxes:[{
      ticks: {
        beginAtZero:true
        }
      }]
    }
  }
});

}*/
