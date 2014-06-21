(function () {
    var disastersInfoBG = [
        {
            eventType: 'Пожар',
            eventInfo: [
                {
                    title: 'Основна информация',
                    text: '',
                    imageSource: 'images/fire.png'
                },{
                    title: 'Рискове',
                    text: '',
                    imageSource: 'images/fire-risk.png'
                },{
                    title: 'Какво да правим?',
                    text: '',
                    imageSource: 'images/fire-to-do.png'
                }
            ]
        }
    ];

    var $listElement = $('<li />');
    var $button = $('<button>');
    // var disastersBG = ['Пожар', 'Епидемия', 'Наводнение', 'Лавина',
    //    'Свлачище', 'Земетресение', 'Слънчево изригване', 'Топлинна вълна', 'Буря',
    //    'Гръмотевична буря', 'Студ']

    function onDisastersBtnClick(){
        var $wrapper = $('#wrapper');
        var $sideMenu = createSideMenu();
        var $selectedDisaster = createEventContent(disastersInfoBG[0]);

        $sideMenu.on('click', getEventObject);
        $wrapper.append($sideMenu);
        $wrapper.append($selectedDisaster);
    }

    function createSideMenu(){
        var $sideMenuDiv = $('<div/ >');
        $sideMenuDiv.addClass('side-nav');

        var $sideMenuList = $('<ul />');
        $sideMenuList.addClass('nav-list');

        for (var i = 0; i < disastersInfoBG.length; i++) {
            var $currMenuBtn = $button.clone();
            $currMenuBtn.attr('data-info', i);
            $currMenuBtn.text(disastersInfoBG[i].eventType);
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
            createEventContent(disastersInfoBG[dataInfo]);
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
            var infoText = $('<p />').html(disaster.eventInfo[i].text);

            article.append(infoTitile);
            article.append(infoImg);
            article.append(infoText);
            div.append(article);
        }

        return div;
    }

})();