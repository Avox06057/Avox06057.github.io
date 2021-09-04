const body = document.getElementById("body")
const myData = document.getElementById('myData')
const story = document.getElementById('storyView');
const storyTitle = document.getElementById('storyTitle')
const storyName = document.getElementById('storyName')
const storyCon = document.getElementById('storyContent')
const storyView = document.getElementById('storyView')
const navbar = document.getElementById('story_navbar')

function openStory(id) {
	story.style.height= '100%';
	body.style.overflow = 'hidden';
	getData(id)
}
	
function closeStory() {
	story.style.height= '0';
	body.style.overflow = 'visible';


}

function scrollHide() {
	 var scroll = storyView.scrollTop;
	 if (scroll > 170) {
		 navbar.style.opacity = 0;
	 }
	 else {
		 navbar.style.opacity = 1
	 }
}
function getData(id) {
	fetch('../data/data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			appendData(data);
		})
		.catch(function (err) {
			console.log(err);
		});

	function appendData(data) {
		var mainContainer = document.getElementById('myData')
		for (var i = id; i < (id+1); i++) {
			let ts = [
				storyTitle.classList.add('dataTitle'),
				storyTitle.innerHTML = data[i].title,
				storyName.classList.add('dataName'),
				storyName.innerHTML = data[i].name,
				storyCon.classList.add('dataContent'),
				storyCon.innerHTML = data[i].content,
			]
				
			mainContainer.appendChild(ts);
		}
	}
}
