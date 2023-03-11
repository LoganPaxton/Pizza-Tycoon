/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Conveyor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Conveyor/costumes/costume1.svg", {
        x: 232.512335,
        y: 79.343765
      }),
      new Costume("costume2", "./Conveyor/costumes/costume2.svg", {
        x: 198.8234292992701,
        y: 99.71166253010615
      })
    ];

    this.sounds = [new Sound("pop", "./Conveyor/sounds/pop.wav")];

    this.triggers = [];
  }
}
