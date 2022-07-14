import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carousel(props){    
    let id = props.id;
    let item_list = props.item_list;
	let template = props.template;
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
		};
        
		return (
			<div id={id} className="owl_container">
				<OwlCarousel {...options}>
					{
						item_list.map(function(item, i){
							let status = item.status;
							let platform = item.platform;
							let git = item.git;
							if(!status){
								status = "";
							}
							if(!platform){
								platform = "";
							}
							if(!git){
								git = "";
							}

							return(
								<div key={i} className="item">
									<div className="item-container">
										<div className="item-info">
											<img className="item-img" alt={item.alt} title={item.title} src={window.location.origin + item.src}></img>
										</div>
										<div className="item-more-info">
											<p className="grid_title">{item.title}</p>
											<p className="grid_git hidden">{item.git}</p>
											<p className="grid_platform hiddden">{item.platform}</p>
											<p className="grid_used hiddden">{item.used}</p>
											<p className="grid_link hiddden">{item.link}</p>
										</div>
									</div>
								</div>
							);
                            
						})
					} 
				</OwlCarousel>
			</div>
		);
	} 	
}

export default Carousel;