controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        c c . . . . . . . . . . . . . . 
        c c c . . . . . . . . . . . . . 
        c c c c . . . . . . . . . . . . 
        c c c f . . . . . . . . . . . . 
        c c c f e . . . . . . . . . . . 
        c c e f e c . . . . . . . . . . 
        e e e c 2 c e e . . . . . . . . 
        e e 2 c 2 c 2 e e f c f c c c c 
        2 2 2 e 2 e 4 4 2 f 2 f b d d d 
        2 2 2 e 4 e 1 1 . . . . . . . . 
        2 2 2 f e e 1 . . . . . . . . . 
        2 4 4 f e 1 1 . . . . . . . . . 
        4 2 2 1 1 . . . . . . . . . . . 
        2 2 e 1 . . . . . . . . . . . . 
        e e 1 1 . . . . . . . . . . . . 
        1 1 1 . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf222222222222b9999c..
    .c22c222222222333399b2c.
    f22ccccccc22223333b2222c
    fffffcc222c222222222222f
    .....f2224442222222222f.
    ....f222444fc2222222ff.1
    ...c222444ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(5)
scene.setBackgroundColor(6)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . e f f f e e f f f . . 
        . . . . 2 2 2 e 2 2 e e e 2 f . 
        . . 2 c c c c c c 2 b 4 d d 2 e 
        . 2 2 2 2 2 2 2 2 b c 4 2 d d 2 
        . 2 2 2 2 2 2 2 b c c 4 2 2 2 2 
        . 2 2 2 2 2 2 2 b c c 4 2 2 2 2 
        . 2 4 2 2 2 2 2 b c c 4 2 2 2 2 
        . 2 4 2 2 2 2 2 b c c 4 2 2 2 2 
        . 2 2 4 4 4 4 2 2 b c 4 2 d d 2 
        . . 2 c c c c c c 2 b 4 d d 2 e 
        . . . . 2 2 2 e 2 2 e e e 2 f . 
        . . . . . e f f f e e f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
