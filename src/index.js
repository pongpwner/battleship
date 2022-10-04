import "./styles/styles.css";
import Ship from "./modules/ship";
let content = document.querySelector("#content");
let ship = Ship(3);
ship.hit();
console.log(ship);
