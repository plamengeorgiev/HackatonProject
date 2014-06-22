function onHomeBtnClick(){
	var $wrapper = $('#wrapper');
	$wrapper.empty();
	var $innerDiv = $('<div/>');
	$innerDiv.attr('id', "innerDiv");
	
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
	
	$innerDiv.append($headlineDiv);
	$innerDiv.append($picture1);
	$innerDiv.append($picture2);
	$innerDiv.append($picture3);
	$innerDiv.append($picture4);
	$subDiv.text('Бъдете подготвени!');
	$innerDiv.append($subDiv);
	$wrapper.append($innerDiv);
}

