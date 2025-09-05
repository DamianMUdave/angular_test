SERVER
node.js:
npm init --yes
npm i express morgan promise-mysql cors

express = sirve para abrir el servidor
morgan = para ver las peticiones
mysql = modulo de conexion a mysql
promise-mysql = para manejar directamente las promesas en vez de usar callbacks solos.
cors = ayuda en la comunicacion entre servidores

typescript:
npm install -g typescript
tsc --init

una vez configurado el archivo de configuracion que se genero ejecutar el comando:
tsc
de esta manera convierte el codigo typescript a javascript en la carpeta que se le indico.

npm i nodemon -D
Mira por cambios en el codigo de manera constante

npm i @types/express @types/morgan @types/cors -D
interpreta las librerias de express, morgan y cors, en este caso, para manejarlas con typescript