

let slots = document.querySelectorAll("td")

const messageBox = document.getElementById("messageBox")

messageBox.textContent = "x's Turn!"

let player = "x"

function switchPlayer(player) {
    if (player == "x"){
        player = "o"
    } else {
        player = "x"
    }
    return player
}
console.log(slots)



slots.forEach(slot => {
    slot.addEventListener("click", evt => {
        if (slot.textContent == "") {
            slot.textContent = player
            
            win = checkForWin(slots, player)
            if (win == true) {
                messageBox.textContent = `${player} has won the game!`
            } else {
                player = switchPlayer(player)
            messageBox.textContent = `${player}'s turn!`
            }
            

        } else {
            alert("space is taken")
        }
    })
})

function removeClick(slots, player) {
    slots.forEach(slot => {
       slot.style.pointerEvents = "none"
    })
    
}
function checkForWin(slots, player) {
    let win = false
    console.log(slots[0].textContent, slots[1].textContent, slots[2].textContent)
    // if top row matches
    if (slots[0].textContent == slots[1].textContent && slots[1].textContent == slots[2].textContent && slots[0].textContent != "") {
        win = true
        removeClick(slots, player)
        
    }
   // if middle row matches
    else if (slots[3].textContent == slots[4].textContent && slots[4].textContent == slots[5].textContent && slots[5].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    }
    // if bottom matches
    else if (slots[6].textContent == slots[7].textContent && slots[7].textContent == slots[8].textContent && slots[8].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    }
    // if left column matches
    else if (slots[0].textContent == slots[3].textContent && slots[3].textContent == slots[6].textContent && slots[6].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    }
    // if middle column matches
    else if (slots[1].textContent == slots[4].textContent && slots[4].textContent == slots[7].textContent && slots[7].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    }
     // if right column matches
    else if (slots[2].textContent == slots[5].textContent && slots[5].textContent == slots[8].textContent && slots[8].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    }
    // if slash matches
    else if (slots[0].textContent == slots[4].textContent && slots[4].textContent == slots[8].textContent && slots[4].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    }
    // if backslash matches
    else if (slots[6].textContent == slots[4].textContent && slots[4].textContent == slots[2].textContent && slots[4].textContent != "") {
         // players wins
        win = true
        removeClick(slots, player)
    } 
    else {
        console.log(win)
    }
    return win

    // else keep playing
}



