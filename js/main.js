chrome.cookies.getAll({},function ( cookies ){
	console.log(cookies)
})

chrome.bookmarks.getTree(function (node){
	
})

let client_id = "1081666905260-llr88v54hejkl9fu9dguq6e9oeh1pb8d.apps.googleusercontent.com"
let url = "https://accounts.google.com/o/oauth2/v2/auth"+
			"?scope=&response_type=token&client_id="+client_id+""+
			"&prompt=consent"
			
chrome.identity.getAuthToken({'interactive': true},function (token){
	console.log(token)
})