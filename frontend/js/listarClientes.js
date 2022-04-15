



async function cargarClientes(){

    const request = await fetch('https://my.api.mockaroo.com/usuarios_basico.json?key=387f39a0', { //https://my.api.mockaroo.com/users.json?key=387f39a0
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await request.json();

    console.log(content);

    let usuario="";

      //se recorre el json content y se concatena la cadena usuario con la estructura html de la tabla
    for(user of content){
    let telefono = user.telefono == null ? "-" : user.telefono;
    //let botonEliminar = `<a href="#" onclick=deleteUsuario(${user.id}) class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>`
    let botones = `<button class="button-editar">Editar</button> <button class="button-eliminar">Eliminar</button>`
    usuario = usuario + `<tr><td>${user.nombre}</td><td>${user.apellido}</td><td>${telefono}</td><td>${user.email}</td><td>${botones}</td></tr>`
    //console.log(user.full_name);
    }


    document.querySelector('#tablaClientes tbody').outerHTML=usuario;

}

cargarClientes()