/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Upgrade1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Upgrade1/costumes/costume1.svg", {
        x: 73.5,
        y: 35.5
      }),
      new Costume("costume2", "./Upgrade1/costumes/costume2.svg", {
        x: 73.5,
        y: 35.5
      }),
      new Costume("costume3", "./Upgrade1/costumes/costume3.svg", {
        x: 73.5,
        y: 35.5
      }),
      new Costume("costume4", "./Upgrade1/costumes/costume4.svg", {
        x: 73.5,
        y: 35.5
      }),
      new Costume("costume5", "./Upgrade1/costumes/costume5.svg", {
        x: 73.5,
        y: 35.5
      }),
      new Costume("costume6", "./Upgrade1/costumes/costume6.svg", {
        x: 73.5,
        y: 35.5
      })
    ];

    this.sounds = [new Sound("pop", "./Upgrade1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars._, 100) > 0 ||
      this.toNumber(this.stage.vars._) === 100
    ) {
      this.stage.vars._ -= 100;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.costumeNumber++;
      yield* this.wait(0.03);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost -= 10;
        yield;
      }
      this.stage.vars.toppings++;
    }
    while (!(this.costumeNumber === 2)) {
      yield;
    }
    if (
      this.compare(this.stage.vars._, 500) > 0 ||
      this.toNumber(this.stage.vars._) === 500
    ) {
      this.stage.vars._ -= 500;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.costumeNumber++;
      yield* this.wait(0.03);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost -= 10;
        yield;
      }
    }
    while (!(this.costumeNumber === 3)) {
      yield;
    }
    if (
      this.compare(this.stage.vars._, 1000) > 0 ||
      this.toNumber(this.stage.vars._) === 1000
    ) {
      this.stage.vars._ -= 1000;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.costumeNumber++;
      yield* this.wait(0.03);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost -= 10;
        yield;
      }
    }
    while (!(this.costumeNumber === 4)) {
      yield;
    }
    if (
      this.compare(this.stage.vars._, 5000) > 0 ||
      this.toNumber(this.stage.vars._) === 5000
    ) {
      this.stage.vars._ -= 5000;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.costumeNumber++;
      yield* this.wait(0.03);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost -= 10;
        yield;
      }
    }
    while (!(this.costumeNumber === 5)) {
      yield;
    }
    if (
      this.compare(this.stage.vars._, 10000) > 0 ||
      this.toNumber(this.stage.vars._) === 10000
    ) {
      this.stage.vars._ -= 10000;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.costumeNumber++;
      yield* this.wait(0.03);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost -= 10;
        yield;
      }
      this.visible = false;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "costume1";
    this.effects.clear();
  }
}
