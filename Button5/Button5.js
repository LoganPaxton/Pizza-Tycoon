/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button5", "./Button5/costumes/button5.svg", { x: 72, y: 72 })
    ];

    this.sounds = [new Sound("pop", "./Button5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open Menu" },
        this.whenIReceiveOpenMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close Menu" },
        this.whenIReceiveCloseMenu
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Close Menu");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOpenMenu() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveCloseMenu() {
    this.stage.watchers.WorldHigh.visible = false;
  }
}
