// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

    var height = $("#input_height").val();
    var width = $("#input_height").val();
    var color = $('#colorPicker').val();
    $("#input_height").change(function(){
        height = $( this ).val();
    });

    $("#input_width").change(function(){
        width = $( this ).val();
    });

    $("#colorPicker").change(function(){
        color = $( this ).val();
    });
    $('input[type="submit"]').click(makeGrid);

    function makeGrid(evt) {
            evt.preventDefault();
            $('#pixel_canvas').find('*').remove();
            for(var i = 0; i < height; i++){
                $('#pixel_canvas').append("<tr> </tr>");
                for(var j = 0; j < width; j++){
                    $('tr').last().append("<td> </td>");
                }
            $('td').click(function(){
                $( this ).css("background-color", color);
            });
        };
    }

