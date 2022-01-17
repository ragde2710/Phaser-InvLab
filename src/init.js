const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.CANVAS,
    backgroundColor: '#392542',
    scene: [ SceneA, SceneB ]

}

new Phaser.Game(config);