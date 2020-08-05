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


    function escuchadores(activo, desactivo, desactivo2, des, des1, des2, rat, rat1, rat2) {
        activo.addEventListener('mouseenter', e => {
            activo.style.border = '1px solid black'
            desactivo.style.border = ''
            desactivo2.style.border = ''
            des.style.border = ''
            des1.style.border = ''
            des2.style.border = ''
            rat.style.border = ''
            rat1.style.border = ''
            rat2.style.border = ''
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
