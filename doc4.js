const avengers = {
    operation: 'Assemble',
    members: [
      { ironMan: 'Tony Stark' },
      { captainAmerica: 'Steve Rogers' },
      { blackWidow: 'Natasha Romanoff' }
    ]};
  
const { operation, members:[, cap] } = avengers;
//   operation = 'Assemble'
  // cap = { captainAmerica: 'Steve Rogers' }
  
  // Output cap:
console.log(cap)
