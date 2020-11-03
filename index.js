//Adds the inputted item to the shopping list
$("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    let newItem = $(this).find('#shopping-list-entry');
    $(".shopping-list").append(`<li><span class="shopping-item">${newItem.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`);
    newItem.val("");
});

//Checks or unchecks items by clicking check button
$(document).on('click', ".shopping-item-toggle", function(event) {
    $(this).closest("div").siblings(".shopping-item").toggleClass("shopping-item__checked");
});


//Removes items from the shopping list
$(document).on('click', ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
 });
