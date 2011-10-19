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
		//delete data[Studies];
		return data;
	}
})
V.Views.Demographics = Backbone.Model.extend({
	modelType:V.Models.Patient,
})
V.Views.Viewer = Backbone.Model.extend({
	modelType:V.Models.Study,
})
V.Views.Studies = Backbone.Model.extend({
	modelType:V.Collections.Studies,
})

function bootstrap(data){
	console.log(data);
	Patient=new V.Models.Patient();
	Patient.parse(data);
	console.log(Patient);
}