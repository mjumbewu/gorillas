var Gorillas = Gorillas || {};

Gorillas.main = function(el) {
    var scene = new Gorillas.Scene(el);
    return {
        scene: scene
    };
}

exports = Gorillas.main;