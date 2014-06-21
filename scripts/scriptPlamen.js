function onRecycleButtonClick(){
    var $container = $('#wrapper');

    var $sideMenu = document.createElement('div');
    var $infoContainer = document.createElement('div');
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

    for (i=0; i<garbageBins.length; i++)
    {
        var button = document.createElement('button');
        button.value=garbageBins[i].name;
        button.addEventListener('click', loadInfoInInfoContainer(garbageBins[i]));
        $sideMenu.append(button);
    };

    function loadInfoInInfoContainer(garbageBin){
        var $infoDiv = document.createElement('div');
        $infoDiv.text=garbageBin.content;
        $infoContainer.append($infoDiv);
    }
    $container.append($sideMenu);
    $container.append($infoContainer);
}
$('#recycle').click(onRecycleButtonClick());