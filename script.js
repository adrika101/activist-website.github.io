/* .js files add interaction to your website */

/*Key Feature - Personalize it*/
var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

if (button) {
  button.addEventListener("click", displayStory);
}

function displayStory(){
  var name = document.getElementById("stemName").value;
  var story = document.getElementById("stemStory").value;
  displayName.innerHTML = "I want to share " + name + "'s story. " + story + " #GirlsLeadSTEM";
}

/*Fact Generator*/
var factList = [
  "By 2030, STEM jobs are projected to increase by 10.5% and earn more of non-STEM occupations.",
  
  "Women remain underrepresented in engineering (15%), computer (25%), and physical science (40%) occupations. ",

  "Women in engineering have increased by only 3%, from 12% in 1990 to 15% today.",

  "Women in computer occupations decreased by 7% from 1990 (32%) to today (25%).",

  "In the 2017-2018 academic year, women earned 22% of all bachelor’s degrees in engineering and 19% of all bachelor’s degrees in computer science."
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++; /*count = count + 1*/
  if (count == factList.length){
    count = 0;
  } /*conditional to set the array back to the beginning*/
}
