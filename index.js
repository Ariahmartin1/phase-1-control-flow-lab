function scuberGreetingForFeet(feetTraveled){
  let price
  if (feetTraveled <= 400) {
    price = 'This one is on me!'
  }
  else if (feetTraveled > 400 && feetTraveled <= 2000) {
    price = 'That will be twenty bucks.'
  }
  else if (feetTraveled > 2000 && feetTraveled <= 2500)
  price = 'I will gladly take your thirty bucks.'
  else {
    return 'No can do.'
  }
  return price
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
 switch ( tip){
    case "generous" :
      return "Thank you so much."
    case "not as generous" :
      return "Thank you."
    default :
      return "Bye."
 }
}