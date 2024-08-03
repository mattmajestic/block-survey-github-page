document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark')) {
        themeIcon.textContent = '🌜'; // Moon icon for dark mode
    } else {
        themeIcon.textContent = '🌞'; // Sun icon for light mode
    }
});
