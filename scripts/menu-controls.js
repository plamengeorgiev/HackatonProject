$(document).ready(function () {
	console.log('started');
	$(document).on('click', '#disasterButton', onDisastersBtnClick);

	$(document).on('click', '#recycle', onRecycleBtnClick);
	
})

function onDisastersBtnClick(){
	console.log('Disaster Button Clicked');
    var $wrapper = $('#wrapper');
	$wrapper.empty();
    var $sideMenu = createSideMenu(disastersInfoBG);
    var $selectedDisaster = createEventContent(disastersInfoBG[0]);

    $sideMenu.on('click', function(ev){
			var $target = $(ev.target);
			var $content = $(this).next();
			$content.remove();

			if ($target.hasClass('side-btn')){
				var dataInfo = $target.attr('data-info');
				dataInfo = parseInt(dataInfo);
				console.log('reached; data info: ' + typeof(dataInfo));
				console.log('reached; data info: ' + typeof(disastersInfoBG));
				$('#wrapper').append(createEventContent(disastersInfoBG[dataInfo]));
			}
	});
    $wrapper.append($sideMenu);
    $wrapper.append($selectedDisaster);
}

function onRecycleBtnClick(){
        var $wrapper = $('#wrapper');
		$wrapper.empty();
        var $sideMenu = createSideMenu(garbageBins);
        var $selectedDisaster = createContent(garbageBins[0]);

        $sideMenu.on('click', function(ev){
			var $target = $(ev.target);
			var $content = $(this).next();
			$content.remove();

			if ($target.hasClass('side-btn')){
				var dataInfo = $target.attr('data-info');
				dataInfo = parseInt(dataInfo);
				console.log('reached; data info: ' + dataInfo);
				$('#wrapper').append(createContent(garbageBins[dataInfo]));
			}
		});
        $wrapper.append($sideMenu);
        $wrapper.append($selectedDisaster);
}

function createSideMenu(array){
    var $sideMenuDiv = $('<div/ >');
	$sideMenuDiv.empty();
    $sideMenuDiv.addClass('side-nav');

    var $sideMenuList = $('<ul />');
    $sideMenuList.addClass('nav-list');

    for (var i = 0; i < array.length; i++) {
        var $currMenuBtn = $button.clone();
        $currMenuBtn.attr('data-info', i);
		
		//check which array is given
		if(array[i].eventType === undefined || array[i].eventType === null){
			$currMenuBtn.text(array[i].name);
		} else {
			$currMenuBtn.text(array[i].eventType);
		}
		
        $currMenuBtn.addClass('side-btn');

        var $currentListElement =  $listElement.clone();
        $currentListElement.append($currMenuBtn);

        $sideMenuList.append($currentListElement);
    }

    $sideMenuDiv.append($sideMenuList);
    return $sideMenuDiv;
}

function getEventObject(ev, array){
	var $target = $(ev.target);
	var $content = $(this).next();
	$content.remove();

	if ($target.hasClass('side-btn')){
		var dataInfo = $target.attr('data-info');
		dataInfo = parseInt(dataInfo);
		console.log('reached; data info: ' + dataInfo);
		$('#wrapper').append(createEventContent(array[dataInfo]));
	}
}

function createEventContent(disaster) {
	var div = $('<div />').addClass('info-container');

	var eventTitile = $('<h2 />').html(disaster.eventType).addClass('disaster-title');
	div.append(eventTitile);

        // content
	for (var i = 0; i < disaster.eventInfo.length; i += 1) {
		var article = $('<article />').addClass('disaster-article');
		var infoTitile = $('<h3 />').html(disaster.eventInfo[i].title).addClass('disaster-title');
		var infoImg = $('<img />').attr('src', disaster.eventInfo[i].imageSource);
		//vat infoText = [];

		article.append(infoTitile);
		article.append(infoImg);
		for (var j = 0; j < disaster.eventInfo[i].text.length; j++) {
			article.append($('<p/>').text(disaster.eventInfo[i].text[j]));
		}

		div.append(article);
	}

	return div;
}

function createContent(garbageBin) {
        var div = $('<div />').addClass('info-container');

        var eventTitile = $('<h2 />').html(garbageBin.name).addClass('garbage-bin-color');
        div.append(eventTitile);

        // content
            var article = $('<article />').addClass('garbage-bin-info');
            var infoText = $('<p />').html(garbageBin.content);

            article.append(infoText);
            div.append(article);

        return div;
    }
