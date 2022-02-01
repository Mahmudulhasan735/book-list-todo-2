const bookList = document.querySelector('#book_list');
const divGroup = document.querySelector('.div_group');
const title_input = document.querySelector('.title_input');
const author_input = document.querySelector('.author_input');
const year_input = document.querySelector('.year_input');
const btn = document.querySelector('#btn');
const book_list = document.querySelector('.book_list');

btn.addEventListener('click',(e)=>{
    e.preventDefault();

    if (title_input.value== '' || author_input.value== '' || year_input.value == '') {
        alert('please fill all the input');
    }else{
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title_input.value;
        newRow.appendChild(newTitle)

        const newAuthor = document.createElement('th');
          newAuthor.innerHTML = author_input.value;
        newRow.appendChild(newAuthor)

        const newYear = document.createElement('th');
        newYear.innerHTML = year_input.value;
        newRow.appendChild(newYear)
        
        book_list.appendChild(newRow)

    }
})