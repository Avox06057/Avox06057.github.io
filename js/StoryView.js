const story = document.getElementById('storyTop');
const storyTitle = document.getElementById('storyTitle')
const storyName = document.getElementById('storyName')
const storyCon = document.getElementById('storyContent')
const myData = document.getElementById('myData')
const body = document.getElementById("body")

function openStory(id) {
	story.style.height= '100%';
	body.style.overflow = 'hidden';
	getData(id, storyTitle, storyCon)
}
	
function closeStory() {
	story.style.height= '0';
	myData.innerHTML = '';
	body.style.overflow = 'visible';
}

function getData(id, storyTitle, storyCon) {
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
				storyTitle.innerHTML = "Title: " + data[i].title,
				storyName.classList.add('dataName'),
				storyName.innerHTML = "Name: " + data[i].name,
				storyCon.classList.add('dataContent'),
				storyCon.innerHTML = "Content: " + data[i].content,
				
			]
				
			mainContainer.appendChild(ts);
		}
	}
}
