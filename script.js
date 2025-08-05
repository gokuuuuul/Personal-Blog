// scroll to top button
window.addEventListener('DOMContentLoaded', function() {
    const btn = document.createElement('button');
    btn.textContent = '↑ Top';
    btn.style.position = 'fixed';
    btn.style.bottom = '30px';
    btn.style.right = '30px';
    btn.style.padding = '0.5em 1em';
    btn.style.background = '#333';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';
    btn.style.display = 'none';
    btn.style.zIndex = '1000';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
        btn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
//referred gpt for scroll to top button