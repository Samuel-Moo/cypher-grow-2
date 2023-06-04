import mongoose from 'mongoose'

const URI_MONGO = process.env.URI_MONGO

const conectarDB = async() => {
    try {
        await mongoose.connect(URI_MONGO)
        console.log('Ahueeeso tenemos coneccion ^_^')
    } catch (error) {
        console.log("No se armo la coneccion ( ´--)/(._.`)")
        console.log(error)
        process.exit(1)
    }
}

export default conectarDB;