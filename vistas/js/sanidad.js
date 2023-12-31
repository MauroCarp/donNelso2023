const showHideCaravana = (idAplicacion,idCaravana)=>{

    let inputAplicacion = document.getElementById(idAplicacion);
    
    if(inputAplicacion)
    
        inputAplicacion.addEventListener('change',()=>{
    
            let value = inputAplicacion.value;
            
            let inputCaravana = idCaravana.replace('input','').replace('C','c')

            let editarValido = inputCaravana.indexOf('Editar')
            
            let btnSanidad = (editarValido == -1) ? 'btnSanidad' : 'btnSanidadEditar'
            
            if(value != 'general'){

                $(`#${idCaravana}`).show();

                $(`#${inputCaravana}`).attr('required','true');
                
                $('#caravanaSanidad').html('')

                let tipo = localStorage.getItem('animalSanidad');

                cargarCaravanaBuscar(tipo,'caravanaSanidad')

            }else{

                $(`#${inputCaravana}`).removeAttr('required')
                $(`#${idCaravana}`).hide();
                $(`#${btnSanidad}`).removeAttr('disabled')


            }

    
        });

}

showHideCaravana('aplicacionSanidad','inputCaravanaSanidad');

showHideCaravana('aplicacionSanidadEditar','inputCaravanaSanidadEditar');

$('a[href="sanidad"]').on('click',()=>{

    localStorage.setItem('animalSanidad','cerdo');
    
});

$(".tablaSanidad").on("click", ".btnEliminarSanidad", function(){

    let idSanidad = $(this).attr("idSanidad");

    new swal({
        title: '¿Está seguro de borrar el Registro?',
        text: "¡Si no lo está puede cancelar la accíón!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, borrar registro!'
    }).then(function(result){
    
        if(result.value){
    
        window.location = `index.php?ruta=sanidad&idSanidad=${idSanidad}`;
    
        }
    
    })
    
});


$('.tablaSanidad').on('click','.btnEditarSanidad',function(){

    let idSanidad = $(this).attr("idSanidad");

    let data = `accion=porId&idSanidad=${idSanidad}`;

    let url = 'ajax/sanidad.ajax.php';

    $.ajax({
        method: 'post',
        url,
        data,
        success:function(response){

            let respuesta = JSON.parse(response);
            console.log(respuesta);
            
            $('#idSanidadEditar').val(respuesta[0].idSanidad)
            $('#animalSanidadEditar').val(respuesta[0].animal)
            $('#fechaSanidadEditar').val(respuesta[0].fecha)
            $('#fechaSanidadEditar').val(respuesta[0].fecha)
            $('#comentariosSanidadEditar').val(respuesta[0].comentarios)
            $('#costoVeterinarioEditar').val(respuesta[0].gastoVet)

            optionSelected('motivoSanidadEditar',respuesta[0].motivo)
            
            optionSelected('aplicacionSanidadEditar',respuesta[0].aplicacion)

            if(respuesta[0].aplicacion == 'individual') 
                 $('#inputCaravanaSanidadEditar').show()
                 $('#caravanaSanidadEditar').val(respuesta[0].caravana)


        }

    });

});

$('.tabs-sanidad li a').on('click',(evt)=>{
    
    let animal = evt.target.hash.replace('#','');
        
    $('#animalSanidad').val(animal);

    localStorage.setItem('animalSanidad',animal)

    $('#aplicacionSanidad').val('general')

    $(`#inputCaravanaSanidad`).removeAttr('required')
    $(`#inputCaravanaSanidad`).hide();
    
});

$('.caravanaSanidad').on('change',(evt)=>{

    let caravana = evt.target.value

    comprobarCaravana(caravana);
    
})

const comprobarCaravana = (caravana,editar)=>{

    let url = 'ajax/sanidad.ajax.php'

    let tipo = localStorage.getItem('animalSanidad')

    let data = `tipo=${tipo}&caravana=${caravana}`
    
    let idAplicacion = 'aplicacionSanidad'
    let idBtn = 'btnSanidad'

    if(editar){
        
         idAplicacion = 'aplicacionSanidadEditar'
         idBtn = 'btnSanidadEditar'
        
    } 
    
    $.ajax({
        method:'post',
        url,
        data,
        success:(response)=>{

            response = JSON.parse(response);

            if($(`#${idAplicacion}`).val() == 'individual' && response.caravanaValida == 0){

                new swal({
    
                    icon: "error",
                    title: `Caravana Invalida. Esta caravana de ${capitalizarPrimeraLetra(tipo)} no esta registrada`,
                    showConfirmButton: true,
                    confirmButtonText: "Cerrar"
        
                })
                .then(()=>{

                    $(`#${idBtn}`).attr('disabled','true')
                    
                });
                
            }else{
                
                $(`#${idBtn}`).removeAttr('disabled')
            
            }

        }

    })

}



$(()=>{
        
    let animal = localStorage.getItem('animalSanidad');

    $('#animalSanidad').val(animal);
    
    $(`#tab${capitalizarPrimeraLetra(animal)}`).tab('show');

    
});

