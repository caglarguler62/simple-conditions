let grade = prompt('enter your score here') * 1

// if (grade >= 90 && grade <= 100){
//    alert('A');
// } else if (grade >= 70 && grade <= 89) {
//    alert('B')
// } else if (grade >= 60 && grade <= 69) {
//    alert('C')
// } else if (grade >= 50 && grade <= 59){
//     alert('D')
// } else if (grade >= 0 && grade <= 49) {
//   alert('F')
// } else {
//   alert('please put a number between 0 and 100')
// }

grade >= 90 && grade <= 100 ? alert('A') : grade >= 70 && grade <= 89 ? alert('B') : grade >= 60 && grade <= 69 ? alert('C') : grade >= 50 && grade <= 59 ?  alert('D') : grade >= 0 && grade <= 49 ? alert('F') : alert('please put a number between 0 and 100')

let season = prompt('What month you are in')
season = season.toUpperCase()

// switch (season){
//   case 'SEPTEMBER':
//     alert('FALL');
//     break;
//   case 'OCTOBER':
//     alert('FALL');
//     break;
//   case 'NOVEMBER':
//     alert('FALL');
//     break;
//   case 'DECEMBER':
//     alert('WINTER');
//     break;
//   case 'JANUARY':
//     alert('WINTER');
//     break;
//   case 'FEBRUARY':
//      alert('WINTER');
//      break;
//   case 'MARCH':
//      alert ('SPRING');
//      break;
//   case 'APRIL':
//     alert('SPRING');
//     break;   
//   case 'MAY':
//     alert('SPRING');
//     break;  
//   default:
//     alert('SUMMER');
//     break;
// }

switch (season) {
  case 'SEPTEMBER':
  case 'OCTOBER':
  case 'NOVEMBER':
    alert('FALL');
    break;
  case 'DECEMBER':
  case 'JANUARY':
  case 'FEBRUARY':
    alert('WINTER');
    break;
  case 'MARCH':
  case 'APRIL':
  case 'MAY':
    alert('SPRING');
    break;
  default:
    alert('SUMMER')
    break;
}

let hmd = prompt('please enter the month here to see how many days in that month').toUpperCase();

switch (hmd){
  case 'JANUARY':
  case 'MARCH':
  case 'MAY':
  case 'JULY':
  case 'AGUST':
  case 'OCTOBER':
  case 'DECEMBER':
    alert(`31 days in ${hmd}`);
    break;
  case 'APRIL':
  case 'JUN':
  case 'SEPTEMBER':
  case 'NOVEMBER':
     alert(`30 days in ${hmd}`);
     break;
  default:
    alert(`28 days in ${hmd}`);
    break;
}