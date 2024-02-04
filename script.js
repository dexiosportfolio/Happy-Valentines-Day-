const dd = document.getElementById('dd');
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const func = () => {
    const today = Date.now();
    const currentYear = new Date().getFullYear();
    const newdate = new Date(currentYear, 1, 14, 0, 0, 0); // February is month 1 in JavaScript (0-indexed)
    
    const diff = newdate - today;
    
    if (diff <= 0) {
        // Timer has run out, show a popup message with a button
        clearInterval(g); // Stop the timer
        const message = "Happy Valentine's Day, my Baby Loveyyy! Click mo yong Ok babyy koooo hihihihi";
        
        // Create a confirmation dialog with a button
        if (confirm(message)) {
            // If the user clicks Yes, navigate to the desired website
            window.open('next.html', '_blank'); // Replace 'https://example.com' with your desired URL
        }
        
        return;
    }
    
    const secMilli = 1000;
    const minMilli = secMilli * 60;
    const hourMilli = minMilli * 60;
    const dayMilli = hourMilli * 24;
    
    const dayDiff = Math.floor(diff / dayMilli);
    const hrsDiff = Math.floor((diff % dayMilli) / hourMilli);
    const minDiff = Math.floor(((diff % dayMilli) % hourMilli) / minMilli);
    const secDiff = Math.floor((((diff % dayMilli) % hourMilli) % minMilli) / secMilli);
    
    dd.innerHTML = dayDiff;
    hr.innerHTML = hrsDiff;
    min.innerHTML = minDiff;
    sec.innerHTML = secDiff;
}

var g = setInterval(() => func(), 1000);
