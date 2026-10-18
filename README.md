# NutriFit AI

Aplicación PWA local-first para planificar y registrar entrenamiento y nutrición. Los datos se guardan en el navegador; exporta una copia JSON antes de borrar datos del navegador o cambiar de dispositivo.

## Límites conocidos

- La foto de una comida se selecciona desde cámara o galería, pero no se envía ni se analiza con IA: no hay proveedor configurado.
- Garmin FIT no se importa todavía. La interfaz declara este límite para no convertir un archivo FIT en datos incompletos.
- Los enlaces de técnica llevan a una búsqueda de vídeo; el usuario debe comprobar que la demostración corresponde al ejercicio y a su nivel.

## Comprobación

`node --check app.js` y `node tests/smoke.mjs`
