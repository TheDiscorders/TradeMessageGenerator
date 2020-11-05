# TradeMessage

Create easily trade messages
---
## ⛓ Installation:

Clone the repo
Place trade.js in your project folder

---

## 👌 Usage:

```js
// Import the module
const trade = require("./trade")

// Define your items
have = new trade.Have(["Fennec BP (No Paint)", "STRIKER INTERSTELLAR (BP)"])
want = new trade.Want(["200 Credits", "Offer"])
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

Ready to copy/paste on Discord !