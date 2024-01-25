$(document).ready(function() {

    function rotar(elemento) {
        if(!$(elemento).data('toggled')){
            console.log($(elemento).data('toggled'));
            $(elemento).data('toggled',true)
            $(elemento).animate({
                rotate: '90deg'
            },500);
        }else{
            $(elemento).data('toggled',false)
            $(elemento).animate({
                rotate: '0deg'
            },500)  
        }
    }
    rotar('.btn-exp');

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
        rotar(this);
    });
});