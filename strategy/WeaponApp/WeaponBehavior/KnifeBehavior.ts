import WeaponBehavior from "./WeaponBehavior";

export default class KnifeBehavior implements WeaponBehavior {
 useWeapon(): void {
  console.log("Cutting with a knife");
 }
}
