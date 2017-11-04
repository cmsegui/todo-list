//make list item look completed
$("li").click(function () {
  $(this).toggleClass("completed");
});

//delete list item
$("span").click(function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

