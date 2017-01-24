var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
}
console.log("Original Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");


function moveRover() {
    var roverCommands = document.getElementById('userInput').value;
        for(i = 0; i < roverCommands.length; i ++) {
            if (roverCommands[i] == 'f' ) {
                myRover.position[0] ++;
            }
            else if (roverCommands[i] == 'b') {
                myRover.position[0] --;
            }
            else if (roverCommands[i] == 'r' ) {
                switch(myRover.direction) {
                  case 'N':
                    myRover.direction = 'E'
                    break;
                  case 'E':
                    myRover.direction = 'S'
                    break;
                  case 'S':
                    myRover.direction = 'W'
                    break;
                  case 'W':
                    myRover.direction = 'N'
                    break;
                };
                goForward(myRover);
            }
            else if (roverCommands[i] == 'l' ) {
                switch(myRover.direction) {
                  case 'N':
                    myRover.direction = 'W'
                    break;
                  case 'E':
                    myRover.direction = 'N'
                    break;
                  case 'S':
                    myRover.direction = 'E'
                    break;
                  case 'W':
                    myRover.direction = 'S'
                    break;
                };
                goForward(myRover);
            }
        }
        console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}
