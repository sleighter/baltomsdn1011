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
		template:$('#demographics-template').template(),
		initialize: function () {
			_.bindAll(this, 'render');
		},
		render:function(){
			var html = $.tmpl(this.template, this.model.toJSON());
			$(this.el).append(html);
			
			return this.el;
		}
	})
	V.Views.Viewer = Backbone.View.extend({
		modelType:V.Models.Study,
		template:$('#viewer-template').template(),
		initialize: function () {
			_.bindAll(this, 'render');
		},
		render:function(){
			console.log(this.model.toJSON(),this.model);
			var html = $.tmpl(this.template, this.model.toJSON());
			$(this.el).append(html);
			
			return this.el;
		}
	})
	V.Views.Studies = Backbone.View.extend({
		modelType:V.Collections.Studies,
		template: $('#sequence-template').template(),
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
				var newel=$(v.render());
				console.log(newel);
				this.el.append(newel);
				console.log('added');
			},this)
			return this.el;
		}
	})
});

function bootstrap(data){
	Patient=new V.Models.Patient();
	Patient.set(Patient.parse(data));
	
	App=new V.Views.App(Patient);
	App.render();
}