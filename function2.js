function findAvenger(avengers, avengerName) {
    for (var index = 0; index < avengers.length; index++) {
      if (avengers[index].avengerName === avengerName) {
        return avengers[index];
      }
    }
  }
  
  var avengers = [{
    avengerName: 'ironMan',
    realName: 'Tony Stark'
  }, {
    avengerName: 'captainAmerica',
    realName: 'Steve Rogers'
  }, {
    avengerName: 'blackWidow',
    realName: 'Natasha Romanoff'
  }];
  const { name } = findAvenger(avengers, 'ironMan');
  const { realName } = findAvenger(avengers, 'ironMan');
  console.log(realName);