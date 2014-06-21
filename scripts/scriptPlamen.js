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
        $sideMenu.add(button);
    };

    function loadInfoInInfoContainer(garbageBin){
        var $infoDiv = document.createElement('div');
        $infoDiv.text=garbageBin.content;
        $infoContainer.add($infoDiv);
    }
    $container.add($sideMenu);
    $container.add($infoContainer);
}
$('#recycle').click(onRecycleButtonClick());