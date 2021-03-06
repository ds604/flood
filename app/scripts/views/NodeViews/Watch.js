define(['backbone', 'underscore', 'jquery', 'BaseNodeView'], function(Backbone, _, $, BaseNodeView) {

  return BaseNodeView.extend({

    template: _.template( $('#node-watch-template').html() ),

    initialize: function(args) {

      BaseNodeView.prototype.initialize.apply(this, arguments);
      this.model.on( 'change:lastValue', this.renderNode, this );

    }

  });

});
