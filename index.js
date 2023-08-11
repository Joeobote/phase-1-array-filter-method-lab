//  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(taxi, driver){
    let match = taxi.filter(name=> name.toUpperCase() === driver.toUpperCase());
    return match
}

// console.log(findMatching(drivers, "Bobby"))


  function beforeEach(){
    drivers.length = 0;
    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');

}

 function fuzzyMatch(drivers, initial){
    let names = drivers.filter(name => name.startsWith(initial))
    return names
}
// console.log(fuzzyMatch(drivers, "Sa"))

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, name){
    let names = drivers.filter(object=>object.name=== name)
    return names
  }
  console.log(matchName(drivers, "Bobby"))
