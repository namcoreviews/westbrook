// JavaScript Document
window.onload = function () {

	var chart1 = new CanvasJS.Chart("chartContainer1", {
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Total Reviews"
		},
		axisY: {
			title: "Quantity"
		},
		data: [{        
			type: "column",  
			dataPoints: [      
				{ y: 1, label:  "1 star" },
				{ y: 1,  label: "2 stars" },
				{ y: 1,  label: "3 stars" },
				{ y: 2,  label: "4 stars" },
				{ y: 5,  label: "5 stars" },
			]
		}]
	});
	chart1.render();

	}

