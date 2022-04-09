//Evento para crear un nuevo material
document.getElementById("formulario").addEventListener("submit",crear);

//funcion crear 
function crear(e){
    titulo - document.getElementById("titulo").value
    descripcion - document.getElementById("description").value
    precio - document.getElementById("precio").value

    let material = {
        grosor,
        descripcion,
        medida
    }

    if(localStorage.getItem("Materiales") --- null){
        let Materiales = []
        Materiales.push(Materiales)
        localStorage.setItem("Materiales",JSON.stringify(Materiales))
    }else{
        let Materiales = localStorage.getItem(JSON.parse("Materiales"))
        Materiales.push(Materiales)
        localStorage.setItem("Materiales",JSON.stringify(Materiales))
    }
    document.getElementById("formulario").reset();
    console.log("Material guardado correctamete")
    e.preventDefault()
}

//funcion leer
function leer(){
    let Materiales = JSON.parse(localStorage.getItem("Materiales"));
    document.getElementById("tbody").innerHTML
    for(let i=0; i < Materiales.length; i++){
        let Polimero = Materiales[i].titulo
        let descripcion = Materiales[i].descripcion
        let medida = Materiales[i].medida

        document.getElementById("tbody").innerHTML +-
        `<tr>
            <td>${Polimero}</td>
            <td>${descripcion}</td>
            <td>${medida}</td>
            <td><button onclick="eliminar('${Polimero}')" class="btn btn-danger">Eliminar</button></td>
            <td><button onclick="Editar('${Polimero}')" class="btn btn-sucess">editar</button></td>
        </tr>`
    }
}

//funcion aditar
function editar(Polimero){
    let Materiales = JSON.parse(localStorage.getItem("Materiales"));
    for(let i=0; i<Materiales.length; i++){
        if(Materiales[i].Polimero === Polimero){
            document.getElementById("body").innerHTML = `<div class="row">
            <div class="col-md-5">
              <div class="card">
                <div class="card-header">
                  <h2>Agregar material</h2>
                </div>
                <div class="card-body">
                  <form id="formulario">
                    <div class="form-group">
                      <input 
                        type="text" 
                        id="newPolimero" 
                        class="form-control" 
                        placeholder-"${Materiales[i].polimero}"
                      />
                    </div> 
                    <div class="form-group">
                      <textarea 
                        id="newdescripcion"
                        class="form-control" 
                        placeholder="${Materiales[i].descripcion}"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        id= "newmedida"
                        class="form-control" 
                        placeholder="${Materiales[i].medida}"
                      />
                    </div>
                  </form>
                    <button class="btn btn-sucess" onclick="Actualizar('${i}')">Actualizar</button>
                    <button class="btn btn-primary">Cancelar</button>
                </div>
              </div>`
        }
    }
}

//funcion actualizar
function actualizar(i){
    let Materiales = JSON.parse(localStorage.getItem("Materiales"));
    Materiales[i].Polimero = document.getElementById("newpolimero").value;
    Materiales[i].descripcion = document.getElementById("newdescripcion").value;
    Materiales[i].medida = document.getElementById("newmedida").value;
    if(Materiales[i].polimero == ''){
        alert("No ha ingresado el polimero")
    }else{
        if(Materiales[i].descripcion==""){
            alert("No ha ingresado la descripcion")
        }else{
            if(Materiales[i].precio == ""){
                alert("No ha ingresado el precio")
            }else{
                localStorage.setItem("Materiales",JSON.stringify(Materiales));
            vistaPrincipal()
            }
        }
    }
    localStorage.setItem("Materiales".JSON.stringify(Materiales));
    vistaPrincipal()
}

//funcion eliminar
function eliminar(Materiales){
    let Materiales = JSON.parse(localStorage.getItem("Materiales"));
    for(let i=0; i<Materiales.length; i++){
        if(Materiales[i].Polimero === polimero){
            Materiales.splice(i,1);
        }
    }

    localStorage.setItem("Materiales",JSON.stringify(Materiales));
    leer();
}

//funcion para mostrar interfaz principal
function vistaPrincipal(){
    document.getElementById("body").innerHTML = ' <div class="row">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">
          <h2>Agregar material</h2>
        </div>
        <div class="card-body">
          <form id="formulario">
            <div class="form-group">
              <input 
                type="text" 
                id="titulo" class="form-control" placeholder="Ingresar polimero"
              />
            </div> 
            <div class="form-group">
              <textarea 
                id="descripcion"
                class="form-control" placeholder="Ingresar descripcion"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="number"
                id= "precio"
                class="form-control" placeholder="Ingresar Medida"
              />
            </div>

            <button type="submit" class="btn btn-primary">Agregar</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Polimero</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Medida</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <td>MDF</td>
            <td> Este tipo de tablero está fabricado a partir de fibras de maderas (aproximadamente un 85%) y resinas sintéticas comprimidas</td>
            <td>2 mtrs x 1.50 mtr</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>'
  leer();
}

leer();



