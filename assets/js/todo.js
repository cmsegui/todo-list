//make todo item look completed
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//delete todo item
$("ul").on("click", "span", function() {
  $(this).parent().fadeOut(500, function() {
  $(this).remove();
});
  event.stopPropagation();
})

//create a new todo item
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X</span> " + todoText +"</li>")
  }
})