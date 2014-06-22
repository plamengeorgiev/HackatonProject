 $(document).ready(function () {
	$(document).on('click', 'button', function(event){
		event.stopPropagation();
		var clickedClass = this.className;
		console.log('CLICKED BUTTON: '+clickedClass);
		switch(clickedClass){
			case 'submit-disaster':
				adminSubmitDisaster();
				break;
			case 'continue-left':
				showMainPanel("left");
				break;
			case 'continue-right':
				showMainPanel("right");
				break;
			case 'report-left':
				showReportPanel("left");
				break;
			case 'report-right':
				showReportPanel("right");
				break;
			case 'report-Storm':
				userReportEvent("Storm");
				break;
			case 'report-Fire':
				userReportEvent("Fire");
				break;
			case 'report-Snow':
				userReportEvent("Snow");
				break;
			case 'report-Flood':
				userReportEvent("Flood");
				break;
			case 'report-Winds':
				userReportEvent("Winds");
				break;
			case 'report-Radiation':
				userReportEvent("Radiation");
				break;
			case 'report-AirPollution':
				userReportEvent("AirPollution");
				break;	
			case 'report-Landslide':
				userReportEvent("Landslide");
				break;
			default: break;
		}
	
	});
})
 
 var disasterReports;
 
 function initializeArray(){
	disasterReports = [
	{name: "Storm",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: '../images/bckgrnds/storm.jpg'
	},
	{name: "Fire",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: '../images/bckgrnds/fire.jpg'
	},
	{name: "Snow",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: '../images/bckgrnds/snow.jpg'
	},
	{name: "Flood",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: 'images/bckgrnds/flood.jpg'
	},
	{name: "Winds",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: 'images/bckgrnds/winds.jpg'
	},
	{name: "Radiation",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: 'images/bckgrnds/radiation.jpg'
	},
	{name: "AirPollution",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: 'images/bckgrnds/airpollution.jpg'
	},
	{name: "Landslide",
	 reportCounts: 0,
	 reported: false,
	 alertIMG: 'images/bckgrnds/landslide.jpg'
	}
 ];
}

function onPreviewBtnClick(){
	console.log('Preview Button Clicked');
	initializeArray()
    var $wrapper = $('#wrapper');
	$wrapper.empty();
	var $container = $('<div/ >');
	var $horLine = $('<hr/>');
	$container.addClass('phones-container');
	$container.append(createPhonePane('left'));
	$container.append(createPhonePane('right'));
	$wrapper.append($container);
	$wrapper.append($horLine);
	$wrapper.append(createAdminPanel());
}

function createPhonePane(side){
	var $phonePanel = $('<div/ >'),
		className = 'phone-panel-' + side,
		$disclaimer = $('<p/>'),
		discText = "Authors do <strong>NOT</strong> carry any responsibility for misuse of this application. Users are <strong>ENTIRELY</strong> responsible for the way they use, or misuse, this application."+
					"It's <strong>STRONGLY</strong> advised that you do not report any non-existent disasters in order to prevent panic.",
		$continueMenuBtn = $button.clone();
	$phonePanel.addClass(className);
	$disclaimer.html(discText);
	$continueMenuBtn.text('Continue');
	$continueMenuBtn.addClass('continue-'+side);
	$phonePanel.append($disclaimer);
	$phonePanel.append($continueMenuBtn);
	
	return $phonePanel;
}

function createAdminPanel(){
		var $adminPanel = $('<div/ >'),
			$select = $('<select/>'),
			$submitBtn = $button.clone();
		$select.attr('id', 'disaster-select');
		for(var i = 0; i<disasterReports.length; i+=1){
			var option = new Option("option text", "value");
			$(option).html(disasterReports[i].name);
			$select.append(option);
		}
		$submitBtn.addClass('submit-disaster');
		$submitBtn.text('Submit');
		$adminPanel.html('This is a sample of admin reporting a disaster.<br/>');
		$adminPanel.append($select);
		$adminPanel.append($submitBtn);
		
		return $adminPanel;
}

function adminSubmitDisaster(){
	var disaster = $( "#disaster-select option:selected" ).text();
	for(var i = 0; i<disasterReports.length; i+=1){
		if(disaster === disasterReports[i].name){
			if(!disasterReports[i].reported){
				reportDisaster(disasterReports[i].name);
				disasterReports[i].reported = true;
			}
		}
	}
}

function reportDisaster(disaster){
	console.log("WE HAVE A DISASTER: " + disaster);
	var $phonePanelLeft = $('.phone-panel-left'),
		$alertDIV = $('<div/>');
		alertText = '<strong>ALERT</strong> !<br/>'+ disaster.toUpperCase() + ' nearby!';
		$alertImage = $('<img/>');
	$phonePanelLeft.empty();
	$phonePanelLeft.css({'background-color': 'white'});
	for(var i = 0; i < disasterReports.length; i+=1){
		if(disaster === disasterReports[i].name){
			$alertImage.attr("src", disasterReports[i].alertIMG);
		}
	}
	$alertDIV.addClass('alert-div');
	$alertDIV.html(alertText);
	$phonePanelLeft.append($alertImage);
	$phonePanelLeft.append($alertDIV);
}

function showMainPanel(side){
	var className = 'phone-panel-' + side,
		$selectedPhone = $('.'+className),
		$reportBtn = $button.clone();
		
	$selectedPhone.empty();
	$reportBtn.addClass('report-'+side);
	$selectedPhone.append($reportBtn);
}

function showReportPanel(side){
	var className = 'phone-panel-' + side,
		$selectedPhone = $('.'+className),
		$reportLeft = $('<ul/>')
		$reportRight = $('<ul/ >')
		$reportHolder = $('<div/ >');
	$selectedPhone.empty();
	$reportLeft.addClass('ul-report-left');
	$reportRight.addClass('ul-report-right');
	$reportHolder.attr('id','report-holder'+side);
	for(var i = 0; i< 4; i+=1){
		var $listItem1 = $('<li/>'),
			$listItem2 = $('<li/>'),
			$reportBtn = $button.clone();
		$listItem1.html(''+disasterReports[i].name)
		$reportBtn.addClass('report-'+disasterReports[i].name);
		$listItem2.append($reportBtn);
		
		$reportLeft.append($listItem1);
		$reportLeft.append($listItem2);
	}
	for(var i = 4; i < disasterReports.length; i+=1){
		var $listItem1 = $('<li/>'),
			$listItem2 = $('<li/>'),
			$reportBtn = $button.clone();
		$listItem1.html(''+disasterReports[i].name)
		$reportBtn.addClass('report-'+disasterReports[i].name);
		$listItem2.append($reportBtn);
		
		$reportRight.append($listItem1);
		$reportRight.append($listItem2);
	}
	
	$reportHolder.append($reportLeft);
	$reportHolder.append($reportRight);
	
	$selectedPhone.append($reportHolder);
}

function userReportEvent(disaster){
	for(var i = 0; i < disasterReports.length; i+=1){
		if(disaster === disasterReports[i].name){
			disasterReports[i].reportCounts +=1;
			if(disasterReports[i].reportCounts >=3 && !disasterReports[i].reported){
				reportDisaster(disasterReports[i].name);
				disasterReports[i].reported = true;
				break;
			}
			break;
		}
	}

}