

document.getElementById('playerButton').addEventListener('click', function (event) {
    const player = event.target.innerText;
    const players = document.getElementById("orderdList");
    const playercount = players.childElementCount;
    
    
    if (player === 'SELECT') { 
        
        if (playercount < 5) {
            
            // const playername = event.target.parentelement.children[1].innerText;
            const playerad = document.createElement('li');
            playerad.innerText = player;
            players.appendChild(playerad);
            
            alert("Please select a player");
            return;

        } else {
            
            alert("You can only select up to 5 players");
            // playerButton.setAttribute('disabled');
            // playerButton.style.backgroundColor = '#ccc';
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

