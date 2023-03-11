/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pizza extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Pizza/costumes/1.svg", { x: 25, y: 25 }),
      new Costume("2", "./Pizza/costumes/2.svg", { x: 25, y: 25 }),
      new Costume("3", "./Pizza/costumes/3.svg", { x: 25, y: 25 }),
      new Costume("4", "./Pizza/costumes/4.svg", { x: 25, y: 25 }),
      new Costume("5", "./Pizza/costumes/5.svg", { x: 25, y: 25 }),
      new Costume("6", "./Pizza/costumes/6.svg", {
        x: 28.227002967359056,
        y: 27.3367952522255
      })
    ];

    this.sounds = [new Sound("pop", "./Pizza/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dispense Pizza" },
        this.whenIReceiveDispensePizza
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *startAsClone() {
    this.visible = true;
    if (this.toNumber(this.stage.vars.toppings2) === 0) {
      this.goto(148, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed), -149, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, -151, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed), 150, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, 150, -9);
      this.stage.vars._ += 3.5;
      this.deleteThisClone();
    }
    if (this.toNumber(this.stage.vars.toppings2) === 1) {
      this.goto(148, 121);
      while (!this.touching(Color.rgb(255, 102, 102))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 2;
      yield* this.glide(this.toNumber(this.stage.vars.speed), -149, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, -151, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed), 150, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, 150, -9);
      this.stage.vars._ += 2;
      this.deleteThisClone();
    }
    if (this.toNumber(this.stage.vars.toppings2) === 2) {
      this.goto(148, 121);
      while (!this.touching(Color.rgb(228, 196, 91))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 3;
      yield* this.glide(this.toNumber(this.stage.vars.speed), -149, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, -151, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed), 150, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, 150, -9);
      this.stage.vars._ += 3;
      this.deleteThisClone();
    }
    if (this.toNumber(this.stage.vars.toppings2) === 3) {
      this.costume = 2;
      this.goto(148, 121);
      while (!this.touching(Color.rgb(228, 196, 91))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 3;
      while (!this.touching(Color.rgb(255, 0, 0))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 4;
      yield* this.glide(this.toNumber(this.stage.vars.speed), -149, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, -151, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed), 150, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, 150, -9);
      this.stage.vars._ += 5;
      this.deleteThisClone();
    }
    if (this.toNumber(this.stage.vars.toppings2) === 4) {
      this.goto(148, 121);
      while (!this.touching(Color.rgb(228, 196, 91))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 3;
      while (!this.touching(Color.rgb(255, 0, 0))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 4;
      while (!this.touching(Color.rgb(0, 0, 0))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 5;
      yield* this.glide(this.toNumber(this.stage.vars.speed), -149, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, -151, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed), 150, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, 150, -9);
      this.stage.vars._ += 7;
      this.deleteThisClone();
    }
    if (this.toNumber(this.stage.vars.toppings2) === 5) {
      this.goto(148, 121);
      while (!this.touching(Color.rgb(228, 196, 91))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 3;
      while (!this.touching(Color.rgb(255, 0, 0))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 4;
      while (!this.touching(Color.rgb(0, 0, 0))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 5;
      while (!this.touching(Color.rgb(239, 239, 239))) {
        this.x += 0 - this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.costume = 6;
      yield* this.glide(this.toNumber(this.stage.vars.speed), -149, 121);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, -151, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed), 150, 11);
      yield* this.glide(this.toNumber(this.stage.vars.speed) / 3, 150, -9);
      this.stage.vars._ += 10;
      this.deleteThisClone();
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(205, 105);
    this.stage.vars._ = 3;
    this.stage.vars.toppings = 1;
    while (true) {
      if (this.toNumber(this.stage.vars.toppings) === 1) {
        this.costume = 1;
      }
      if (this.toNumber(this.stage.vars.toppings) === 2) {
        this.costume = 2;
      }
      if (this.toNumber(this.stage.vars.toppings) === 3) {
        this.costume = 3;
      }
      if (this.toNumber(this.stage.vars.toppings) === 4) {
        this.costume = 4;
      }
      yield;
    }
  }

  *whenIReceiveDispensePizza() {
    this.createClone();
  }

  *whenGreenFlagClicked2() {
    if (/* no username */ "" === "LoGaNO_o") {
      return;
    } else {
      while (true) {
        if (this.compare(this.stage.vars._, this.stage.vars.WorldHigh) > 0) {
          this.stage.vars.WorldHigh = this.stage.vars._;
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.watchers.WorldHigh.visible = false;
    this.stage.watchers.toppings.visible = false;
  }

  *whenGreenFlagClicked4() {
    if (this.costumeNumber === 6) {
      null;
    } else {
      null;
    }
  }
}
