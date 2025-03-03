import WeaponBehavior from "./WeaponBehavior";

export default class AxeBehavior implements WeaponBehavior {
 useWeapon(): void {
  console.log("Chopping with an axe");
 }
}
