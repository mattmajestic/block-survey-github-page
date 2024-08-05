// Check if the user has a previously saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or default to dark mode
if (savedTheme === 'light') {
    document.body.classList.add('light');
    document.getElementById('theme-icon').textContent = '🌞'; // Set to sun icon
} else {
    document.body.classList.add('dark');
    document.getElementById('theme-icon').textContent = '🌜'; // Set to moon icon
}

// Toggle the theme and save the preference to localStorage
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('light')) {
        themeIcon.textContent = '🌞'; // Sun icon for light mode
        localStorage.setItem('theme', 'light'); // Save theme preference
    } else {
        themeIcon.textContent = '🌜'; // Moon icon for dark mode
        localStorage.setItem('theme', 'dark'); // Save theme preference
    }
});

// Load BlockSurvey data from JSON
fetch('data/bs-data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('survey-iframe').src = data.iframe_url;
        document.getElementById('results-button').href = data.results_url;
    })
    .catch(error => console.error('Error loading BlockSurvey data:', error));

// Load social media links from JSON
fetch('data/socials-data.json')
    .then(response => response.json())
    .then(data => {
        const socialIconsContainer = document.getElementById('social-icons');
        data.socials.forEach(social => {
            const a = document.createElement('a');
            a.href = social.url;
            a.target = '_blank';
            const img = document.createElement('img');
            img.src = social.icon;
            img.alt = social.name;
            img.classList.add('icon');
            a.appendChild(img);
            socialIconsContainer.appendChild(a);
        });
    })
    .catch(error => console.error('Error loading social media data:', error));

document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starContainer.appendChild(star);
    }
});