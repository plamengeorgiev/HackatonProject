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
                    text: [''],
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
                    text: [''],
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
                    text: [''],
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
                    text: [''],
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

var garbageBins = [
	{	name: 'Син',
		content: 'В синия контейнер се изхвърлят отпадъците от хартия. Хартиените отпадъци от опаковки, които може да изхвърляте разделно са:'+
		'Кашони (велпапе), картон, картонени кутии (от прах за пране, хранителни продукти, лекарства, обувки, дрехи и др.), овoцелови табла (кори за яйца),'+
		'опаковъчна хартия за пликове, пакетиране и обвиване, опаковки Тетрапак.'+'<br>'+
		'НЕ ИЗХВЪРЛЯЙТЕ: '+'<br>'+
		'силно замърсени опаковки и хартия; санитарно-хигиенни материали; тапети...'
	},
	{	name: 'Жълт',
		content: 'В жълтия контейнер се изхвърлят отпадъците от пластмаси и метали. Пластмасовите опаковки, които можете да изхвърляте разделно са:'+
		'Фолио, кутии от козметични продукти, сладолед, сирене и др. хранителни продукти; кофички от кисело мляко; пластмасови бутилки от минерална вода,'+
		'безалкохолни и алкохолни напитки; бутилки и туби от миещи и почистващи препарати; флакони от шампоани, балсами и др.козметични продукти;'+
		'флакони от лекарствени продукти; найлонови пликове и торбички; тарелки от хранителни продукти.'+'<br>'+
		'НЕ ИЗХВЪРЛЯЙТЕ:'+'<br>'+
		'Силно замърсени опаковки; туби от авто-масла; опаковки, съдържали опасни химически вещества; платки от електронни устройства;'+
		'саксии за цветя; играчки и ел.уреди. Металните опаковки, които можете да изхвърляте разделно са: Кенове от сокове и безалкохолни напитки,'+
		'консервни кутии, метални спрей-флакони от дезодоранти, пяна за бръснене и др. козметични продукти, метално фолио; всякакви видове капачки – от буркани и шишета.'+'<br>'+
		'НЕ ИЗХВЪРЛЯЙТЕ:'+'<br>'+
		'Силно замърсени опаковки и опаковки, съдържали опасни химически вещества; играчки и ел.уреди.'
	},
	{
		name: 'Зелен',
		content: 'В зеления контейнер се изхвърлят отпадъците от стъкло. Стъклените опаковки, които можете да изхвърляте са: всякакви видове буркани – от консервирани и детски храни, бутилки от алкохолни и безалкохолни напитки, шишета и флакони от лекарствени средства и козметични продукти.'
	},
]
	
 var $listElement = $('<li />');
 var $button = $('<button>');