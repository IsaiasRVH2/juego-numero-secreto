# 🎯 Juego del Número Secreto

Un juego interactivo desarrollado en JavaScript donde el usuario debe adivinar un número secreto generado aleatoriamente entre 1 y 10.

## 📋 Descripción

Este proyecto forma parte del curso de **Lógica de Programación** de Oracle Next Education. Es un juego web donde el usuario intenta adivinar un número secreto, recibiendo pistas sobre si el número ingresado es mayor o menor que el número objetivo.

## ✨ Características

- 🎲 Generación aleatoria de números del 1 al 10
- 💡 Sistema de pistas (mayor/menor)
- 🔢 Contador de intentos
- 🎮 Funcionalidad de reinicio de juego
- 🚫 Prevención de números repetidos
- 📱 Interfaz responsive y atractiva
- 🎨 Diseño moderno con gradientes y efectos visuales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del documento
- **CSS3**: Estilos y diseño visual
- **JavaScript**: Lógica del juego y manipulación del DOM
- **Google Fonts**: Tipografías Chakra Petch e Inter

## 📁 Estructura del Proyecto

```
juego-numero-secreto/
│
├── index.html          # Página principal
├── app.js              # Lógica del juego
├── style.css           # Estilos CSS
├── README.md           # Documentación
│
└── img/                # Recursos gráficos
    ├── bg.png          # Imagen de fondo
    ├── code.png        # Imagen decorativa de código
    ├── ia.png          # Imagen principal del personaje
    └── Ruido.png       # Textura de ruido
```

## 🎮 Cómo Jugar

1. **Inicio**: El juego genera automáticamente un número secreto entre 1 y 10
2. **Ingreso**: Escribe tu número en el campo de entrada
3. **Intento**: Haz clic en el botón "Intentar"
4. **Pistas**: Recibe retroalimentación:
   - "El número es mayor" si tu número es menor al secreto
   - "El número es menor" si tu número es mayor al secreto
   - "Acertaste el número en X intentos" si adivinas correctamente
5. **Reinicio**: Usa el botón "Nuevo juego" para comenzar una nueva partida

## 🚀 Instalación y Ejecución

### Opción 1: Ejecución Local
1. Clona este repositorio:
   ```bash
   git clone https://github.com/IsaiasRVH2/juego-numero-secreto.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd juego-numero-secreto
   ```

3. Abre el archivo `index.html` en tu navegador web preferido

## 🧩 Funcionalidades Técnicas

### Generación de Números Aleatorios
```javascript
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    // Lógica para evitar repetición de números
}
```

### Validación de Intentos
- Control de números únicos por partida
- Deshabilitación automática cuando se agotan todas las opciones
- Retroalimentación inmediata al usuario

### Manipulación del DOM
- Actualización dinámica de textos
- Control de estado de botones
- Limpieza automática de campos de entrada

## 🎨 Características de Diseño

- **Gradiente de fondo**: Transición azul elegante
- **Efectos visuales**: Sombras y bordes redondeados
- **Tipografía moderna**: Fuentes de Google Fonts
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Imágenes decorativas**: Texturas y elementos gráficos

## 📚 Conceptos de Programación Aplicados

- ✅ **Variables y tipos de datos**
- ✅ **Funciones y parámetros**
- ✅ **Estructuras condicionales (if/else)**
- ✅ **Bucles y recursión**
- ✅ **Manipulación del DOM**
- ✅ **Eventos del navegador**
- ✅ **Arrays y métodos de array**
- ✅ **Generación de números aleatorios**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**Isaías Ricardo Valdivia** - [@IsaiasRVH2](https://github.com/IsaiasRVH2)

## 🎓 Agradecimientos

- **Oracle Next Education** por el curso de Lógica de Programación
- **Alura Latam** por la metodología de enseñanza
- Comunidad de desarrolladores por el apoyo y retroalimentación

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

*Desarrollado con ❤️ como parte del programa Oracle Next Education*