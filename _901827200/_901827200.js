/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _901827200 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("901827-200", "./_901827200/costumes/901827-200.png", {
        x: 68,
        y: 68
      }),
      new Costume("costume1", "./_901827200/costumes/costume1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close Menu" },
        this.whenIReceiveCloseMenu
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(25, -122);
    this.costume = "901827-200";
    this.effects.clear();
  }

  *whenthisspriteclicked() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.costumeNumber++;
    this.goto(0, 0);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.broadcast("Open Menu");
    this.stage.watchers.WorldHigh.visible = true;
  }

  *whenIReceiveCloseMenu() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.costumeNumber++;
    this.goto(25, -122);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.stage.watchers.WorldHigh.visible = false;
  }
}
