function createAvenger ({ avengerName = 'unknown', realName = 'unknown', height = 0, weight = 0, age = 0 } = {}) {
    return {
      avengerName,
      realName,
      height,
      weight,
      age
    }
  };
  
const ironMan = createAvenger();
console.log(ironMan)
  