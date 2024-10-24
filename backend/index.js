import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})
import express from 'express'
import weatherRoutes from './route/weather.route.js'
import cors from 'cors'

const app=express()

app.use(cors({
    origin:"http://localhost:5173" || process.env.CORS_ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))

app.use(express.json({
    limit:"10kb"
}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))

app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
