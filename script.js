// Check if the user has a previously saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or default to dark mode
if (savedTheme === 'dark' || !savedTheme) {
    document.body.classList.add('dark');
    document.getElementById('theme-icon').textContent = '🌜'; // Set to moon icon
}

// Toggle the theme and save the preference to localStorage
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark')) {
        themeIcon.textContent = '🌜'; // Moon icon for dark mode
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
        themeIcon.textContent = '🌞'; // Sun icon for light mode
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
});
