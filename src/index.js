import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    pack: {
      files: [
        {
          type: 'scenePlugin',
          key: 'SpinePlugin',
          url: 'plugins/SpinePlugin.js',
          sceneKey: 'spine',
        },
      ],
    },
  },
};
/* eslint-disable no-unused-vars */
const game = new Phaser.Game(config);
function preload() {
  this.load.image('logo', 'assets/sprites/phaser.png');
  this.load.setPath('assets/spine/3.8/alien');
  this.load.spine('boy', 'alien-pro.json', 'alien-pro.atlas', false);
}
function create() {
  this.add.image(0, 0, 'logo').setOrigin(0);

  let base1 = this.add.container();
  let obj = this.add.spine(120, 500, 'boy', 'run', true).setScale(0.5);

  base1.add(obj);

  let base2 = this.add.container();
  obj = this.add.spine(600, 500, 'boy', 'hit', true).setScale(0.5);

  base2.add(obj);

  let base3 = this.add.container();
  obj = this.add.spine(120, 250, 'boy', 'death', true).setScale(0.5);

  base3.add(obj);

  let base4 = this.add.container();
  obj = this.add.spine(600, 250, 'boy', 'jump', true).setScale(0.5);

  base4.add(obj);
  // for (var i = 0; i < 32; i++) {

  // }
  // let container = this.add.container();
  // let container = this.add.spineContainer();

  // let boy1 = this.add.spine(120, 400, 'boy');
  // let boy2 = this.add.spine(400, 400, 'boy', 'run', true).setScale(0.5);

  // container.add([boy1, boy2]);
  // container.add(boy2);

  // boy1.visible = true;
  // boy2.visible = false;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
