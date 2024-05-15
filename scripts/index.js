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

let length = teams.length;
//for (let team in teams){    

for (let i = 0; i < length; i++) {
    let theOption = new Option(teams[i].name, teams[i].teamcode)
    teamsList.appendChild(theOption);
}

}
