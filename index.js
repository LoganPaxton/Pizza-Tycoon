import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Pizza from "./Pizza/Pizza.js";
import BuyButton from "./BuyButton/BuyButton.js";
import Conveyor from "./Conveyor/Conveyor.js";
import Upgrade1 from "./Upgrade1/Upgrade1.js";
import _901827200 from "./_901827200/_901827200.js";
import Button5 from "./Button5/Button5.js";
import Text from "./Text/Text.js";
import SaveHolder from "./SaveHolder/SaveHolder.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Pizza: new Pizza({
    x: 205,
    y: 105,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  BuyButton: new BuyButton({
    x: 161,
    y: -128,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Conveyor: new Conveyor({
    x: -0.9999976476034647,
    y: 63.999996948242426,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Upgrade1: new Upgrade1({
    x: -109,
    y: -118,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  _901827200: new _901827200({
    x: 25,
    y: -122,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Button5: new Button5({
    x: 193,
    y: 131,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Text: new Text({
    x: -83,
    y: 6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  SaveHolder: new SaveHolder({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
