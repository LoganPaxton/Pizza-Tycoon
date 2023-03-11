/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SaveHolder extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SaveHolder/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./SaveHolder/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenKeySpacePressed() {
    yield* this.askAndWait(
      "Loading or saving? (1 for loading and 2 for saving)"
    );
    this.stage.vars.codeDecoder = "";
    this.stage.vars.holder = 0;
    this.stage.vars.code = [];
    if (this.toNumber(this.answer) === 1) {
      yield* this.askAndWait("What's the code?");
      while (
        !(
          this.toNumber(
            this.letterOf(this.answer, this.stage.vars.holder - 1)
          ) === 0
        )
      ) {
        this.stage.vars.holder++;
        this.stage.vars.code.push(
          this.letterOf(this.answer, this.stage.vars.holder - 1)
        );
        yield;
      }
      for (let i = 0; i < this.stage.vars.code.length - 1; i++) {
        this.stage.vars.codeDecoder++;
        this.stage.vars._ =
          this.toString(this.itemOf(this.stage.vars.code, 0)) +
          (this.toString(this.itemOf(this.stage.vars.code, 1)) +
            (this.toString(this.itemOf(this.stage.vars.code, 2)) +
              this.toString(this.itemOf(this.stage.vars.code, 3))));
        yield;
      }
      this.stage.vars.toppings = this.letterOf(
        this.answer,
        this.toNumber(this.stage.vars.holder)
      );
    }
    if (this.toNumber(this.answer) === 2) {
      this.stage.vars.codeDecoder =
        this.toString(this.stage.vars._) +
        (" " + this.toString(this.stage.vars.toppings));
      yield* this.sayAndWait(
        "Your code is " + (this.toString(this.stage.vars.codeDecoder) + "!"),
        2
      );
    }
  }
}
