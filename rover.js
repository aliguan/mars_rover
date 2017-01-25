var myRover = {
  position: [0,0],
  direction: 'N'
};

console.log("Original Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");


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

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
}

function grid() {
    if (myRover.position[0] > 10)
	{
		myRover.position[0] = 0;
	}
	if (myRover.position[0] < 0)
	{
		myRover.position[0] = 10;
	}
	if (myRover.position[1] > 10)
	{
		myRover.position[1] = 0;
	}
	if (myRover.position[1] < 0)
	{
		myRover.position[1] = 10;
	}
}

function moveRover() {
    var roverCommands = document.getElementById('userInput').value;
        for(i = 0; i < roverCommands.length; i ++) {
            if (roverCommands[i] == 'f') {
                goForward(myRover);
                grid();
            }
            else if (roverCommands[i] == 'b') {
                goBackward(myRover);
                grid();
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
                if (roverCommands[i + 1] == 'f' ) {
                    goForward(myRover);
                    grid();
                } else if (roverCommands[i + 1] == 'b' ) {
                    goBackward(myRover);
                    grid();
                }
                i++;
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
                if (roverCommands[i + 1] == 'f' ) {
                    goForward(myRover);
                    grid();
                } else if (roverCommands[i + 1] == 'b' ) {
                    goBackward(myRover);
                    grid();
                }
                i++;
            }
        }
        console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

// done
