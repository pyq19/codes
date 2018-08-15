// import Phaser from '../phaser.min.js'

var game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update })

function preload () {
    console.log('preload');
}
function create () {
    console.log('create');
}
function update () {
    console.log('update');
}
