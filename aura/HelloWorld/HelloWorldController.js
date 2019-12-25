({
	updateValue : function(component, event, helper) {
		console.log('Update value..!');
        var val = component.find("myInput").getElement().value;
     	component.set("v.greeting",val);

	}
})