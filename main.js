alert('hola')
if('serviceWorker' in navigator){
    navigator.serviceWorker
            .register('sw.js')//ruta del archivo Service Worker
            .then(function  (registration){
                //El service Worker se ha registrad correctamente
        console.log('Service worker registrado con exito', registration);
    })
            .catch(function (error){
                //Hubo un error al registrar el Service Worker
        console.error('Error al registrar el Service Worker', error);
    });
}else{
    console.error('Error no soporta el sevice Worker');
}
