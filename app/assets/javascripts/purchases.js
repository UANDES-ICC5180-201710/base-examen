// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//
$(document).on('turbolinks:load', function() {
  $('.btn-purchase').click(function() {
    var $btn = $(this);
    var activeClass = 'btn-success';
    function successCreate(response) {
      $btn.addClass(activeClass);
      $btn.html('Return');
      $btn.data('purchase-id', response.id);
    }

    function successDelete(response) {
      $btn.removeClass(activeClass);
      $btn.addClass('btn-primary');
      $btn.html('Buy');
    }

    if ($btn.hasClass(activeClass)) {
      var url = '/purchases/' + $btn.data('purchase-id') + '.json';
      $.ajax({
        type: 'DELETE',
        url: url,
        success: successDelete,
        dataType: 'json'
      });
    } else {
      $.ajax({
        type: 'POST',
        url: '/purchases.json',
        data: {
          purchase: {
            game_id: $btn.data('game-id')
          }
        },
        success: successCreate,
        dataType: 'json'
      });
    }
  });
});
