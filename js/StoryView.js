const story = document.getElementById('storyTop');
const storyCon = document.getElementById('storyCon')
const myData = document.getElementById('myData')
const body = document.getElementById("body")

function openStory(id) {
	story.style.height= '100%';
	body.style.overflow = 'hidden';
	getData(id, story)
}
	
function closeStory() {
	story.style.height= '0';
	myData.innerHTML = '';
	body.style.overflow = 'visible';
}

function getData(id, story) {
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
			var name = data[i].name;
			let ts = [
			story.classList.add('data'),
			story.innerHTML = "Title: " + name + data[i].title]
			mainContainer.appendChild(ts);
		}
	}
}
