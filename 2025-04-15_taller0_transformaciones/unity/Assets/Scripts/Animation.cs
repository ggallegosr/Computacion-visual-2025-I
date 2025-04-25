using UnityEngine;

public class Animation : MonoBehaviour
{

void Update()
{
    // Rotación
    // Multiplicamos por Time.deltaTime para asegurar que la rotación sea fluida e independiente del framerate.
    transform.Rotate(30 * Time.deltaTime, 60 * Time.deltaTime, 0);

    // Mov circular
    // Uso de funciones trigonométricas 
    // t representa el tiempo transcurrido desde que comenzó el juego.
    float t = Time.time;
    float radius = 2.0f;
    transform.position = new Vector3(
        Mathf.Cos(t) * radius, // Movimiento en X
        0.5f,                  // Altura constante en Y
        Mathf.Sin(t) * radius  // Movimiento en Z
    );

    // Escalado dinámico oscilante
    // El cubo cambia de tamaño suavemente, dando un efecto de "latido" o pulso.
    // Usamos la función seno para que el valor fluctúe entre 0.7 y 1.3.
    float scale = 1 + 0.3f * Mathf.Sin(t * 2);
    transform.localScale = new Vector3(scale, scale, scale);
}

}
