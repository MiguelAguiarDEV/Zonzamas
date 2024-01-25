$(document).ready(function() {
    if(!$('.btn-exp').data('toggled')){
        console.log($('.btn-exp').data('toggled'));
        $('.btn-exp').data('toggled',true)
        $('.btn-exp').animate({
            rotate: '90deg'
        },500);
    }else{
        $('.btn-exp').data('toggled',false)
        $('.btn-exp').animate({
            rotate: '0deg'
        },500)  
    }
    $('.btn-add').click(function() {
        // Find the corresponding "hijos" ul
        var hijosList = $(this).closest('.dir').find('.hijos:first');
        // Append a new list item with the file name "prueba.txt" to the corresponding "hijos" ul
        hijosList.append('<ul class="fic"><img src="img/file.png" alt=""> prueba.txt</ul>');
    });

    $('.btn-exp').click(function() {
        // Toggle the visibility of child elements
        $(this).parent().siblings('.hijos').toggle(500);
        // Rotate the ">" button 90 degrees
        if(!$(this).data('toggled')){
            console.log($(this).data('toggled'));
            $(this).data('toggled',true)
            $(this).animate({
                rotate: '90deg'
            },500);
        }else{
            $(this).data('toggled',false)
            $(this).animate({
                rotate: '0deg'
            },500)  
        }
    });
    
});