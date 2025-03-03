import WeaponBehavior from "./WeaponBehavior";

export default class SwordBehavior implements WeaponBehavior {
 useWeapon(): void {
  console.log("Swinging a sword");
 }
}
