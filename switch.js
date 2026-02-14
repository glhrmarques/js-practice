// Switch can be used to replace many else if statements.
    // break; is used to stop the switch, ortherwise It will continue even if the statement is matched. 

const weekday = 3; 

switch(weekday) {
    
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log(`${weekday} is not a day`)
};