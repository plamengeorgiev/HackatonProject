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
			default: break;
		}
	
	});	
})
 
 
 var disasterReports = [
	{name: "Storm",
	 reportCounts: 0,
	 reported: false
	},
	{name: "Fire",
	 reportCounts: 0,
	 reported: false
	},
	{name: "Snow",
	 reportCounts: 0,
	 reported: false
	},
	{name: "Flood",
	 reportCounts: 0,
	 reported: false
	},
	{name: "Winds",
	 reportCounts: 0,
	 reported: false
	},
	{name: "Radiation",
	 reportCounts: 0,
	 reported: false
	},
	{name: "AirPollution",
	 reportCounts: 0,
	 reported: false
	},
	{name: "Landslide",
	 reportCounts: 0,
	 reported: false
	}
 ];

function onPreviewBtnClick(){
	console.log('Preview Button Clicked');
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
		discText = "Authors do <strong>NOT</strong> carry any responsibility for misuse of this application. Users are <strong>ENTIRELY</strong> responsible about the way they use, or misuse, this application."+
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