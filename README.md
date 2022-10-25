# COCKTAIL-DIY 

## To install dependencies
Run `npm install` in the client and in the server folder separately

## To run the client:
Go to the client folder and run:
`npm run dev`

## To run the server:
Initalize a MongoDB database (community edition https://www.mongodb.com/docs/manual/installation/) named appdb.
In a different terminal window (than the client) run this command from the server folder:
`npm run start:dev` 

## .env file for Server
Make sure you define a .env file in the root of the server containing 
`SECRET_KEY = "<Your secret key>"`
`API_KEY = "<Patreon-supporter API key>"` For examination purposes you can use 9973533

## To reinstall node_modules
`rm -rf node_modules`
`npm install node_modules`

