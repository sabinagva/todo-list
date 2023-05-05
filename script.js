console.log('jQuery setup')
$(document).ready(onReady);
function onReady() {
    //register event handler on form's submit button
    //when that button is clicked we will run handleSubmit function
    $('#submit-btn').on('click',handleSubmit)
    $('#to-do-list').on('click', '.delete-button', handleDelete)
}
let todoCount = 0;
function handleSubmit(event) {
    console.log('submit click');
    //prevent default form button behavior 
    //which is undesirable page refresh(makes our console.log disappear)
    event.preventDefault()
    todoCount++;
    $('#to-do-count').text(todoCount)

    //grab values within inputs
    //.val() is getter of value
    //.val('text') is a setter of value
    let toDoInput = $('#to-do-input').val();
    let authorInput = $('#author-input').val();

    console.log('to do:', toDoInput, 'author:', authorInput);

    //append values to the DOM
    //`${}`- helps us use js codes in html
    //text changes by overriding the value but append adds them together
    $('#to-do-list').append(`<li>${authorInput} needs to do ${toDoInput} <button class="delete-button">Delete</button></li>`)
    $('#to-do-input').val('');
    $('#author-input').val('');
      
}

function handleDelete() {
    //delete my list
    console.log('delete')
    $(this).parent().remove();
}