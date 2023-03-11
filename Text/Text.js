/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Text extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Text/costumes/costume1.svg", {
        x: 61.68993377685547,
        y: 15.981249999999989
      })
    ];

    this.sounds = [new Sound("pop", "./Text/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close Menu" },
        this.whenIReceiveCloseMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open Menu" },
        this.whenIReceiveOpenMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCloseMenu() {
    this.visible = false;
  }

  *whenIReceiveOpenMenu() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
