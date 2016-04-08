var Gorillas = Gorillas || {};

Gorillas.Scene = function(el) {
    this.$el = $(el);
    this.el = this.$el[0];
    this.width = parseInt(this.el.getAttribute('width'));
    this.height = parseInt(this.el.getAttribute('height'));
    return this;
};

Gorillas.Scene.prototype = {
    rebuild: function(numbuildings, minheight, maxheight) {
        var width = this.width;
        var height = this.height;
        
        this.destroyBuildings();
        for (var i = 0; i < numbuildings; ++i) {
            var buildingw = width / numbuildings;
            var buildingh = Math.random() * (maxheight - minheight) + minheight;
            this.buildings.push(new Gorillas.Building(buildingw, buildingh));
        }
        this.drawBuildings();
    },
    
    destroyBuildings: function() {
        if (this.buildings) {
            this.buildings.forEach(function(building) {
                building.destroy();
            });
        }
        this.buildings = [];
    },
    
    drawBuildings: function() {
        var canvas = this.$el[0];
        var ctx = canvas.getContext('2d');
        var startx = 0;
        var width = parseInt(canvas.getAttribute('width'));
        var height = parseInt(canvas.getAttribute('height'));
        
        ctx.save();
        ctx.scale(1, -1);
        ctx.translate(0, -height);
        
        ctx.clearRect(0, 0, width, height);
        
        this.buildings.forEach(function(building) {
            ctx.fillRect(startx, 0, building.width, building.height);
            startx += building.width;
        });
        ctx.restore();
    }
};

exports = Gorillas.Scene;