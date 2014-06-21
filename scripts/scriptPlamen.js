$(document).ready(function(){
console.log('started');
$(document).on('click', '#recycle', onRecycleBtnClick);

});
    var garbageBins = [
        {
            name: 'blue',
            content: 'content '
        },
        {
            name: 'yellow',
            content: ' content content'
        },
        {
            name: 'green',
            content: ' content content content'
        }
    ]
	
    var $listElement = $('<li />');
    var $button = $('<button>');

    function onRecycleBtnClick(){
        var $wrapper = $('#wrapper');
		$wrapper.empty();
        var $sideMenu = createSideMenu();
        var $selectedDisaster = createContent(garbageBins[0]);

        $sideMenu.on('click', getEventObject);
        $wrapper.append($sideMenu);
        $wrapper.append($selectedDisaster);
    }

    function createSideMenu(){
        var $sideMenuDiv = $('<div/ >');
        $sideMenuDiv.addClass('side-nav');

        var $sideMenuList = $('<ul />');
        $sideMenuList.addClass('nav-list');

        for (var i = 0; i < garbageBins.length; i++) {
            var $currMenuBtn = $button.clone();
            $currMenuBtn.attr('data-info', i);
            $currMenuBtn.text(garbageBins[i].name);
            $currMenuBtn.addClass('side-btn');

            var $currentListElement =  $listElement.clone();
            $currentListElement.append($currMenuBtn);

            $sideMenuList.append($currentListElement);
        }

        $sideMenuDiv.append($sideMenuList);
        return $sideMenuDiv;
    }

    function getEventObject(ev){
        var $target = $(ev.target);

        if ($target.hasClass('side-btn')){
            var dataInfo = $target.attr('data-info');
            dataInfo = parseInt(dataInfo);
            console.log(dataInfo);
            createContent(garbageBins[dataInfo]);
        }
    }

    function createContent(garbageBin) {
        var div = $('<div />').addClass('info-container');

        var eventTitile = $('<h2 />').html(garbageBin.name).addClass('garbage-bin-color');
        div.append(eventTitile);

        // content
        for (var i = 0; i < garbageBin.content; i += 1) {
            var article = $('<article />').addClass('garbage-bin-info');
            var infoText = $('<p />').html(garbageBin.content);

            article.append(infoTitile);
            article.append(infoImg);
            article.append(infoText);
            div.append(article);
        }

        return div;
    }
