const populatedFlavors = (webInput) => {
    const flavors = {};
   
    for (let i = 0; i <webInput.length; i++) {
        let flavor = webInput[i].replace(/\s/g, '');

        if (Object.keys(flavors).includes(flavor)){
            flavors[flavor] = flavors[flavor] + 1;
        } else {
            flavors[flavor] = 1;
        }
    }
    return flavors;
}

const userInputString = prompt(
    "please enter the FroYo flavors you would like separated by commas.",
    "strawberry, Lime, chocolate, strawberry, vanilla, vanilla, vanilla, lime, lime, lime"
);

// Splir the sting of flavors into an array of flavors
const stringArray = userInputString.split(",");

//log the function and pass the array
console.log(populatedFlavors(stringArray));