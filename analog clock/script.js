function rotateClockHands() {
    const now = new Date();
    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');
  
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
  
    const secondRotation = (second / 60) * 360;
    const minuteRotation = ((minute + second / 60) / 60) * 360;
    const hourRotation = ((hour + minute / 60) / 12) * 360;
  
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);
  