# COVID_Myths

The objective of this application is create a community about truths and lies of COVID-19. Look the main news and verify its content in community.

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
