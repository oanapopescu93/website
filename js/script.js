$(document).ready(function(){
	var site = new website();
	site.ready();
	
	if( $('img').attr('alt') == "www.000webhost.com"){
		$(this)[0].images[0].parentNode.parentNode.style.visibility = "hidden";
	}
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var somedata;

function website(){
	var self = this;	
	
	this.ready = function(){
		self.nav_structure();
		
		self.main_structure();
		
		self.structure_about();
		self.structure_portofolio();
		self.structure_contact();
		
		self.structure_footer();
	}
	
	this.nav_structure = function(){
		$('body').append('<nav id = "mynavbar" class="mynavbar"><div class="container"><div class="contact-mobile visible-xs-block"><ul></ul></div><div id="menu"><span class="sr-only">Toggle navigation</span><span class="bar1"></span> <span class="bar2"></span><span class="bar3"></span></div><div class="navbar-box"><ul class="nav-left"></ul><ul class="nav-right hidden-xs" style="margin-right:0px;"></ul></div></div></nav>');
		
		for (var i in subtitles){
			if(i == 0){
				$('.nav-left').append('<li class="active"><a href="#' + subtitles[i] + '" class="scroll-button"><span class="glyphicon glyphicon-home"></span></a></li>');
			} else {
				$('.nav-left').append('<li><a href="#' + subtitles[i] + '" class="scroll-button">' + subtitles[i] + '</a></li>');
			}
			
		}

		for (var i in nav_contacts){
			if(i == 0){
				$('.nav-right').append('<li><a href="' + nav_contacts[i].link + '" target="_top"><span>' + nav_contacts[i].text + '</span></a></li>');	
			} else {
				$('.nav-right').append('<li><a href="' + nav_contacts[i].link + '" target="_blank"><span class="' + nav_contacts[i].text + '"></span></a></li>');	
			}
					
		}

		$("#menu").click(function(){
			$(".bar1").toggleClass("change");	
			$(".bar2").toggleClass("change");	
			$(".bar3").toggleClass("change");	
			$(".navbar-box").toggleClass("move-away");	
		});	
		
		for (var i in nav_contacts){
			if(i == 0){
				$('.contact-mobile ul').append('<li><a href="' + nav_contacts[i].link + '" target="_top"><span>' + nav_contacts[i].text + '</span></a></li>');	
			} else {
				$('.contact-mobile ul').append('<li><a href="' + nav_contacts[i].link + '" target="_blank"><span class="' + nav_contacts[i].text + '"></span></a></li>');	
			}
					
		}
		
		
	}
	
	this.main_structure = function(){		
		
		for (var i in subtitles){
			if(i == 0){
				$('body').append('<header id = "' + subtitles[i] + '" class="full-height"><div class="full-height-content"></div><header>');				
				self.structure_header();	
				
			} else {
				$('body').append('<div id = "' + subtitles[i] + '" class="full-height"><div class="full-height-title" style="display:table-header-group"></div><div class="full-height-content"><div class="container"></div></div><div>');			
			}
		}
		
		$('.full-height').each(function(i){
			if($(this).attr('id') != subtitles[0]){
				$(this).find('.full-height-title').append('<div class="container"><div class="row"><div class="col-sm-12"><hr class="line"><h3 class="text-uppercase">'+ section_header[i-1].text + '<span class="glyphicon ' + section_header[i-1].icon + ' title-icon"></span></h3><hr class="line"></div></div></div>');
			}				
		});
		
		scroll_top();
		scroll_anywhere();
		
		self.mycv();
		self.mytutorials();
	}
	
	this.structure_header = function(){
		$('header .full-height-content').append('<div class="container text-center"><div class="row"><div id="header-title" class="col-sm-12"></div><div id="header-sapou" class="col-sm-8 col-sm-offset-2"></div><div id="header-buttons" class="col-sm-12"></div><div class="scroll"></div></div></div>');
		
		$('#header-title').append('<a href="index.html"><img><h1></h1><h2></h2></a>');
		$('#header-sapou').append('<hr class="line"><p></p><hr class="line">');
		$('#header-buttons').append('<a href="#'+ subtitles[1] + '" class="text-black scroll-button"><button class="button-white" style="margin:5px 10px;"><h6 class="text-uppercase">Read more</h6></button></a><a href="#'+ subtitles[3] + '" class="text-black scroll-button"><button class="button-white" style="margin:5px 10px;"><h6 class="text-uppercase">Contact me</h6></button></a><a href="/personal/chatbot/index.html" target="_blank" class="text-black"><button class="button-white" style="margin:5px 10px;"><h6 class="text-uppercase">Chatbot</h6></button></a>');
		$('.header-scroll').append('<a href="#'+ subtitles[1] + '" class="text-black scroll-button"><i class="fa fa-caret-down" style="font-size:30px;" aria-hidden="true"></i></a>');
		
		$('#header-title img').attr('src', header_info[0]);
		$('#header-title img').addClass('logo');
		
		$('#header-title h1').text(header_info[1]);
		$('#header-title h2').text(header_info[2]);
		
		$('#header-title h1').addClass('text-uppercase blacktext');
		$('#header-title h2').addClass('text-uppercase colortext01');
		
		$('#header-sapou p').html(header_info[3]);
		
	}
	
	this.structure_about = function(){
		$('#about').find('.full-height-content .container').html('<div id="about-div" class="row"></div><div class="row"><div id="go_portofolio" class="about_content_main col-xs-12 col-sm-offset-4 col-sm-8 col-md-offset-4 col-md-8 col-lg-offset-2 col-lg-10"></div></div>');	
		$('#about-div').append('<div id="about_tabs_main" class="about_tabs_main col-xs-12 col-sm-4 col-md-4 col-lg-2"></div><div id="about_content_main" class="about_content_main col-xs-12 col-sm-8 col-md-8 col-lg-10"><div id="about_content_box" class="about_content_box"><div class="row"></div></div></div>');
				
		for (var i in section_about){
			$('#about_tabs_main').append('<div id="about_tabs_'+ i +'" class="about_tabs"><div id="' + section_about[i] + '" class="about_tabs_header"><h3 class="about_tabs_title text-uppercase grey666">' + section_about[i] + '</h3></div></div>');
		}
		
		$('#about_tabs_0').addClass('open');		
		myskills();
		
		$('body').on('click', '#about-div .about_tabs_title', function (e) {	
			var parent_id = $(this).parent().attr('id');
			console.warn('parent_id', parent_id);
			
			if(!$(this).parent().parent().hasClass('open')){
				$('#about-div .about_tabs').removeClass('open');
				$(this).parent().parent().addClass('open');
			} else {				
				$(this).parent().parent().removeClass('open');
			}	

			if(parent_id == "skills"){
				myskills();
			} else if(parent_id == "experience"){
				myexperience();
			} else if(parent_id == "education"){
				myeducation();
			};
		});
		
		$('#go_portofolio').append('<a href="#portofolio" class="text-black scroll-button"><button class="button-white" style="margin:5px 10px;"><h6 class="text-uppercase">See my projects</h6></button></a>');
	}
	
	this.structure_portofolio = function(){
		$('#portofolio').find('.full-height-content .container').append('<div class="row"><div class="col-sm-12"><ul class="portofolio-list text-center"></ul><div class="portofolio-container text-left"></div></div></div></</div>');		
		
		for(var i in portofolio_list){
			$('.portofolio-list').append('<li>'+ portofolio_list[i] +'</li>');
		}
		$('.portofolio-list li').eq(0).addClass('active');
		
		$('.portofolio-container').append('<div class="grid-container"><div class="items"></div><div class="grid-buttons text-center"></div><div class="grid-info"></div></div>');		
		$('.grid-buttons').append('<button id="go_left" class="button-white"><i class="fa fa-arrow-left"></i></button><button id="go_right" class="button-white"><i class="fa fa-arrow-right"></i></button>');
		var myportofolio_items = portofolio_items[0];
		change_portofolio_items(myportofolio_items);
		
		$('body').on('click', '.portofolio-list li', function () {
			var element = $(this);
			$('.portofolio-list li').removeClass('active');
			element.addClass('active');
			
			if($('.portofolio-list li').eq(0).hasClass('active')){
				myportofolio_items = portofolio_items[0];
				change_portofolio_items(myportofolio_items);
			}
			if($('.portofolio-list li').eq(1).hasClass('active')){
				myportofolio_items = portofolio_items[1];
				change_portofolio_items(myportofolio_items);
			}
			if($('.portofolio-list li').eq(2).hasClass('active')){
				myportofolio_items = portofolio_items[2];
				change_portofolio_items(myportofolio_items);
			}
			if($('.portofolio-list li').eq(3).hasClass('active')){
				myportofolio_items = portofolio_items[3];
				change_portofolio_items(myportofolio_items);
			}
		});
		
	}
	
	this.portofolio_image_click = function(){		
		$('body').on('click', '.item-info img', function () {	
			if(isClick){
				if(isClick == true){					
					$('#myModal_portofolio').modal();
					
					$('#myModal_portofolio .modal-body .title').empty();
					$('#myModal_portofolio .modal-body .platform').empty();
					$('#myModal_portofolio .modal-body .used').empty();
					$('#myModal_portofolio .modal-body .status').empty();
					
					if($(this).closest('.item-container').find('.item-more-info p.grid_link').text() != "undefined"){
						$('#myModal_portofolio .modal-body .title').append('<a class="modal_button" href="' + $(this).closest('.item-container').find('.item-more-info p.grid_link').text() + '" target="_blank">Take a look</a>');
					} 
					
					if($(this).closest('.item-container').find('.item-more-info p.grid_git').text() != ""){
						$('#myModal_portofolio .modal-body .platform').append('<a class="modal_button" href="' + $(this).closest('.item-container').find('.item-more-info p.grid_git').text() + '" target="_blank">See the code</a>');
					}
					
					if($(this).closest('.item-container').find('.item-more-info p.grid_platform').text() != ""){
						$('#myModal_portofolio .modal-body .platform').append('<b>Platform: </b>' + $(this).closest('.item-container').find('.item-more-info p.grid_platform').text());
					}
					
					var text = $(this).closest('.item-container').find('.item-more-info p.grid_used').text();
					var res = text.split(", ");
					$('#myModal_portofolio .modal-body .used').append('<b>What I used: </b><br>');
					for (var i in res){
						$('#myModal_portofolio .modal-body .used').append('<span class="box">'+ res[i] +'</span>');
					}
			
					if($(this).closest('.item-container').find('.item-more-info p.grid_status').length > 0){
						$('#myModal_portofolio .modal-body .status').append('<b>Status: </b>' + $(this).closest('.item-container').find('.item-more-info p.grid_status').text());
					} 
				} 
			}
			
		});
	}
		
	this.structure_contact = function(){
		$('#contact').find('.full-height-content .container').append('<div class="row"></div>');
		$('#contact').find('.full-height-content .container .row').append('<div class="col-sm-6 visible-xs-block"><div class="contact_page_mobile"></div></div>');
		$('#contact').find('.full-height-content .container .row').append('<div class="col-sm-6 box-contact-form"></div>');
		$('#contact').find('.full-height-content .container .row').append('<div class="col-sm-6 box-container text-center hidden-xs"><div class="contact_page_container"></div></div>');
		
		
		$('.contact_page_container').append('<div class="contact_back"><div class="click_me">Click me</div></div><div class="contact_front"></div>');
		$('.contact_front').append('<div class="contact-info text-left"><ul></ul><p class="text-center" style="margin-top:15px;">Or get social with me:</p><ul class="text-center"></ul></div><div class="corner corner-1"></div><div class="corner corner-2"></div><div class="corner corner-3"></div><div class="corner corner-4"></div>');
		$('.contact_page_mobile').append('<div class="contact-info-mobile text-left"><ul></ul><p class="text-center" style="margin-top:15px;">Or get social with me:</p><ul class="text-center"></ul></div>');
		
		for(var i in contacts[0]){
			if(typeof contacts[0][i].text != "undefined"){
				if(i == 2){
					$('.contact-info').find('ul').eq(0).append('<li><i class="'+ contacts[0][i].icon +'"></i><span>'+ contacts[0][i].text +'</span></li>');
					$('.contact-info-mobile').find('ul').eq(0).append('<li><i class="'+ contacts[0][i].icon +'"></i><span>'+ contacts[0][i].text +'</span></li>');
				} else {
					$('.contact-info').find('ul').eq(0).append('<li><i class="'+ contacts[0][i].icon +'"></i><a href="'+ contacts[0][i].link +'">'+ contacts[0][i].text +'</a></li>');
					$('.contact-info-mobile').find('ul').eq(0).append('<li><i class="'+ contacts[0][i].icon +'"></i><a href="'+ contacts[0][i].link +'">'+ contacts[0][i].text +'</a></li>');
				}				
			}			
		}	
		for(var i in contacts[1]){					
			$('.contact-info').find('ul').eq(1).append('<li><a href="'+ contacts[1][i].link +'" target="_blank"><i class="'+ contacts[1][i].icon +'"></a></li>');
			$('.contact-info-mobile').find('ul').eq(1).append('<li><a href="'+ contacts[1][i].link +'" target="_blank"><i class="'+ contacts[1][i].icon +'"></a></li>');
		}	
		
		$('body').on('click', '.click_me', function () {
			var contact_page_container = $(this).parent().parent();
			if(!contact_page_container.hasClass('flip')){
				contact_page_container.addClass('flip');
				setTimeout(function() {
					contact_page_container.addClass('open');
					setTimeout(function() {
						contact_page_container.addClass('turn');
					}, 800);
				}, 1000);			
			}			
		});
		
		$('.box-contact-form').append('<form name="contactform" method="post" action="send_form_email.php"></form>')
		$('.box-contact-form form').append('<div class="form-row"></div>');
		$('.box-contact-form form .form-row').append('<div class="form-group col-sm-6"><label for="first_name">First Name *</label><input class="form-control" type="text" name="first_name" maxlength="50" size="30"></div>');
		$('.box-contact-form form .form-row').append('<div class="form-group col-sm-6"><label for="last_name">Last Name *</label><input class="form-control" type="text" name="last_name" maxlength="50" size="30"></div>');
		$('.box-contact-form form').append('<div class="form-group col-sm-12"><label for="email">Email Address *</label><input class="form-control" type="text" name="email" maxlength="80" size="30"></div>');
		$('.box-contact-form form').append('<div class="form-group col-sm-12"><label for="telephone">Telephone Number</label><input class="form-control" type="text" name="telephone" maxlength="30" size="30"></div>');
		$('.box-contact-form form').append('<div class="form-group col-sm-12"><label for="comments">Comments *</label><textarea class="form-control" name="comments" maxlength="1000" cols="25" rows="6"></textarea></div>');
		$('.box-contact-form form').append('<div class="form-group col-sm-12"><input class="button-white" name="submit" type="submit" value="Submit"></div>');
		
		// $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(info) {
			// somedata = JSON.stringify(info, null, 2);
			// console.log(somedata);
			
                // $.ajax({
                    // type: "POST",
                    // url: 'send_form_email.php',
                    // data: "somedata=" + somedata,
                    // success: function(data)
                    // {
                        // alert("success!");
                    // }
                // });
		// });
	}

	this.structure_footer = function(){
		$('body').append('<footer class="text-center"><h6>Copyright &copy; <span id="copyright_year"></span> Oana Popescu. All rights reserved.</h6></footer>');	
		var date = new Date();
		date = date.getFullYear();
		$('#copyright_year').text(date);	
	}

	function myskills(){
		var pie_element = [];
		var myPiechart = [];
		
		$('#about_content_box .row').empty();
		
		for(var i in skills){
			pie_element = [];
			$('#about_content_box .row').append('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"><canvas id="myskill_'+ i +'"></canvas></div>');
			pie_element.push(skills[i]);
			myPiechart[i] = new Piechart("myskill_"+ i, "pie_legend"+ i, pie_element, mycolors, 0.8, 120, 120); 
			myPiechart[i].draw();
		}	
	}
	
	function myexperience(){
		$('#about_content_box .row').empty();
		
		$('#about_content_box .row').append('<div class="col-sm-12"></div>');
		
		for (var i in experience){
			$('#about_content_box .row > div').append('<div class="job_header"></div>');
			if(typeof experience[i].job_title != "undefined"){
				$('#about_content_box .row > div .job_header').eq(i).append('<div class="job_title"><h4 class="text-uppercase">'+ experience[i].job_title +'</h4></div>');
			}
			if(typeof experience[i].period != "undefined"){
				$('#about_content_box .row > div .job_header').eq(i).append('<div class="period">('+ experience[i].period +')</div>');
			}
			if(typeof experience[i].company_name != "undefined"){
				if(typeof experience[i].link_company != "undefined"){
					$('#about_content_box .row > div .job_header').eq(i).append('<div class="company_name"><a href="' + experience[i].link_company + '" target="_blank"><b>'+ experience[i].company_name +'</b></a></div>');
				} else {
					$('#about_content_box .row > div .job_header').eq(i).append('<div class="company_name"><b>'+ experience[i].company_name +'</b></div>');
				}
			}			
			
			$('#about_content_box .row > div').append('<div class="job_body"></div>');	
			
			if(typeof experience[i].job_location != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="job_location"><b>Location: </b>'+ experience[i].job_location +'</div>');
			}
			if(typeof experience[i].company_description != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="company_description"><b>Company profile: </b>'+ experience[i].company_description +'</div>');
			}
			if(typeof experience[i].job_description != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="job_description"><b>What I did: </b>'+ experience[i].job_description +'</div>');
			}
			if(typeof experience[i].job_description_list != "undefined"){
				console.warn('job_description_list', experience[i].job_description_list);
				var job_description_list = experience[i].job_description_list;
				var job_description_list_element = "";
				for(var j in job_description_list){					
					job_description_list_element = job_description_list_element + '<li>' + job_description_list[j] + '</li>';					
				}
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="projects"><b>My work: </b><ul>'+ job_description_list_element +'</ul></div>');
			}
			if(typeof experience[i].platform_used != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="jplatform_used"><b>Platforms used: </b>'+ experience[i].platform_used +'</div>');
			}
			if(typeof experience[i].accomplishments != "undefined"){
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="accomplishments"><b>Accomplishments: </b>'+ experience[i].accomplishments +'</div>');
			}
			if(typeof experience[i].projects != "undefined"){
				var projects = experience[i].projects;
				var project_element = "";
				for(var j in projects){
					if(projects[j].project_link == "portofolio"){
						project_element = project_element + '<li><a href="#' + projects[j].project_link + '" class="scroll-button">' + projects[j].project_name + '</li>';
					} else {
						project_element = project_element + '<li><a target="_blank" href="' + projects[j].project_link + '">' + projects[j].project_name + '</li>';
					}
					
				}
				$('#about_content_box .row > div .job_body').eq(i).append('<div class="projects"><b>Projects: </b><ul>'+ project_element +'</ul></div>');
			}
		}
	}
	
	function myeducation(){
		$('#about_content_box .row').empty();
		
		$('#about_content_box .row').append('<div class="col-sm-12"></div>');
		
		for (var i in education){
			$('#about_content_box .row > div').append('<div class="edu_header"></div>');
			if(typeof education[i].school_name != "undefined"){
				$('#about_content_box .row > div .edu_header').eq(i).append('<div class="edu_school"><h4 class="text-uppercase">'+ education[i].school_name +'</h4></div>');
			}
			if(typeof education[i].title != "undefined"){
				$('#about_content_box .row .row > div .edu_header').eq(i).append('<div class="edu_title"><b>'+ education[i].title +'</b></div>');
			}
			if(typeof education[i].period != "undefined"){
				$('#about_content_box .row > div .edu_header').eq(i).append('<div class="edu_period">('+ education[i].period +')</div>');
			}
			
			$('#about_content_box .row > div').append('<div class="edu_body"></div>');
			if(typeof education[i].school_location != "undefined"){
				$('#about_content_box .row > div .edu_header').eq(i).append('<div class="edu_location"><b>Location: </b>'+ education[i].school_location +'</div>');
			}
			if(typeof education[i].description != "undefined"){
				$('#about_content_box .row > div .edu_body').eq(i).append('<div class="edu_period"><b>What I learnt: </b>'+ education[i].description +'</div>');
			}
		}
	}
	
	function change_portofolio_items(myportofolio_items){
		//console.warn(myportofolio_items);
		for (var i = 0; i < myportofolio_items.length; i++) {
			$('.portofolio-container .items').empty();
		}
		for (var i = 0; i < myportofolio_items.length; i++) {
			
			if(typeof myportofolio_items[i].status != "undefined"){
				if(typeof myportofolio_items[i].platform != "undefined"){
					if(typeof myportofolio_items[i].git != "undefined"){
						$('.portofolio-container .items').append('<div class="111 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden">'+ myportofolio_items[i].git +'</p><p class="grid_platform hiddden">'+ myportofolio_items[i].platform +'</p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					} else {	
						$('.portofolio-container .items').append('<div class="222 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden"></p><p class="grid_platform hiddden">'+ myportofolio_items[i].platform +'</p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					}
				} else {	
					if(typeof myportofolio_items[i].git != "undefined"){
						$('.portofolio-container .items').append('<div class="333 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden">'+ myportofolio_items[i].git +'</p><p class="grid_platform hiddden"></p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					} else {	
						$('.portofolio-container .items').append('<div class="444 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden"></p><p class="grid_platform hiddden"></p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					}
				}
			} else {	
				if(typeof myportofolio_items[i].platform != "undefined"){
					if(typeof myportofolio_items[i].git != "undefined"){
						$('.portofolio-container .items').append('<div class="555 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden">'+ myportofolio_items[i].git +'</p><p class="grid_platform hiddden">'+ myportofolio_items[i].platform +'</p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					} else {	
						$('.portofolio-container .items').append('<div class="666 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden"></p><p class="grid_platform hiddden">'+ myportofolio_items[i].platform +'</p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					}
				} else {	
					if(typeof myportofolio_items[i].git != "undefined"){
						$('.portofolio-container .items').append('<div class="777 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden">'+ myportofolio_items[i].git +'</p><p class="grid_platform hiddden"></p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					} else {	
						$('.portofolio-container .items').append('<div class="888 item item'+ i +'"><div class="item-container"><div class="item-info"><img class="item-img" src = "'+ myportofolio_items[i].src +'"></div><div class="item-more-info"><p class="grid_title">'+ myportofolio_items[i].title +'</p><p class="grid_git hidden"></p><p class="grid_platform hiddden"></p><p class="grid_used hiddden">'+ myportofolio_items[i].used +'</p><p class="grid_link hiddden">'+ myportofolio_items[i].link +'</p></div></div></div>');
					}
				}
			}
		}
		
		$('body').append('<div class="modal fade" id="myModal_portofolio" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content mymodal"><div class="modal-header"><h5 class="modal-title">Details</h5><button type="button" class="close whitetext" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button></div><div class="modal-body text-center"></div></div></div></div>');
		
		$('#myModal_portofolio .modal-body').empty();
		$('#myModal_portofolio .modal-body').append('<div class="title"></div><div class="platform"></div><div class="used"></div><div class="status"></div>');
		
		$('#myModal_portofolio .modal-body .title').empty();
		$('#myModal_portofolio .modal-body .platform').empty();
		$('#myModal_portofolio .modal-body .used').empty();
		$('#myModal_portofolio .modal-body .status').empty();
		
		self.portofolio_image_click();
	}

	this.mycv = function(){
		$('body').append('<div class="mycv_container"><div class="cv_close"><i class="fa fa-times"></i></div><div id="mycv" class="mycv" data-toggle="modal" data-target="#myModal_cv"><i class="fa fa-file"></i><br>CV</div></div>');
		$('body').append('<div class="modal fade" id="myModal_cv" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content mymodal"><div class="modal-header"> <button type="button" class="close whitetext" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button></div><div class="modal-body text-center"></div></div></div></div>');
		$('#myModal_cv .modal-body').append('<h3 class="text-uppercase" id="myModalLabel">Choose</h3><br><a href="img/CV - Oana Popescu.pdf"><span class="cv-lang">PDF</span></a><a href="img/CV - Oana Popescu.doc"><span class="cv-lang">WORD</span></a>');
		
		$('body').on('click', '.cv_close', function (e) {
			$('.mycv_container').toggleClass('closed');
		});
	}
	
	this.mytutorials = function(){
		$('body').append('<div class="mytutorials_container"><div class="mytutorials_close"><i class="fa fa-times"></i></div><div id="mytutorials" class="mytutorials" data-toggle="modal" data-target="#myModal_tutorials"><i class="fa fa-book" data-toggle="tooltip" data-placement="left" title="My tutorials"></i></div></div>');
		$('body').append('<div class="modal fade" id="myModal_tutorials" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content mymodal"><div class="modal-header"> <button type="button" class="close whitetext" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button></div><div class="modal-body text-center"></div></div></div></div>');
		$('#myModal_tutorials .modal-body').append('<h3 class="text-uppercase" id="myModalLabel">Tutorials</h3><div id="tutorial_box_container"></div>');
		
		for(var i in tutorials){
			$('#tutorial_box_container').append('<h4 class="tutorial_name">' + tutorials[i].name + '</h4>');
			$('#tutorial_box_container').append('<p>' + tutorials[i].description + '</p>');
			$('#tutorial_box_container').append('<p>What I used:</p>');
			for (var j in tutorials[i].used){
				$('#tutorial_box_container').append('<span class="box">' + tutorials[i].used[j] + '</span>');
			}
			$('#tutorial_box_container').append('<p><span>Link: </span><a class="tutorial_link" href="' + tutorials[i].link + '" target="_blank">Click here</a></p>');
		}
		
		
		$('body').on('click', '.mytutorials_close', function (e) {
			$('.mytutorials_container').toggleClass('closed');
		});
	}
}

var myVar;
function loader(){
	myVar = setTimeout(showPage, 1000);
}

function showPage() {
	$('#loader_container').hide();
	$('.mynavbar').css('display', 'block');
	$('.full-height').css('display', 'table');
	$('footer').css('display', 'block');
}