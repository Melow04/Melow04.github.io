function changeColor(day) {
    const colors = {
        Monday: '#cf1717',
        Tuesday: '#17cf17',
        Wednesday: '#1717cf',
        Thursday: '#cfcf17',
        Friday: '#cf17cf',
        Saturday: '#17cfcf',
        Sunday: '#6339c7'
    };
    const box = document.querySelector('.box');
    box.style.transform = 'translateY(-3000px)';
    setTimeout(() => {
        box.style.transition = 'transform 0.5s ease-in, border-color 0.5s ease-in';
        box.style.transform = 'translateY(0px)';
        box.style.borderColor = colors[day];
    }, 300);
}