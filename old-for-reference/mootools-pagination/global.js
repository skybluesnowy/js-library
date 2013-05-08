window.addEvent('domready', function(){
	// change the amount of files you want to index
	var filecount = 3;
	
	// Grab and  split up URL, relies on filenames following pageXXX.html structure
	var theURL = document.location.href;
	var theSplit = theURL.split('.html');
	var pageNum = theSplit[0].split('page');
	var thePage = pageNum[1];
	
	// Turn page name (number) to integer
	pageNumInt = thePage.toInt();
	
	// Dynamically write total file index to page
	document.id('total').set('html', filecount);

	// Dynamically write current file index to page
	document.id('current').set('html', thePage);
	
	// Add links for Previous button
	if (thePage != 1){
		document.id('previous').set('html', 'Previous');
		document.id('previous').addEvent('click', function(event){
			prevHref = pageNumInt-1;
			document.location.href = ('page' + prevHref + '.html');
		});
	}
	
	// Add links for Next button
	if (thePage != filecount){
		document.id('next').set('html', 'Next');
		document.id('next').addEvent('click', function(event){
			nextHref = pageNumInt+1;
			document.location.href = ('page' + nextHref + '.html');
		});
	} 
});