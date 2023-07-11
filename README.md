
# Aplicación Angular con Ejecución Local y Docker

## Instrucciones para Ejecutar la Aplicación Localmente

1.  Clona este repositorio en tu máquina local utilizando el siguiente comando:
    
    `git clone https://github.com/anjamago/qvisionweb` 
    
2.  Asegúrate de tener instalado Node.js en tu máquina.
    
3.  Navega hasta la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:
    
    `npm install` 
    
4.  Inicia la aplicación ejecutando el siguiente comando:
    
    bashCopy code
    
    `ng serve` 
    
5.  La aplicación estará disponible en `http://localhost:4200`. Puedes acceder a ella a través de tu navegador web y probar las diferentes funcionalidades.
    

## Instrucciones para Ejecutar la Aplicación con Docker

1.  Clona este repositorio en tu máquina local utilizando el siguiente comando:
    
    `git clone https://github.com/anjamago/qvisionweb` 
    
2.  Asegúrate de tener Docker instalado en tu máquina.
    
3.  Navega hasta la carpeta del proyecto y ejecuta el siguiente comando para generar la imagen Docker:
    
    `docker build -t aplicacion-angular .` 
    
4.  Después de generar la imagen Docker, ejecuta el siguiente comando para iniciar un contenedor:
    
    `docker run -d -p 80:80 aplicacion-angular` 
    
5.  La aplicación estará disponible en `http://localhost`. Puedes acceder a ella a través de tu navegador web y probar las diferentes funcionalidades.