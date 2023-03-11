/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BuyButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BuyButton/costumes/costume1.svg", {
        x: 63,
        y: 27.5
      })
    ];

    this.sounds = [new Sound("pop", "./BuyButton/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *say2(text) {
    this.stage.vars.currentLetter = 0;
    this.stage.vars.lastLetter = "";
    for (let i = 0; i < this.toString(text).length + 1; i++) {
      this.say(
        this.toString(this.stage.vars.lastLetter) +
          this.letterOf(text, this.stage.vars.currentLetter - 1)
      );
      this.stage.vars.lastLetter =
        this.toString(this.stage.vars.lastLetter) +
        this.letterOf(text, this.stage.vars.currentLetter - 1);
      this.stage.vars.currentLetter++;
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars._, 3) > 0 ||
      this.toNumber(this.stage.vars._) === 3
    ) {
      this.broadcast("Dispense Pizza");
      this.stage.vars._ -= 3;
    } else {
      yield* this.say2("Error not enough money!");
      yield* this.wait(2);
      yield* this.sayAndWait("", 0.0003);
    }
  }
}
