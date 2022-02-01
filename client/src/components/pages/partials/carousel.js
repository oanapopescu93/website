import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carousel(props){    
    var id = props.id;
    var item_list = props.item_list;
	var template = props.template;

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
				1200:{
					items:4
				},
			}
		};
        
		return (
			<div id={id} className="owl_container">
				<OwlCarousel {...options}>
					{
						item_list.map(function(item, i){
							if(typeof item.status != "undefined"){
                                if(typeof item.platform != "undefined"){
                                    if(typeof item.git != "undefined"){
                                        return <div key={i} className="111 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden">{item.git}</p><p className="grid_platform hiddden">{item.platform}</p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    } else {	
                                        return <div key={i} className="222 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden"></p><p className="grid_platform hiddden">{item.platform}</p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    }
                                } else {	
                                    if(typeof item.git != "undefined"){
                                        return <div key={i} className="333 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden">{item.git}</p><p className="grid_platform hiddden"></p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    } else {	
                                        return <div key={i} className="444 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden"></p><p className="grid_platform hiddden"></p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    }
                                }
                            } else {	
                                if(typeof item.platform != "undefined"){ 
                                    if(typeof item.git != "undefined"){
                                        return <div key={i} className="555 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden">{item.git}</p><p className="grid_platform hiddden">{item.platform}</p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    } else {	
                                        return <div key={i} className="666 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden"></p><p className="grid_platform hiddden">{item.platform}</p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    }
                                } else {	
                                    if(typeof item.git != "undefined"){
                                        return <div key={i} className="777 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden">{item.git}</p><p className="grid_platform hiddden"></p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    } else {	
                                        return <div key={i} className="888 item"><div className="item-container"><div className="item-info"><img className="item-img" alt={item.alt} title={item.title} src={item.src}></img></div><div className="item-more-info"><p className="grid_title">{item.title}</p><p className="grid_git hidden"></p><p className="grid_platform hiddden"></p><p className="grid_used hiddden">{item.used}</p><p className="grid_link hiddden">{item.link}</p></div></div></div>
                                    }
                                }
                            }
						})
					} 
				</OwlCarousel>
			</div>
		);
	} 	
}

export default Carousel;