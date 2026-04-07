document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.wrapper a');

    links.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            link.style.backgroundColor = '#4b399c';
            link.style.color = '#fff';
            alert(`You clicked Link ${index + 1}`);
        });
    });
});
