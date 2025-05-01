# Segmentación Semántica Multimodal: Qué hay en la Imagen
### 🔍 Objetivo
Aplicar segmentación semántica para identificar y extraer regiones específicas dentro de una imagen, como una jirafa, usando el modelo avanzado SAM (Segment Anything Model). El objetivo es generar máscaras de segmentación, visualizarlas con contornos, y crear un GIF animado para analizar y presentar los resultados.

> La bitácora y desarrollo puntual del ejercicio se encuentra en el wiki del repositorio.

### Librerías utilizadas
````Python
import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
from segment_anything import SamPredictor, sam_model_registry
import imageio
from PIL import Image
import torch
````
