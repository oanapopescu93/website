
import $ from 'jquery' 

export const Piechart = function (mycanvas, mylegend, dataSource, colors, doughnutHoleSize, w, h) {
    var canvas = document.getElementById(mycanvas)
    var ctx = canvas.getContext("2d")
	canvas.height = h
	canvas.width = w
    
    this.draw = function(){		
		var total_value = 100
        var color_index = 0
		var start_angle = 0    
		
		for (var i in dataSource){ 
			let slice_angle = 2 * Math.PI * dataSource[i].value / total_value					
			drawPieSlice(
                ctx,
                canvas.width/2,
                canvas.height/2,
                Math.min(canvas.width/2, canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                colors[i]
            )
            start_angle = start_angle + slice_angle
            color_index = color_index + 1
        }
		
		if(dataSource.length === 1){
			let slice_angle = (2 * Math.PI) - (2 * Math.PI * dataSource[i].value / total_value)						
			drawPieSlice(
				ctx,
				canvas.width/2,
				canvas.height/2,
				Math.min(canvas.width/2, canvas.height/2),
				start_angle,
				start_angle+slice_angle,
				colors[1]
			)
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
            )
		} 
		
		for (let i in dataSource){ 
			if (doughnutHoleSize > 0){
				let labelText = Math.round(100 * dataSource[i].value / total_value)
				ctx.fillStyle = "black"
				ctx.font = "bold 16px Arial"
				ctx.fillText(labelText+"%", canvas.width/2-20, canvas.height/2+5)
			} else {
				let val = dataSource[i].value
				let slice_angle = 2 * Math.PI * val / total_value
				let pieRadius = Math.min(canvas.width/2,canvas.height/2)
				let labelX = canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2)
				let labelY = canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2)		
				let offset = (pieRadius * doughnutHoleSize ) / 2
				
				labelX = canvas.width/2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle/2)
				labelY = canvas.height/2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle/2)    

				ctx.beginPath()
				ctx.rect(labelX-25,labelY-25, 50, 20)
				ctx.fillStyle = 'white'
				ctx.fill()
				ctx.strokeStyle = 'black'
				ctx.stroke()
				ctx.closePath()
			 
				let labelText = Math.round(100 * dataSource[i].value / total_value)
				ctx.fillStyle = "black"
				ctx.font = "bold 16px Arial"
				ctx.fillText(labelText+"%", labelX-20,labelY-10)	
			
				start_angle = start_angle + slice_angle
			}		
        } 
		
		if(mylegend){
			if($('#' + mycanvas) && typeof $('#' + mylegend).html() === "undefined"){
				$('#' + mycanvas).after('<div class="legend" id="' + mylegend + '"></div>')		
				let legendHTML = ""
				for (let i in dataSource){ 
					legendHTML = legendHTML + "<div><span style='display:inline-block;width:20px;background-color:"+colors[i]+";'>&nbsp;</span> "+dataSource[i].name+"</div>"
				}
				$('#' + mylegend).html(legendHTML)
			}
		}		
	}

    function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.moveTo(centerX,centerY)
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.closePath()
        ctx.fill()
    }
}