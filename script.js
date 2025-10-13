const buttons = document.querySelectorAll('.filter-button');
const boxes = document.querySelectorAll('.items');
const searchBox = document.querySelector('#search');

searchBox.addEventListener('onkeyup', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    boxes.forEach((box) => {
        const data = box.dataset.item;
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
    buttons[0].classList.add('btn-all');
});



function setActiveBtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-all');
    });
    e.target.classList.add('btn-all');
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        const btnFilter = e.target.dataset.filter;
        boxes.forEach((box) => {
            if (btnFilter === 'all') {
                box.style.display = "block";
            } else {
                const boxFilter = box.dataset.item;
                if (btnFilter === boxFilter) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            }
        });
    });
});