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
    if (have instanceof Have == false || want instanceof Want == false){
        console.error("One of the element is not of the right type")
        return undefined
    }
    if(have.items.length != want.items.length){
        console.error("The two arrays have different length")
        return undefined
    }
    msg = "```css\n--------------[HAVE]--------------{}--------------[WANT]--------------\n                                  {}                                  \n"
    for (let i=0; i<have.items.length; i++) {
        let s
        for (s=0; s<(34-(have.items[i].length)/2); s++){
            msg += " "
        }
        msg+=`[H]${have.items[i]}`
        for (let j=0; j<s; j++) {
            msg += " "
        }
        msg += "{}"
        for (s=0; s<(34-(want.items[i].length)/2); s++){
            msg += " "
        }
        msg+=`[W]${want.items[i]}`
        for (let j=0; j<s; j++) {
            msg += " "
        }
        msg+="\n"
        
    }
    msg +="```"
    return msg
}

let have = new Have(["120c", "absc"])
let want = new Want(["200c", "bnxcc"])
//let want = "djioqp"
console.log(createMessage(have, want))