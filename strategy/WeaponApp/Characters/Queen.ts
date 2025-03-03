import BowAndArrowBehavior from "../WeaponBehavior/BowAndArrowBehavior";
import Character from "./Character";

export default class Queen extends Character {
 constructor() {
  super();
  this.setWeapon(new BowAndArrowBehavior());
 }
}
