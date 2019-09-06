let mousePosition = {
    x: 0, 
    y: 0
};

let drawId;

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };

// let onMove = () => {};
window.addEventListener('mousemove', function(mousemoveEvent){
    mousePosition.x = mousemoveEvent.pageX;
    mousePosition.y = mousemoveEvent.pageY;
    console.log (mousemoveEvent.pageX, mousemoveEvent.pageY);
});

console.log (mousemoveEvent.pageX, mousemoveEvent.pageY);