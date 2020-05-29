<!-- 
Luis Ruiz: 
Hola Valerie, espero estés bien.
Creo que en cuanto a código, todo estaba muy bien. Solo vi un pequeño detalle que te comentaré ahora que termine de escribir esto. 
El funcionamiento me gusta, para mi es intuitivo y tiene funcionalidades interesantes tanto de consulta como de generación de datos. 
La parte de noticias me gusta que cargue las noticias a medida que haces scroll. Dentro de cada noticia me gusta mucho que hayan podido implementar que solo se pueda votar una vez. Aquí hay una pequeña cosa de diseño que creo podrían mejorar, y es que la caja de comentarios el título es blanco y el fondo es gris claro, y no hay suficiente contraste para apreciar bien. Me gustó también el modal de confirmación. Creo que me lo robaré para mis futuros proyectos. Siento que puede haber un problema de accesibilidad al haber puesto que todo el div fuera clickeable, y es que al parecer no reconoce los tabs para despazarse sobre ellos. De resto muy bien.
En la parte de preguntas me gusta que se pueda filtrar y preguntar (aquí lo mismo, un poquito más de contraste). Creo que podrían hacer las cajas de las preguntas un poco más pequeñas, o al menos que los botones de verdad y mito lo fueran. Me gusta que la caja tome el color de si es verdad o es un mito. Cuando uno comenta una publicación, creo que sería bueno filtrar para que no se pueda comentar una cadena vacía. Me gusta como se muestran ahi mismo los comentarios (aunque creo que es más intuitivo que los comentarios esten antes de la opción de comentar, uno antes del otro). Lo que si creo que deben mejorar es el botón que tienen en el footer del modal, pues no veo necesidad de que sea un botón (a menos que le cambien el nombre y sea como "cerrar" o algo así. 
Pero general creo que está muy bien. 
Se cuidan
-->
# COVID_Myths

The objective of this application is to create a community about truths and lies of COVID-19. Look the main news and verify its content in community. You can also create questions regarding the COVID-19 and people can vote for them or answer them.

![Captura](https://user-images.githubusercontent.com/32238112/81584831-e543b600-9378-11ea-8407-e82bb3601cc6.PNG)
## Running the website
Since this application is not a static application, you should have some thinks to do before you can start.
### Requirements
- NodeJS: If you have not Mongo you can download it in <a href="https://nodejs.org/es/download/"> Node JS Documentation</a>
- MongoDB If you have not Mongo you can download it in <a href="https://docs.mongodb.com/manual/installation/">MongoDB Community Server</a>. Alternativetly you can use MongoDB Atlas <a href="https://www.mongodb.com/cloud/atlas">MongoDB Community Server</a> 

Once you have it installed, run tha database with replica set
```
mongod --replSet <a name> --dbpath <path> --port <a port>
rs.initiate()
```
In order to start the database server

## Video

You can find the explanation video here <a href="https://www.youtube.com/watch?v=pB0MontNFWU&feature=youtu.be"> here</a>
**Important information**
You need to create three environments variables to this project
- `SECRET_KEY=<secretWord>`: Where secretWord is a String o code that you must save in secret.
- `APIKEY=<apiKeyForNewsApi>`: Your apikey for NewsAPI.
- `APIURL=<APIurl>`: http://newsapi.org/v2/everything.
- `DB=<YourDb>`: Your db name.
- `MONGODB_URI=<MongoDb>`: Your connection to mongo.

### Requirements
On the root folder of the proyect

```bash
# Install dependencies for client
yarn run client-install

# Install dependencies for server
yarn install

# Run the client & server with concurrently
yarn run dev

# Run the Express server only
yarn start

# Run the server with nodemon
yarn run server

# Run the React client only
yarn run client

# Server runs on http://localhost:3001 and client on http://localhost:3000
```

<hr>


## Author
Mateo León Alzate & Valerie Parra Cortés
## Slides

You can find the slides <a href="https://docs.google.com/presentation/d/1qRv7QFdo1gwH7MGQVuleUNMfcFiIYBns9jLgiCaOQbs/edit?usp=sharing"> here</a>

## License
The MIT License (MIT)

Copyright (c) Mateo León Alzate & Valerie Parra Cortés

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
