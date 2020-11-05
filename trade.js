/**
 * This module helps you to create trade messages for Rocket League in Discord servers using code blocks
 * 
 * Author : Firokat
 */

/**
 * @description A list of items you have
 * @param {Array} items The items you have
 */
class Have{
    constructor(items){
        this.items = items
    }
}

/**
 * @description A list of items you want
 * @param {Array} items The items you want
 */
class Want{
    constructor(items){
        this.items = items
    }
}

/**
 * @description A function to create the message
 * @param {Have} have The items you have 
 * @param {Want} want The items you want
 * @param {String} bottomText A text you can add in the list row
 */
function createMessage(have, want, bottomText){
    // Checks if all parameters are ok
    if (have instanceof Have == false || want instanceof Want == false){
        console.error("One of the element is not of the right type")
        return undefined
    }
    if(have.items.length != want.items.length){
        console.error("The two arrays have different length")
        return undefined
    }
    //Creates the message
    msg = "```css\n--------------[HAVE]--------------{}--------------[WANT]--------------\n                                  {}                                  \n"
    for (let i=0; i<have.items.length; i++) {
        msg+="     "
        msg+=`[H] ${have.items[i]}`
        for (s=0; s<29-(have.items[i].length+4); s++) {
            msg += " "
        }
        msg += "{}"
        msg+="     "
        msg+=`[W] ${want.items[i]}`
        for (s; s<29-(want.items[i].length)+4; s++) {
            msg += " "
        }
        msg+="\n"
        
    }
    //Adds a text in the bottom if you wish
    if (bottomText != undefined){
        msg+=`                          ${bottomText}\n`
    }
    msg +="```"
    return msg
}


module.exports = {
    Have,
    Want,
    createMessage
}