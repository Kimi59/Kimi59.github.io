images = [
    "art/",
    "map.png",
    "player.png",
    "weakpartner.png",
    "bow.png",
    "arrow.png",
    "enemyarrow.png",
    "enemybow.png",
    "heart.png",
    "house.png",
    "stairs.png",
];

sond = [
    "sound/",
    "dead.wav",
    "hit.wav",
]
var player = {
    x: 400,
    y: 550,
    w: 23,
    h: 8,
    direction:0,
    speed:2,
    hp: 15, 
};

var border = {
    x: 400,
    y: 300,
    left: 50, 
    right: 850, 
    bottom:600,
    top:0,

};

var weakpartner = {
    x: 400,
    y: 580,
    w: 23,
    h: 8,
    hp:5,
    direction:0,
    speed:1,

};

var bow = {
    x:10,
    y:5,
    w:8,
    h:13,
    direction:1.57,
};

var scores = 0;
var changevaluex = 10;
var changevaluey = 5;
var gameState = 0; 
var dirmove = 0; 
var dead = false; 