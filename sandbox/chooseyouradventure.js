var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending": false
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "Describe the current setting",
        "ending": false
    },
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending": true
    }];

function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);

    //then we need to update the screen with the main description
    updateElement('title', instruction.title, instruction.ending);
    updateElement('description', instruction.description, instruction.ending);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);

    //check to see if they are endpoints

    //if endpoints then end the game

    //if not update those sections on the screen with the choiceText
    updateElement('choiceOne', choice1.choiceText, instruction.ending);
    updateElement('choiceTwo', choice2.choiceText, instruction.ending);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element
function getItem(instructions, id) {
    for (var i = 0; i < instructions.length; i++){
        if (id == instructions[i].id){
            return instructions[i];
        }
    }

}
//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.
function updateElement(name, item, end){
    document.getElementById(name).innerHTML = item;
    if (end == true){
        window.alert('Game Over, You FAILED!');
    }

}
//updateButton: sets the onclick event for a button with the id of the item it chooses
function updateButton(button, choice){
    document.getElementById(button).setAttribute('onclick', 'nextStep(' + choice +')');
}
//2. then create and use a function to initialize the game to step 1

//3. other needed functions
//restart: resets the game back to the beginning.

//happy ending: does whatever we want it to do when they end in a good place
//sad ending: does whatever we want it to do if they end at a bad place


