(function () {
            var info = [
                {
                    eventType: 'Пожар',
                    eventInfo: [
                        {
                            title: 'Основна информация',
                            text: 'нещо гори',
                            imageSource: 'images/fire.png'
                        }, {
                            title: 'Рискове',
                            text: 'може да изгориш',
                            imageSource: 'images/fire-risk.png'
                        }, {
                            title: 'Какво да правим?',
                            text: 'бягай',
                            imageSource: 'images/fire-to-do.png'
                        }
                    ]
                }
            ];

            //var disasters = ['Fire','Flood', 'Еpidemic', 'Heat Wave',
            //    'Fire', 'Fire'  ]

            $('#wrapper').append( createEventContent(info[0]));

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