var app = {

	initialize: function(){
		
		app.width = document.width
		app.height = document.height

		app.colors = ["#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47","#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47"];


		app.stage = new Kinetic.Stage({
			container: "main_container",
			width: app.width,
			height: app.height
		})
		app.layer = new Kinetic.Layer();

		app.make.circles2(app.width/2, 20)
		app.make.squares(app.width, app.height, 20)
		app.make.circles3(app.width/2, 20)
		app.make.circles(app.width/2, 20)
	},

	make: {
		circles: function(radius, step){
			if(radius <= 0) {
				app.stage.add(app.layer)
			} else {
				var circle = new Kinetic.Circle({
					x: 0,
					y: 0,
					radius: radius,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)],
					draggable: true
				})
				app.layer.add(circle)
				return app.make.circles(radius - step, step)
			}
		},
		circles2: function(radius, step){
			if(radius <= 0) {
				app.stage.add(app.layer)
			} else {
				var circle = new Kinetic.Circle({
					x: app.width / 2,
					y: app.height / 2,
					radius: radius,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)],
					draggable: true
				})
				app.layer.add(circle)
				return app.make.circles2(radius - step, step)
			}
		},
		circles3: function(radius, step){
			if(radius <= 0) {
				app.stage.add(app.layer)
			} else {
				var circle = new Kinetic.Circle({
					x: app.width,
					y: app.height,
					radius: radius,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)],
					draggable: true
				})
				app.layer.add(circle)
				return app.make.circles3(radius - step, step)
			}
		},

		squares: function(width,height,step){
			
			if (width <= 0 || height <= 0) {
				app.stage.add(app.layer)
			} else {
				var box = new Kinetic.Rect({
					x: 0,
					y: height,
					width: width,
					height: height,
					stroke: "black",
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)],
					draggable: true
				})
				app.layer.add(box)
				return app.make.squares(width-step,height-step,step)
			}		
		}
	}

}

$(function(){
	app.initialize()
})