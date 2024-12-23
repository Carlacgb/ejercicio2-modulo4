# Ejercicio práctico 2 - Módulo 4

## Manejo Avanzado del DOM y Elementos ReactJS para el Proyecto del Hospital
Se profundiza en el manejo del DOM virtual, el uso de referencias para manipular elementos del DOM, y la integración de componentes
avanzados en ReactJS. Se implementa funcionalidades avanzadas en el sistema del hospital, como la gestión del DOM en el cliente y servidor, la optimización de rendimiento, y el uso de fragmentos y componentes de orden superior para mejorar la modularidad y eficiencia del
sistema.

### 1. Manejo del DOM Virtual en ReactJS
1. Cuando un componente de React se renderiza por primera vez, React crea una copia del DOM en memoria (el DOM Virtual).
2. React detecta los cambios realizados en los componentes y crea un nuevo DOM virtual basado en los nuevos cambios, compara estos cambios con el anterior DOM virtual y actualiza las partes del DOM real que realmente han cambiado.
En conclusión esto permite una renderización mucho más rápida, especialmente cuando la interfaz contiene muchos elementos dinámicos (listados, formularios). Esto significa que la aplicación se siente más fluida.

- Se implementa useEffect para gestionar la actualización del DOM al cargar los datos de doctores y lista de servicios en el componente principal app.jsx


### 2. Creación y Uso de Referencias en React

### 3. Uso de Fragmentos y Contexto en ReactJS

### 4. Verificación de Tipos con PropTypes

### 5. Uso de Componentes de Orden Superior y Portales

### 6. Optimización de Rendimiento y Profiler en ReactJS
