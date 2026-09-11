let failedAttempts = 0;

document.getElementById('enterSystem').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message');
    const displayImage = document.getElementById('displayImage');
    const maxAttempts = 3;
    let imageName = 'locked.jpg';

    if (username === 'admin' || username === 'bthompson' || username === 'lthompson') {
        failedAttempts = 0;
        message.textContent = 'Access granted.';
        imageName = 'unlocked.jpg';
    } else {
        failedAttempts += 1;
        const attemptsLeft = maxAttempts - failedAttempts;

        if (attemptsLeft > 0) {
            message.textContent = `Access denied. Wrong attempts: ${failedAttempts}. You have ${attemptsLeft} attempts left.`;
        } else {
            document.getElementById('enterSystem').disabled = true
            message.textContent = 'Machine blocked. Too many wrong attempts made.';
        }

        imageName = 'locked.jpg';
    }

    if (imageName) {
        displayImage.src = imageName;
        displayImage.alt = imageName === 'unlocked.jpg' ? 'Access granted' : 'Access denied';
        displayImage.hidden = false;
    }

    console.log(message.textContent);
});

