$(window).bind("pageshow", function() {
    var form = $('form')
    form[0].reset()
})

$('#upload').hide()

$('#browse').on('change', function() {
    $('#upload').fadeIn(1000)
})