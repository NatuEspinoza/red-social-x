
$(document).ready(function() {
  /**
   * Función para modal de busqueda,filtro y agregar contactos
   */
   /*
  $(function() {
    /* BOOTSNIPP FULLSCREEN FIX 
    if (window.location == window.parent.location) {
      $('#back-to-bootsnipp').removeClass('hide');
    }


    $('[data-toggle="tooltip"]').tooltip();

    $('#fullscreen').on('click', function(event) {
      event.preventDefault();
      window.parent.location = "http://bootsnipp.com/iframe/4l0k2";
    });
    $('a[href="#cant-do-all-the-work-for-you"]').on('click', function(event) {
      event.preventDefault();
      $('#cant-do-all-the-work-for-you').modal('show');
    })

    $('[data-command="toggle-search"]').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('hide-search');

      if ($(this).hasClass('hide-search')) {
        $('.c-search').closest('.row').slideUp(100);
      } else {
        $('.c-search').closest('.row').slideDown(100);
      }
    })

    $('#contact-list').searchable({
      searchField: '#contact-list-search',
      selector: 'li',
      childSelector: '.col-xs-12',
      show: function(elem) {
        elem.slideDown(100);
      },
      hide: function(elem) {
        elem.slideUp(100);
      }
    })
  });  
 

/**
 * Función para los post
 */


  /**
   * Función para modal de los trailer
   */
   
   $('#watch-video').on('click', function(e) {
     e.preventDefault();
     $('#video-modal').show();
});





// funcion para agregar comentarios

    $('#share').click(function(){
    	console.log("hola");
    var comentario= $('#comment').val();
    $('#comment').val("");
    $("#nuevoComentario").append("<div class='contComentario'>" + comentario + "</div>");

  });


/*para pasar por el corazon y hacer clic */


});


/*funcion para scroll de contactos */


