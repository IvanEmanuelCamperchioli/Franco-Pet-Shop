if (document.querySelector("#separador")) {
    
    const perro1 = document.querySelector("#perro1")
    const perro2 = document.querySelector("#perro2")
    const perro3 = document.querySelector("#perro3")
    const pez1 = document.querySelector("#pez1")
    const pez2 = document.querySelector("#pez2")
    const pez3 = document.querySelector("#pez3")
    const rata1 = document.querySelector("#rata1")
    const rata2 = document.querySelector("#rata2")
    const rata3 = document.querySelector("#rata3")

    function escuchadores(activo, ...desactivo) {
        activo.addEventListener('mouseenter', e => {
            activo.style.border = '1px solid black'
            desactivo.map(desactivado => {
                desactivado.style.border = ''
            })
        })
    }

    escuchadores(perro1, perro2, perro3, pez1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(perro2, perro1, perro3, pez1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(perro3, perro1, perro2, pez1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(pez1, perro2, perro3, perro1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(pez2, perro1, perro3, perro2, pez1, pez3, rata1, rata2, rata3)
    escuchadores(pez3, perro1, perro2, perro3, pez2, pez1, rata1, rata2, rata3)
    escuchadores(rata1, perro2, perro3, perro1, pez2, pez3, pez1, rata2, rata3)
    escuchadores(rata2, perro1, perro3, perro2, pez1, pez3, rata1, pez2, rata3)
    escuchadores(rata3, perro1, perro2, perro3, pez2, pez1, rata1, rata2, pez3)

}

if (document.querySelector("#accordionExample")) {

    const boton = document.querySelector("#letra")

    boton.addEventListener('click', () => {
        if (boton.innerText == 'Conozca nuestra historia...') {
            boton.innerText = 'Gracias por visitar nuestro sitio Web'
        } else {
            boton.innerText = 'Conozca nuestra historia...'    
        }
    })
}

///////////// Fin js Home - Inicio js Contacto

if (document.querySelector("#form")) {

    const boton = document.querySelector('#boton')
    const nombre = document.querySelector('#fname')
    const apellido = document.querySelector('#lname')
    const telefono = document.querySelector('#numero')

    boton.addEventListener('click', e => { 
        e.preventDefault()
        const userName = nombre.value
        const userLastName = apellido.value
        const userTel = telefono.value

        swal (`Hola ${userName} ${userLastName} nos comunicaremos al ${userTel} a la brevedad`, "gracias por contactarte con nosotros!",  "success")
    })
}

///////////// Fin js contacto - Inicio js Farmacia y Juguetes

if (document.querySelector("#bodyFarmer")) {

    var objectojuguetes = []


    var objetoFarmacos = []

const padre = document.querySelector('#padre')

// json.response.map(articulo =>



    fetch('https://apipetshop.herokuapp.com/api/articulos')
        .then(respuesta => respuesta.json())
        .then(json =>  {

            var datos = json.response
            console.log(datos)

                // renderizado de DOM
                    for (var i = 0; i < datos.length; i++) {
                        if (datos[i].tipo == "Medicamento") {
                        const imagen = document.createElement('img')
                        imagen.setAttribute('src', datos[i].imagen)
                        imagen.classList.add('card-img-top')
                        const caja = document.createElement('div')        
                        caja.classList.add('card')
                        caja.classList.add('sectionFarmer')
                        caja.classList.add('claseParaCartasFarmacia')
                        const otraCaja = document.createElement('div')
                        otraCaja.classList.add('card-body')
                        const precio = document.createElement('h5')
                        precio.classList.add('card-title')
                        precio.innerText = `$ ${datos[i].precio}`
                        const nombre = document.createElement('p')
                        nombre.classList.add('card-text')
                        nombre.innerText = datos[i].nombre
                        otraCaja.appendChild(precio)
                        otraCaja.appendChild(nombre)
                        caja.appendChild(imagen)
                        caja.appendChild(otraCaja)
                        padre.appendChild(caja)
                        }
                    }
                    // console.log(objetoFarmacos)

            }
    )


            
               
            
            

       
        
}

