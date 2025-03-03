import KnifeBehavior from "../WeaponBehavior/KnifeBehavior";
import Character from "./Character";

export default class King extends Character {
 constructor() {
  super();
  this.setWeapon(new KnifeBehavior());
 }
}
