import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

function Carousel(props){    
    let id = props.id
    let itemList = props.itemList
	let template = props.template

	function handleClick(x){
		props.getItem(x)
	}
	if(template === "portofolio"){
		const options = {
			items: 4,
			nav: false,
			rewind: true,
			autoplay: false,
			slideBy: 1,
			dots: false,
			loop:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:3
				},
			}
		}
        
		return <div id={id} className="owl_container">
				<OwlCarousel {...options}>
					{
						itemList.map(function(item, i){
							return(
								<div key={i} className="item">
									<div className="item-container">
										<div className="item-info">
											<img className="item-img" alt={item.alt} title={item.title} src={window.location.origin + item.src} onClick={()=>handleClick(item)}></img>
										</div>
										<div className="item-more-info">
											<p className="grid_title">{item.title}</p>
										</div>
									</div>
								</div>
							)                            
						})
					} 
				</OwlCarousel>
		</div>
	} 	
}

export default Carousel