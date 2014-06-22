(function () {
    var $container = $('#wrapper');

    var $aboutAsBtn = $('#about-as');
    var $title = $('<h2 />').text('Това е приложение за получаване на известия за настъпили или предстоящи бедствия.');
    var $image = $('<img />').attr('src', 'images/navodnenie.jpg');
    $image.addClass('img');

    var $content = $('<div />').addClass('phone');
    $('<h3 />').text('Спешни телефони:').appendTo($content);

    var phones = [
        '112  Единен телефон за спешни повиквания',
        '150  Бърза помощ',
        '166  Полиция',
        '160  Пожарна',
        '146  Пътна помощ'
    ];

    for (var i = 0; i < phones.length; i++) {
        var p = $('<p />').text(phones[i]);

        $content.append(p);
    }

    $aboutAsBtn.on('click', function () {
        $container.empty();
        $container.append($title);
        $container.append($image);
        $container.append($content);
    });
})();