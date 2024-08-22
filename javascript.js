// prompt the user for flavors
const flavors = prompt("Please enter a list of comma separated flavors");

//Parse input into an array of froyo flavors
const inputFlavors = flavors.split(",")

//create object to track which flavors you have observed so far
const froyo = {};

//loop of array to determine if flavor exists and increments count
for (const key in inputFlavors){
    console.log('');
}
