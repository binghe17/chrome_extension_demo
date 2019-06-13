if (opener) {
	window.addEventListener('message', onMessage, false)
}

function onMessage(e) {
	let { data } = e
	let dataType = typeof data
	if(dataType==='object' && dataType!==null) {
		if(data.type === 'exec' && data.script) {
			let tag = document.createElement('script')
			tag.textContent = data.script
			document.body.appendChild(tag)
			tag.remove()
		}
	}

}

//------------not running (send is not defined)

// function send(data) {
// 	opener.postMessage(data, '*')
// }

// function includeJS(url) {
// 	var s = window.document.createElement("script");
// 	s.src = url;//https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// 	window.document.head.appendChild(s);
// 	s.onload = function () {
// 		var t = "include ok!";
// 		console.log(t);
// 		$('<div>').text(t).prependTo('body').css({
// 			background: '#ccc',
// 			'font-size': '32pt'
// 		}).fadeOut(4000)
// 	}
// }