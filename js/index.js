

document.getElementById('playerButton').addEventListener('click', function (event) {
    const player = event.target.innerText;
    const players = document.getElementById("orderdList");
    const playercount = players.childElementCount;
    
    
    
    if (player === 'SELECT') { 
        const playername = event.target.parentElement.children[1].innerText;    
        const listItems = players.getElementsByTagName('li');
                
        // Loop through the NodeList object.
        for (let i = 0; i <= listItems.length - 1; i++) {
            let element = listItems[i];
            if (element.innerText === playername) {
                alert('This player already selected');
                return;
            }
        }

        if (playercount < 5) {

            const playerad = document.createElement('li');
            playerad.innerText = playername;
            players.appendChild(playerad);
            return;

        } else {
            
            alert("You can only select up to 5 players");
            return;
        }      
    }      
    
 });



// Calculation
document.getElementById("calculate").addEventListener("click", function () { 
    const players = document.getElementById("orderdList").childElementCount;
    const inputValue = getElementValueById("perPlayer", "Per Player");
    const expenses = document.getElementById("playerExpenses");
    const expensesInt = parseInt(expenses.innerText);
    if(!isNaN(inputValue)) {
        expenses.innerText = inputValue * players;
    }
});


// Calculation Total Expenses

document.getElementById("calculateTotal").addEventListener("click", function () { 
    const managerValue = getElementValueById("manager", "Manager");
    const coachValue = getElementValueById("coach", "Coach");
    
    const expenses = document.getElementById("playerExpenses");
    const expensesInt = parseInt(expenses.innerText);
    const total = document.getElementById("total");
    const totalfinal = (managerValue + coachValue + expensesInt);  

    if  (!isNaN(managerValue) && !isNaN(coachValue) && !isNaN(expensesInt)) {
        total.innerText = totalfinal;
    }    
});

