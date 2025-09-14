const noButton = document.getElementById("runaway-btn");

const moveNoButton = () => {
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

const updateEmoji = (event) => {
    const buttonRect = noButton.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));

    let emoji = "🙂 Clicky Button"; 

    if (distance <= 20) {
        emoji = "💀 Clicky Button"; 
    } else if (distance <= 100) {
        emoji = "😱 Clicky Button"; 
    } else if (distance <= 200) {
        emoji = "☹️ Clicky Button"; 
    }

    noButton.innerText = emoji;
}


noButton.addEventListener('click', moveNoButton);
noButton.addEventListener('mouseenter', moveNoButton);
document.addEventListener('mousemove', updateEmoji);


const updateTime = () => {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 5);

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    
    if (hours > 12) {
        hours = hours - 12;
    }
    hours = hours.toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;

    document.getElementById("current-time").innerText = timeString;
}

setInterval(updateTime, 1000);

updateTime();
document.body.addEventListener('click', function(e) {
    const footprint = document.createElement('div');
    footprint.classList.add('footprint');
    
    footprint.style.left = `${e.pageX - 25}px`; 
    footprint.style.top = `${e.pageY - 25}px`;   // Adjust for half of the footprint size (50px/2)
    
    document.body.appendChild(footprint);
  });
  