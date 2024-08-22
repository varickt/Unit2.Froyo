// prompt the user for flavors
const flavors = prompt("Please enter a list of comma separated flavors");

//Parse input into an array of froyo flavors
const inputFlavors = flavors.split(",").map(flavor => flavor.trim());

//create object to track which flavors you have observed so far
const froyo = {};

//looping through the array
for (let i = 0; i < inputFlavors.length; i++){
    const flavor = inputFlavors[i];

    // check if the flavor exists in the object
    if (froyo[flavor]){
         // if it does exist, increase value by 1
         froyo[flavor]++;
    } else {
        // if it doesn't exist, create the key and set value to 1
        froyo[flavor] = 1;
    }
}
   // return object
   console.log(froyo);


   
    

