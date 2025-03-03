import King from "./Characters/King";
import Knight from "./Characters/Knight";
import Queen from "./Characters/Queen";
import AxeBehavior from "./WeaponBehavior/AxeBehavior";

const king = new King();
const knight = new Knight();
const queen = new Queen();

king.fight();

king.setWeapon(new AxeBehavior());
king.fight();

knight.fight();
queen.fight();
