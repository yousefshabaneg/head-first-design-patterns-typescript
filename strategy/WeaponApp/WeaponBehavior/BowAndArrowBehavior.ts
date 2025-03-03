import WeaponBehavior from "./WeaponBehavior";

export default class BowAndArrowBehavior implements WeaponBehavior {
 useWeapon(): void {
  console.log("Bow And Arrow Activated");
 }
}
