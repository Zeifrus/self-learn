$(function () {
    $image_crop = $('#image_demo').croppie({
        enableExif: true,
        viewport: {
          width:130,
          height:130,
          type:'square' //circle
        },
        boundary:{
          width:150,
          height:150
        }
    });

    $('#upload_image').on('change', function(){
        var reader = new FileReader();
        reader.onload = function (event) {
          $image_crop.croppie('bind', {
            url: event.target.result
          }).then(function(){
            console.log('jQuery bind complete');
          });
        }
        reader.readAsDataURL(this.files[0]);
        $('#uploadimageModal').modal('show');
    });

    $('.crop_image').click(function(event){
      var user_id = $('[data-dados]').data('user-id');
        $image_crop.croppie('result', {
          type: 'canvas',
          size: 'viewport'
        }).then(function(response){
          $.ajax({
            url:  imageUpload.ajaxurl,
            type: "POST",
            data: {
                action: 'image_user',
                user_id: user_id,
                image: response
            },
            success:function(e)
            {
                var data = $.parseJSON(e);
                alerts(data.msg,data.class);
                $('#uploadimageModal').modal('hide');
                if (data.url) {
                    $("#profileDisplay").attr("src",data.url+'?rand=' + Math.random());
                }
            }
          });
        })
    });

});

function alerts(mensagem, tipo, tempo) {
    tempo = tempo ? (parseInt(tempo) * 1000) : 5000;
    tipo = tipo ? tipo : '';
    $("#alert").append('<div class="alert_user ' + tipo + '"><span>' + mensagem + '</span></div>');

    setTimeout(function () {
       $(".alert_user").first().remove()
    }, tempo);
}

function triggerClick(e) {
  document.querySelector('#upload_image').click();
}