



let $ = document;
let atuoComleteWrapper = $.querySelector('.search-input');
let searchInputElem = $.querySelector('input');
let autoComleteBox = $.querySelector('.autocom-box');

searchInputElem.addEventListener('keyup', () => {
    let searchValue = searchInputElem.value;

    if (searchValue) {
        atuoComleteWrapper.classList.add('active');

        let fillteredWords = suggestions.filter((word) => {
            return word.toLowerCase().includes(searchValue.toLowerCase());
        });
        suggestionsWordsGenerator(fillteredWords);
        // console.log(fillteredWords);
    } else {
        atuoComleteWrapper.classList.remove('active');
    }
});

function suggestionsWordsGenerator(wordsArray) {
    let listItemsArray = wordsArray.map((word) => {
        return '<li>' + word + '</li>';
    });

    let customListItems;
    if (!listItemsArray.length) {
        customListItems = '<li>' + searchInputElem.value + '</li>';
    } else {
        customListItems = listItemsArray.join('')
    }

    autoComleteBox.innerHTML = customListItems;

    select();
}


function select() {
    let allListItems = autoComleteBox.querySelectorAll('li');
    allListItems.forEach((wordItem) => {
        wordItem.addEventListener('click', (event) => {
            searchInputElem.value = event.target.textContent;
            atuoComleteWrapper.classList.remove('active');

        })
    });
}
