var Gorillas = Gorillas || {};

Gorillas.Building = function(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color || (
        '#' + Math.floor(Math.random() * 192).toString(16)
            + Math.floor(Math.random() * 192).toString(16)
            + Math.floor(Math.random() * 192).toString(16));
    
    return this;
};

Gorillas.Building.prototype = {
    destroy: function() {}
};

exports = Gorillas.Building;