const inputField = document.querySelector('.search__field');


inputField.addEventListener('input', () => {
    let val = inputField.value.trim();
    let listItems = document.querySelectorAll('li');
    

    if (val != '') {
        listItems.forEach( (elem) => {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
            }
        });
    }
    else {
        listItems.forEach( (elem) => {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
});

const insertMark = (text, pos, len) => {
    return text.slice(0, pos) + '<mark>' + text.slice(pos, pos + len) + '</mark>' + text.slice(pos + len);
};
