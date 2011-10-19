V={},V.Models={},V.Collections={},V.Views={},V.Controllers={};

V.Models.Study = Backbone.Model.extend({
})
V.Collections.Studies = Backbone.Collection.extend({
	model: V.Models.Sequence
})
V.Models.Patient = Backbone.Model.extend({
	parse:function(data){
		this.Studies=new V.Collections.Studies();
		this.Studies.add(data.Studies);
		delete data["Studies"];
		return data;
	}
})

$(function(){
	//views need a little help from DOM, hide in document.ready

	V.Views.Demographics = Backbone.View.extend({
		modelType:V.Models.Patient,
		render:function(){return $("<div id='demographics'/>")}
	})
	V.Views.Viewer = Backbone.View.extend({
		modelType:V.Models.Study,
		render:function(){return $("<div id='viewer'/>")}
	})
	V.Views.Studies = Backbone.View.extend({
		modelType:V.Collections.Studies,
		template: $('#sequence-template').template(),
		el:"aside",
		initialize: function () {
			_.bindAll(this, 'render');
		},
		render: function () {
			
			this.collection.each(function(study){
				var seriesHtml = $.tmpl(this.template, study.toJSON());
				$(this.el).append(seriesHtml);
			},this);
	  
		  return this.el;
		}
	})

	V.Views.App = Backbone.View.extend({
		modelType:V.Models.Patient,
		el:$("#app"),
		render:function(){
			var views=[
			new V.Views.Studies({collection:Patient.Studies}),
			new V.Views.Demographics({model:Patient}),
			new V.Views.Viewer({model:Patient})
			];
			
			this.el.empty();
			_.each(views,function(v){
				this.el.append(v.render());
			},this)
			return this.el;
		}
	})
});

function bootstrap(data){
	Patient=new V.Models.Patient();
	Patient.parse(data);
	
	App=new V.Views.App(Patient);
	App.render();
}