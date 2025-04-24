void setup() {
    size(600, 600, P3D); // 3D
}

void draw() {
    background(30); // Fondo oscuro

    // Dinámicas basadas en el tiempo
    float tx = 150 * sin(frameCount * 0.02); // Movimiento ondulado en X
    float scaleFactor = 1 + 0.5 * sin(frameCount * 0.05); // Escala cíclica
    float r = abs(255 * sin(frameCount * 0.03)); // Variación de color Rojo
    float g = abs(255 * cos(frameCount * 0.03)); // Variación de color Verde
    float b = abs(255 * sin(frameCount * 0.01)); // Variación de color Azul

    // Aplicar transformaciones
    translate(width/2 + tx, height/2, 0); // Movimiento ondulado
    rotateX(frameCount * 0.02); // Rotación sobre eje X
    rotateY(frameCount * 0.01); // Rotación sobre eje Y
    scale(scaleFactor); // Escala dinámica

    // Color dinámico
    fill(r, g, b); // Color del cubo
    stroke(255); // Bordes blancos
    box(100); // Cubo con lado de 100 píxeles
}
