const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                //y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload() {
    this.load.image("pajaro", "./assets/bird.png")
}
function create() {
    this.pajaro = this.physics.add.image(100, 50, "pajaro");
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    /*
    Manipulacion de la imagen

    this.pajaro.setScale(1.5);
    this.pajaro.flipX = false;
    this.pajaro.setOrigin(0.5);

    Fisicas

    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.5);
    this.pajaro.setVelocity(50, 0);
    */
;
}
function update(time, delta) {
    if(this.right.isDown) {
        this.pajaro.x++;
    } else if (this.left.isDown){
        this.pajaro.x--;
    }
}