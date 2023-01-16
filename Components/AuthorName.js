var imgSideText = document.getElementById('imgSideText');
var condition = true;

function showName(condition) {
    if (condition == true) {
        return ($('img').each(function(){
            var area = $(this),
                name = area.attr('alt'),
                authorName = document.getElementById('authorName');
            area.mouseover(function(){
                authorName.innerHTML = name;
                authorName.style.transition = 'all 1s'
                authorName.style.width= '200px'
            }).mouseleave(function(){
                authorName.innerHTML = '';
                authorName.style.width = "0px";
                authorName.style.transition = " all 0.5s";
            });
        }));
    } else {
        return ($('img').each(function(){
            var area = $(this),
                name = area.attr('alt'),
                authorName = document.getElementById('authorName');
            area.mouseover(function(){
                authorName.innerHTML = '';
                authorName.style.width = "0px";
            })
        }))
    }
    
}
imgSideText.onclick = function() {   
    if (condition == true) {     
        showName(condition);
        document.getElementById('imgSideText').innerHTML = 'Hide'
        condition = false;
    } else if (condition == false) {
        showName(condition);
        document.getElementById('imgSideText').innerHTML = 'Show'
        condition = true;
    }

}