$(document).ready(function () {
	console.log('started');
	$(document).on('click', '#disasterButton', function(){
		onDisastersBtnClick();
	});
	
})
 var disastersInfoBG = [
        {
            eventType: 'Пожар',
            eventInfo: [
                {
                    title: 'Основна информация',
                    text: ['Пожарът е горене, разпространяващо се без контрол във времето и пространството, характеризиращо се с отделяне на топлина, придружено с дим или пламъци, или и двете (БДС ISO 8421 -1).',
                         'Пожарът е сложен комплекс от физико-химични явления, в основата на които лежат нестационарни, т. е. изменящи се във времето процеси на горене, топло и масообмен.'],
                    imageSource: 'images/fire.jpg'
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
        },{
            eventType: 'Епидемия',
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
        },{
            eventType: 'Наводнение',
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
        },{
            eventType: 'Лавина',
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
        },{
            eventType: 'Свлачище',
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
        },{
            eventType: 'Земетресение',
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
        },{
            eventType: 'Слънчево изригване',
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
        },{
            eventType: 'Топлинна вълна',
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
        },{
            eventType: 'Буря',
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
        },{
            eventType: 'Гръмотевична буря',
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
        },{
            eventType: 'Студ',
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

    onDisastersBtnClick();

    function onDisastersBtnClick(){
		console.log('buttonClicked');
        var $wrapper = $('#wrapper');
		$wrapper.empty();
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
        var $content = $(this).next();
        $content.remove();

        if ($target.hasClass('side-btn')){
            var dataInfo = $target.attr('data-info');
            dataInfo = parseInt(dataInfo);

            $('#wrapper').append(createEventContent(disastersInfoBG[dataInfo]));
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
            for (var j = 0; j < disaster.eventInfo.text.length; j++) {
                article.append($('<p/>').text(disaster.eventInfo.html[j]));
            }

            div.append(article);
        }

        return div;
    }
