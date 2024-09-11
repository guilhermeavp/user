import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

export async function connectToDatabase () {
  dotenv.config();
  mongoose.set('strictQuery', false);
  const mongoDB = process.env.DB_CONN_STRING;

  try {
    await mongoose.connect(mongoDB);
    console.log('Conected with sucess');
  } catch (error){
    console.log('Not conected with the data base');
  }

}