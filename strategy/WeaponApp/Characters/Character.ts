import WeaponBehavior from "../WeaponBehavior/WeaponBehavior";

export default class Character {
 protected weaponBehavior!: WeaponBehavior;
 private weapon!: WeaponBehavior;

 fight(): void {
  this.weapon.useWeapon();
 }

 setWeapon(wb: WeaponBehavior) {
  this.weapon = wb;
 }
}
