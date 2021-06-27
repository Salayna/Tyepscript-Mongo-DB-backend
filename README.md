#  Application backend
## Folders
- config
- controllers
- middlewares
- models
- routes
- services
## Environment variables
- **MONGODB_URI**: URl for your MongoDB instance
- **PORT**: Your web server listening port
- **JWT_KEY**: Secret key used by JsonWebToken to encrypt the payload
- **ENV**: The environment (can be production / development or others)

## Dependencies
### production
- concurrently
- cors
- dotenv
- express
- helmet
- jest
- jsonwebtoken
- mongoose
- mongoose-unique-validator
- winston
### dev
- @types/cors
- @types/express
- @types/mongoose
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- nodemon
- prettier
- typescript