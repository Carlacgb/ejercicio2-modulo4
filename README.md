# Ejercicio práctico 2 - Módulo 4

## Manejo Avanzado del DOM y Elementos ReactJS para el Proyecto del Hospital
Se profundiza en el manejo del DOM virtual, el uso de referencias para manipular elementos del DOM, y la integración de componentes
avanzados en ReactJS. Se implementa funcionalidades avanzadas en el sistema del hospital, como la gestión del DOM en el cliente y servidor, la optimización de rendimiento, y el uso de fragmentos y componentes de orden superior para mejorar la modularidad y eficiencia del
sistema.

### 1. Manejo del DOM Virtual en ReactJS
1. Explica cómo ReactJS utiliza el DOM virtual para mejorar el rendimiento de la
interfaz del hospital (secciones como listado de doctores o servicios).
- Cuando un componente de React se renderiza por primera vez, React crea una copia del DOM en memoria (el DOM Virtual).
- React detecta los cambios realizados en los componentes y crea un nuevo DOM virtual basado en los nuevos cambios, compara estos cambios con el anterior DOM virtual y actualiza las partes del DOM real que realmente han cambiado.
En conclusión esto permite una renderización mucho más rápida, especialmente cuando la interfaz contiene muchos elementos dinámicos (listados, formularios). Esto significa que la aplicación se siente más fluida.

2. Se implementa useEffect para gestionar la actualización del DOM al cargar los datos de doctores y lista de servicios en el componente principal app.jsx


### 2. Creación y Uso de Referencias en React
- Se implementa callBack y se enfoca los campos del formulario cuando el usuario esta interactuando en cada celda.
- Se implementa el context en el componenten principal con el HospitalContext.Provider. 

### 3. Uso de Fragmentos y Contexto en ReactJS
- Se implementa el uso deFragmentos (<React.Fragment>) en el componente principal App.jsx. 

### 4. Verificación de Tipos con PropTypes
- Se implementa PropTypes en el componente DoctorCard. Se verifica en la consola al ingresar datos incorrectos en el arreglo de doctores que está en App.jsx
- se intala PropTypes para implementar

### 5. Uso de Componentes de Orden Superior y Portales
- Se crea el componente withModal, dentro de la carpeta hoc y un componente Modal.jsx dentro de la carpeta componente. Se activa al hacer click sobre cada card de doctor.


### 6. Optimización de Rendimiento y Profiler en ReactJS
- Se implementa en el componente principal Profiler, memo. Y se puede verificar en la consola.
