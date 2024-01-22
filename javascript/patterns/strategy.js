class AbstractStrategy {
  buildStrategyMethod(){}
}


class Strategy extends AbstractStrategy {
  strategy
  setStrategy(strategy){
    if(strategy instanceof AbstractStrategy){
      this.strategy = strategy
      return
    }
    throw Error("Strategy is not an instance of AbstractStrategy")
  }

  executeBuildStrategyMethod(){
    this.strategy.buildStrategyMethod()
  }
}

class FirstStrategy extends AbstractStrategy {
  buildStrategyMethod(){
    console.log("Frist strategy method")
  }
}

class SecondStrategy extends AbstractStrategy {
  buildStrategyMethod(){
    console.log("Second strategy method")
  }
}

// use

const strategy = new Strategy()
const firstStrategy = new FirstStrategy()

strategy.setStrategy(firstStrategy)
strategy.executeBuildStrategyMethod()

const secondStrategy = new SecondStrategy()

strategy.setStrategy(secondStrategy)
strategy.executeBuildStrategyMethod()