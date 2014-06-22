function onHomeBtnClick(){
	var $wrapper = $('#wrapper');
	$wrapper.empty();
	
	var $headlineDiv = $('<div/>');
	$headlineDiv.attr('id', "div1");
	var $subDiv = $('<div/>');
	$subDiv.attr('id', "div2");
	
	var $picture1 = $('<img>');
	$picture1.attr('src', "images/floods.jpg");
	$picture1.attr('id', "picture1");
	
	var $picture2 = $('<img>');
	$picture2.attr('src', "images/chemical disaster.jpg");
	$picture2.attr('id', "picture2");
	
	var $picture3 = $('<img>');
	$picture3.attr('src', "images/forest-fire.jpg");
	$picture3.attr('id', "picture3");
	
	var $picture4 = $('<img>');
	$picture4.attr('src', "images/tornado.jpg");
	$picture4.attr('id', "picture4");

	$headlineDiv.text('Имате ли готовност за нещо подобно?');
	$wrapper.append($headlineDiv);
	$wrapper.append($picture1);
	$wrapper.append($picture2);
	$wrapper.append($picture3);
	$wrapper.append($picture4);
	$subDiv.text('Бъдете подготвени!');
	$wrapper.append($subDiv);
}

