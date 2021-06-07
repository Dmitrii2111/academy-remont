$(document).ready(function() {
  $('.dot').on('click', function(){
    $(this).addClass('active-dot')
    $(this).siblings().removeClass('active-dot')
    var activeNumber = $(this).attr('id')
    $('.active-number').text(activeNumber)
  })
})