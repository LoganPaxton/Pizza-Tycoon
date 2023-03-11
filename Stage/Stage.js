/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.toppings = 1;
    this.vars.currentLetter = 24;
    this.vars.lastLetter = "Error not enough money!";
    this.vars.speed = 3;
    this.vars.toppings2 = 0;
    this.vars._ = 1;
    this.vars.WorldHigh = 10756;
    this.vars.codeDecoder = 4;
    this.vars.holder = 5;
    this.vars.code = [1, 2, 3, 4, 0];

    this.watchers.toppings = new Watcher({
      label: "Toppings",
      style: "normal",
      visible: false,
      value: () => this.vars.toppings,
      x: 245,
      y: 147
    });
    this.watchers._ = new Watcher({
      label: "$",
      style: "normal",
      visible: true,
      value: () => this.vars._,
      x: 243,
      y: 177
    });
    this.watchers.WorldHigh = new Watcher({
      label: "☁ World High",
      style: "large",
      visible: false,
      value: () => this.vars.WorldHigh,
      x: 467,
      y: 20
    });
  }
}
