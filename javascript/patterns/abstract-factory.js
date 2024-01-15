class AbstractChair {
  create(){}
}
class AbstractTable {
  create(){}
}

class ChairA extends AbstractChair {
  create(){
    return 'modern chair'
  }
}
class ChairB extends AbstractChair {
  create(){
    return 'victorian chair'
  }
}
class TableA extends AbstractTable {
  create(){
    return 'modern table'
  }
}
class TableB extends AbstractTable {
  create(){
    return 'victorian table'
  }
}

class AbstractFurnitureFactory {
  createTable(){}
  createChair(){}
}

class ModernFurnitureFactory extends AbstractFurnitureFactory {
  createTable(){
    return new TableA()
  }
  createChair(){
    return new ChairA()
  }
}

class VictorianFurnitureFactory extends AbstractFurnitureFactory {
  createTable(){
    return new TableB()
  }
  createChair(){
    return new ChairB()
  }
}

// usage

const modernFurniture = new ModernFurnitureFactory()
const victorianFurniture = new VictorianFurnitureFactory()

function getFullSet(furniture){
  const table = furniture.createTable()
  const chair = furniture.createChair()

  return {
    table: table.create(),
    chair: chair.create()
  }
}

console.log('pass modern furniture')
console.log(getFullSet(modernFurniture))
console.log("or pass any other furniture as it implements the same interface")
console.log(getFullSet(victorianFurniture))




