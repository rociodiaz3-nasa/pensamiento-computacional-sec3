# Circle in a Circle - Vasili Kandinski 1923
![una imagen](https://www.wassilykandinsky.net/images/works/247.jpg?version=7) *Imagen referencial*

## Proceso de trabajo
- Elegí esta obra porque su composición desordenada de círculos en su mayoria con su paleta de colores me llama mucho la atención. Pensé que era un reto interesante que quería lograr, es una obra llamativa y con suficiente desafío como para que no fuera aburrido el proceso de creación.
- La analicé especialmente en las dos franjas diagonales del fondo, crea una sensación de perspectiva que te mete de lleno en el cuadro. Al recrearlas en código, me di cuenta de que esa "X" descentrada es la que sostiene toda la energía de la composición, haciendo que los círculos no parezcan pegados sino que realmente estén flotando en un espacio con profundidad.
- Traduje las coordenadas digitalmente. En Photoshop cree un lienzo de el mismo tamaño que en P5js. (600 x 600 px) y agregué la obra. de tal modo que al usar la grilla y líneas guía de la regla cada coordenada me salía exacto el lugar donde estaba. Así lo repliqué exactamente en el lienzo. Con los círculos algo parecido. Hacía un círculo del tamaño del que quería repplicar y con "Información" me mostaba la coordenada exacta como el tamaño. 
- Una de las mayores dificultas que fue:
1. Calcular bien las coordenadas, ver que calzaran exactamente en su lugar al principio y confiar en que estaba bien posicionada, mirar por mucho tiempo para ver si calzaban. Con el tiempo me acostumbré y se me hizo más fácil.
2. Saber separar todo correctamente, de modo a que los comandos que anotaba solo afectaran a lo que yo quería y no todo lo demás que estaba abajo de esa sección. Más específicamente, tuve dificultades en los comandos "fill()" donde solo quería que se rellenara un círculo en específico pero se rellenaban otros atrás los cuales no llevaban ese color. Lo mismo con el "strokeWeight()". Al final lo solucioné usando los comandos "push()", "pop()", "noFill()" y strokeWeight(0)" Al principio era tedioso porque se me olvidaba ponerlos y al principio se me dificultaba saber como se usban correctamente. Compañeros de universidad me ayudaron a resolverlo3.
3. poder lograr la x de atrás, con los colores celeste y amarillo. el comando "quad()" se me dificulta demasiado por la cantidad de coordenadas, aún más porque son formas irregulares que se estrechan y comprimer, no ues un cuadrado normal. Al fina¿l lo solucioné usando la opción de "Información" en Photoshop que te muestra la coordenada X,Y exacta donde está. De igual forma saber de que punto guiarme y por cual empezar me demoró bastante.  

## PROCESO imagenes

![una imagen](https://github.com/rociodiaz3-nasa/pensamiento-computacional-sec3/blob/8ee3bc655cfa762d455317e70dd66143ef0f8645/1.png) 
