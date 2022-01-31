import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import $ from 'jquery'; 
import { capitalizeFirstLetter } from '../utils';

function Piechart(mycanvas, mylegend, dataSource, colors, doughnutHoleSize, w, h){	
    var canvas = document.getElementById(mycanvas);
    var ctx = canvas.getContext("2d");	
	canvas.height = h;
	canvas.width = w;
    
    this.draw = function(){		
		var total_value = 100;
        var color_index = 0;
		var start_angle = 0;           
		
		for (var i in dataSource){ 
			var slice_angle = 2 * Math.PI * dataSource[i].value / total_value;						
			drawPieSlice(
                ctx,
                canvas.width/2,
                canvas.height/2,
                Math.min(canvas.width/2, canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                colors[i]
            ); 
            start_angle = start_angle + slice_angle;
            color_index = color_index + 1;
        }
		
		if(dataSource.length == 1){
			var slice_angle = (2 * Math.PI) - (2 * Math.PI * dataSource[i].value / total_value);						
			drawPieSlice(
				ctx,
				canvas.width/2,
				canvas.height/2,
				Math.min(canvas.width/2, canvas.height/2),
				start_angle,
				start_angle+slice_angle,
				colors[1]
			);
		}
		
		if(doughnutHoleSize > 0){	
			drawPieSlice(
                ctx,
                canvas.width/2,
                canvas.height/2,
                doughnutHoleSize * Math.min(canvas.width/2,canvas.height/2),
                0,
                2 * Math.PI,
                "#f3f4f6"
            );
		} 
		
		for (var i in dataSource){ 
			if (doughnutHoleSize > 0){
				var labelText = Math.round(100 * dataSource[i].value / total_value);
				ctx.fillStyle = "black";
				ctx.font = "bold 16px Arial";
				ctx.fillText(labelText+"%", canvas.width/2-20, canvas.height/2+5);	
			} else {
				var val = dataSource[i].value;
				var slice_angle = 2 * Math.PI * val / total_value;
				var pieRadius = Math.min(canvas.width/2,canvas.height/2);
				var labelX = canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
				var labelY = canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);			
				var offset = (pieRadius * doughnutHoleSize ) / 2;
				
				labelX = canvas.width/2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
				labelY = canvas.height/2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle/2);     

				ctx.beginPath();
				ctx.rect(labelX-25,labelY-25, 50, 20);
				ctx.fillStyle = 'white';
				ctx.fill();
				ctx.strokeStyle = 'black';
				ctx.stroke();
				ctx.closePath();
			 
				var labelText = Math.round(100 * dataSource[i].value / total_value);
				ctx.fillStyle = "black";
				ctx.font = "bold 16px Arial";
				ctx.fillText(labelText+"%", labelX-20,labelY-10);	
				
				start_angle = start_angle + slice_angle;
			}		
        } 		
		
		if(mylegend){
			$('#' + mycanvas).after('<div class="legend" id="' + mylegend + '"></div>');			
            var legendHTML = "";
            for (var i in dataSource){ 
                legendHTML = legendHTML + "<div><span style='display:inline-block;width:20px;background-color:"+colors[i]+";'>&nbsp;</span> "+dataSource[i].name+"</div>";
            }
            $('#' + mylegend).html(legendHTML);
		}
		
	}

    function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }
}

var self;
class Skills extends Component {	
	constructor(props) {
		super(props);
		self = this;
        self.state = {
			skills_title: props.skills_title,
            skills: props.skills,
            pie_colors: props.pie_colors,
            language: props.language,
		};
	}

	componentDidMount() {
        if($('#about_content_box')){
            $('#about_content_box').scrollTop(0);
        }

        var pie_element = [];
		var myPiechart = [];		
		for(var k in self.state.skills_title){
			$('#skills_row').append('<div class="col-xs-12"><h4 class="grey666">' + capitalizeFirstLetter(self.state.skills_title[k]) + '</h4></div>');
			for(var i in self.state.skills){
				if(self.state.skills[i].type == self.state.skills_title[k]){
					pie_element = [];					
					$('#skills_row').append('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"><canvas id="myskill_'+ i +'"></canvas></div>');
					pie_element.push(self.state.skills[i]);
					myPiechart[i] = new Piechart("myskill_"+ i, "pie_legend"+ i, pie_element, self.state.pie_colors, 0.8, 120, 120); 
					myPiechart[i].draw();
				}
			}	
		}

		$('#language_row').append('<div class="col-sm-12"><h4 class="grey666">Languages</h4></div><div id="language_bar_container" class="col-sm-6 col-md-4 col-lg-3"></div>');		
		for (var i in self.state.languages){
			$('#language_bar_container').append('<p>' + capitalizeFirstLetter(self.state.languages[i].name) + '</p><div class="language_bar_box"><div class="language_bar ' + self.state.languages[i].name + '">' + self.state.languages[i].perc + '%</div></div>');
			$('#language_bar_container .language_bar').last().css("width", self.state.languages[i].perc+"%");
		}
	}
    
	render() {
		return (
            <>
                <Row id="skills_row"></Row>
                <Row id="language_row"></Row>
            </>
	    );
    }
}

export default Skills;