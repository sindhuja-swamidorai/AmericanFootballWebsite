"use strict";

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

  // Let the window's onload know there is a function called init
window.onload = init;    // Do not put () after init!
// This isn't calling init now -- it 
// saying call the init function when
// the window finishes loading

// The init function connect the button to the code that
// should run when the button is clicked

function init() {
  
  //Find the SELECT list
  let teamsList = document.getElementById("teams");
     
  let unselected = new Option("Select a team", "");
  teamsList.appendChild(unselected);

  let length = teams.length;

  for (let i = 0; i < length; i++) {
    let theOption = new Option(teams[i].name, teams[i].teamcode);
    teamsList.appendChild(theOption);
  }

  teamsList.onchange = onSelectBtnChange;

}


function onSelectBtnClick() {

  //Find the SELECT list
  let itemsList = document.getElementById("teams");
     
  let test = new Option("Check Check", "");
  itemsList.appendChild(test);

  console.log("Select On Click")  

}

function onSelectBtnChange() {
    
  let itemsList = document.getElementById("teams");
     
  let messageDiv = document.getElementById("messageDiv");

  let textMessage = "You selected " + teams[itemsList.selectedIndex-1].name + '('
                    + teams[itemsList.selectedIndex-1].teamcode +  ') who play in' + teams[itemsList.selectedIndex-1].locatedIn;

  messageDiv.innerHTML = textMessage;

  console.log("Select On Change")  

}

