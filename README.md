# TradeMessageGenerator

## What is this shit ?

This is a javascript module made for NodeJS that create messages used for item trading in video games.

You provide the list of items you have to trade and what you want to get and it will generate a custom string that you can use in any markdown editor (like Discord) to show your friends what you have to trade.

It creates the message as a codeblock in css to have a monospaced font and colored text.
## ⛓ Installation:

Clone the repository in your project folder with the command
`git clone https://github.com/TheDiscorders/TradeMessageGenerator.git`
Place trade.js in your project folder

## 👌 Usage:

```js
// Import the module
const trade = require("./TradeMessageGenerator/trade")

// Define your items
have = new trade.Have(["Fennec BP (No Paint)", "STRIKER INTERSTELLAR (BP)"])
want = new trade.Want(["200 Credits", "Offer"])
// Define the message that will be shown at the end of the message
message = "FIRM PRICES"

// Call the function
msg = trade.createMessage(have, want, message)

//Print result
console.log(msg)
```

That will return:

```css
----------------------[HAVE]----------------------{}----------------------[WANT]----------------------
                                                  {}                                                  
   [H] Fennec BP (No Paint)                       {}   [W] 200 Credits                       
   [H] STRIKER INTERSTELLAR (BP)                  {}   [W] Offer                                  
                                            FIRM PRICES
```
Note that the bottom message is not essential for the function to run
Ready to copy/paste on Discord !

## 💡Features

 - Customize items easily
 - The message size adjusts to the number of item provided 
 - Add a message at the end
 - Colored text with Markdown
 - Fully documented with JSDoc

## ⚙️ Documentation
To run the `createMessage` function, you need to provide :

 - An instance of the  `Have` object that takes in input an array of string
 - An instance of the `Want` object that takes in input an array of string
 - Optionally, a `String` that will be shown at the bottom of the message

## 🙏 Thanks
Thanks to Luzivog for the idea and the message structure

