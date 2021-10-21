## INFO

- Mostrar texto según condición RECIBIDA

## DISPLAY

-renderiza un input

- Renderizar número RECIBIDO

## ACTIONS

- RECIBE un boton y lo renderiza
- segun los parametros RECIBIDOS Crea los componentes action, y les pasa su texto, su funcion y su clase

## ACTION

- RECIBIR una clase (active/inactive)
- RECIBIR una función
- RENDERIZA texto recibido

## KEYBOARD

- RENDERIZA TECLAS
- Pasa texto a cada Key
- Pasar una función a cada Key
- RECIBE un estado que desabilita las teclas

## KEY

- Mostrar un texto RECIBIDO
- RECIBIR una función que se ejecuta al hacer click

## APP

    -RENDERIZA todos los componentes
    -Crea array numeros vacio
    -Crea un estado al array numeros y pasarselo al Display,
    -Añadir al display un maximo de numeros que acepta

    -Crear funcion de llamada activada al hacerle click al boton llamada
      +Al llamarse debe:
        -desailitar el teclado pasandole una clase/elemento a keyboard (revisar)
        -enviar a info una condicion para que se renderice
        -enviar clase active al actions
        -activar el contador de tiempo
        -restaurar el estado inicial de display

    -Crear funcion de colgar, llamada a traves del click en el boton o al acabarse el temporizador
      -debe restaurar todos los elementos al inicio
        + cambiar clase a inactive de boton colgar y a active el de llamar
        + borrar la info/o que desaparezca (revisar)
        + activar teclado

    -Crear funcion borrar
      -borrar el ultimo numero añadido al array de numeros

    -
