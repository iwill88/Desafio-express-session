const mongoose =require('mongoose')

require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL

const mensajeSchema = new mongoose.Schema({

    author: {
        id:{type: String, required: true},
        nombre:{type: String, required: true},
        apellido:{type: String, required: true},
        edad:{type: Number, required: true},
        alias:{type: String, required: true},
        avatar:{ type: String, required: true },
        },
    text: { type: String, required: true }
});

const MensajesDAO = mongoose.model('mensajes', mensajeSchema)


const MongoConnection = async () =>{
    try {
        const URL = MONGO_URL
        await mongoose.connect(URL, {
            serverSelectionTimeoutMS: 5000,
        })
        console.log('Base de datos MongoDB conectada');


        /*const mensajes = await MensajesDAO.find({})
            mensajes.forEach(mensaje => {
                console.log(mensaje) })*/

     /*try {
           
           await MensajesDAO.create({
            "author": {
                "id":"maria@hotmail.com",
                "nombre":"Maria",
                "apellido":"Blagodyrenko",
                "edad":30,
                "alias":"Maria",
                "avatar":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fiwill88&psig=AOvVaw0XTlKQSSEnqaZj77vCvXbn&ust=1672958616704000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiB5NL-rvwCFQAAAAAdAAAAABAE",
                },
            "text": "bien y tu?"

           })
            console.log('Mensaje agregado!')
    
            const mensajes = await MensajesDAO.find({})
            mensajes.forEach(mensaje => {
                console.log(mensaje)
            })


        } catch (error) {
            console.log(`Error en operación de base de datos ${error}`)
        }   
    */

    
    } catch (error) {
        console.log(`Error de conexión a la base de datos MongoDB ${error}`)
    }
    
}

module.exports = {MongoConnection, MensajesDAO}