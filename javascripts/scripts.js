var app = {

	initialize: function(){
		
		app.width = document.width
		app.height = document.height

		app.colors = ["#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47","#4F4046","#8CBEB2","#EBE4B3","#F3B557","#F05B47"];
		app.blobs = []

		app.stage = new Kinetic.Stage({
			container: "main_container",
			width: app.width,
			height: app.height
		})
		app.layer = new Kinetic.Layer();

		app.make.blobs(0)
	},

	make: {
		blobs: function(count, step) {
			if(count > 5) {
				app.stage.add(app.layer)
				var period = 2000;
	      var centerTension = 0;
	      var amplitude = 1;

	      var anim = new Kinetic.Animation(function(frame) {
	      	for(var n = 0; n < app.blobs.length; n++) {
	          app.blobs[n].setTension(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerTension);
	        }
	      }, app.layer); 

	      anim.start();
			} else {
				var points = [];
        for(var i = 0; i < 5; i++) {
          points.push({
            x: (app.width) * Math.random(),
            y: (app.height) * Math.random()
          });
        }

				var blob = new Kinetic.Blob({
					points: points,
					fill: app.colors[Math.floor(Math.random()*10)],
					stroke: app.colors[Math.floor(Math.random()*10)],
					strokeWidth: 2,
					tension: 0,
					opacity: Math.random(),
					draggable: true
				})
				app.layer.add(blob)
				app.blobs.push(blob)

	      return app.make.blobs(count + 1)
			}
		},
		circles: function(radius, step){
			if(radius <= 0) {
				app.stage.add(app.layer)
			} else {
				var circle = new Kinetic.Circle({
					x: (Math.random()*app.width),
					y: (Math.random()*app.height),
					radius: radius,
					stroke: app.colors[Math.floor(Math.random()*10)],
					strokeWidth: 2,
					fill: app.colors[Math.floor(Math.random()*10)]
				})
				app.layer.add(circle)
				var amplitude = Math.random()*150;
		    var period = 2000;
		    // in ms
		    var centerX = app.width / 2;

		    var anim = new Kinetic.Animation(function(frame) {
		      circle.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
		    }, app.layer);

	      anim.start();
				return app.make.circles(radius - step, step)
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
					fill: app.colors[Math.floor(Math.random()*10)]
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