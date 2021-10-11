function scuberGreetingForFeet(someNumber){
  // Write your code here!
  if (someNumber <= 400) {
    return "This one is on me!"
  } else if(someNumber> 2500) {
    return  "No can do."
  } else if(someNumber >2000) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  const response = destination === "NYC" ? "Ok, sounds good." : "No go.";
  return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer;
  switch (tip) {
    case 'generous':
      answer = "Thank you so much.";
      break;
    case 'not as generous':
      answer = "Thank you.";
      break;
    default:
      answer = 'Bye.'
  }
  return answer
}