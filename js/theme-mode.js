const selectedTheme = document.querySelector('#theme');
const body = document.body;


const savedTheme = localStorage.getItem('theme');


if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    selectedTheme.value = 'dark';
} else {
    body.classList.remove('dark-theme');
    selectedTheme.value = 'light';
}


selectedTheme.addEventListener('change', (event) => {
    const theme = event.target.value;

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});