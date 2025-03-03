import MallardDuck from "./Duck/MallardDuck";
import RubberDuck from "./Duck/RubberDuck";
import DecoyDuck from "./Duck/DecoyDuck";
import ModelDuck from "./Duck/ModelDuck";
import FlyRocketPowered from "./FlyBehavior/FlyRocketPowered";
import Duck from "./Duck/Duck";

const mallard = new MallardDuck();
const rubberDuckie = new RubberDuck();
const decoy = new DecoyDuck();

const model: Duck = new ModelDuck();

mallard.performQuack();
rubberDuckie.performQuack();
decoy.performQuack();

model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
