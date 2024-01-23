import mongoose from 'mongoose';

export async function setupMongo(): Promise<void>{

    try{

        if(mongoose.connection.readyState == 1){

            return;
        }

        console.log('🎲 Connecting to DB...')
        await mongoose.connect(process.env.MONGO_URL as string) // npm i -D @types/node instalar para conseguir chegar a propriedade, npm i dotenv para conseguir acessar as variaveis de ambientes
        console.log('🚀 DB Connected!')
    } catch{
        throw new Error('❌ DB not Connected')
    }
}