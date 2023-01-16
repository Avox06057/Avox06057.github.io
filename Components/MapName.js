function openMapName() {
    document.getElementById("myMapName").style.width = "250px";
}
function closeMapName() {
    document.getElementById("myMapName").style.width ="0"
}
$('area').each(function(){
    var area = $(this),
        name = area.attr('alt'),
        mapName = document.getElementById('mapSideText');
    area.mouseover(function(){
        mapName.innerHTML = name;
        mapName.style.transition = 'all 1s'
        mapName.style.width= '200px'
    }).mouseleave(function(){
        mapName.innerHTML = '';
        mapName.style.width = "0px";
        mapName.style.transition = " all 0.5s";
    });
});