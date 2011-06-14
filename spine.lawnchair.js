// Lawnchair module for Spine.js
// http://github.com/bryanchow/spine-lawnchair/
// http://westcoastlogic.com/lawnchair/
// http://maccman.github.com/spine/

(function(Spine, $){

    Spine.Model.Lawnchair = {

        extended: function() {
            this.sync(this.proxy(this.saveLawnchair));
            this.fetch(this.proxy(this.loadLawnchair));
        },

        saveLawnchair: function() {
            var that = this;
            var lawnchair = new Lawnchair({name: this.name}, function() {
                this.save({
                    key: that.name,
                    data: that
                });
            });
        },

        loadLawnchair: function() {
            var that = this;
            var lawnchair = new Lawnchair({name: this.name}, function() {
                this.get(this.name, function(record) {
                    if (record) {
                        that.refresh(record.data);
                    }
                });
            });
        }

    };

})(Spine, Spine.$);
