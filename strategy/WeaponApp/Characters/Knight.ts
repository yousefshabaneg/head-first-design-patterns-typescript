import SwordBehavior from "../WeaponBehavior/SwordBehavior";
import Character from "./Character";

export default class Knight extends Character {
 constructor() {
  super();
  this.setWeapon(new SwordBehavior());
 }
}
