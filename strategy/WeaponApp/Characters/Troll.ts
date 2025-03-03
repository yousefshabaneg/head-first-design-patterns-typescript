import AxeBehavior from "../WeaponBehavior/AxeBehavior";
import Character from "./Character";

export default class Troll extends Character {
 constructor() {
  super();
  this.setWeapon(new AxeBehavior());
 }
}
