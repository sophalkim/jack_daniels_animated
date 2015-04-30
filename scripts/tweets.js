var tweet = document.getElementById('moving-tweets');
tweet.addEventListener('webkitTransitionEnd', function( event ) {
	alert("Finish animation");
}, false);