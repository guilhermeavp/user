import { ObjectId } from 'mongodb';
import { badData } from '@hapi/boom';
import { SomeModel } from '../schema/user';
import { compare, encrypt } from '../util/cript';

export class User {

    async getAll(): Promise<any> {
        try {
            const auths = await SomeModel.find({}).exec();
             return Promise.resolve(auths);
         } catch (error) {
             return Promise.reject(badData(error.message));
         }
    }

    async getID(id: any): Promise<any> {
        try {
            const query = { _id: new ObjectId(id) };
            const user = await SomeModel.find(query).exec();
      
            if (user) {
                return Promise.resolve(user);
            }
        } catch (error) {
            return Promise.reject(badData(`Unable to find matching document with id: ${id}`));
        }
    }

    async create(body: any): Promise<any> {
        try {
            const query = { username: body.username };
            const user = await SomeModel.find(query).exec();
            if (user.length){
                return Promise.reject(badData('Nome de usuario já utilizado'));
            }
            const password = await encrypt(body.password);
            const bodyEncrypted = {...body, password: password};
            console.log('bodyEncrypted',bodyEncrypted);

            const result = await new SomeModel(bodyEncrypted);
            result.save();
            return Promise.resolve(`Successfully created a new auth with id ${result._id}`);
        } catch (error) {
            return Promise.reject(badData(error.message));
        }
    }

    async update(body: any, id: any): Promise<any> {
        try {
            const updatedauth: any = body as any;
            const query = { _id: new ObjectId(id) };
          
            await SomeModel.updateOne(query, { $set: updatedauth });
            return Promise.resolve(`Successfully updated auth with id ${id}`);
        } catch (error) {
            return Promise.reject(badData(error.message));
        }
    }

    async delete(id: any): Promise<any> {
        try {
            const query = { _id: new ObjectId(id) };
            const result = await SomeModel.deleteOne(query);
      
            if (result && result.deletedCount) {
                return Promise.resolve(`Successfully updated auth with id ${id}`);
            } else if (!result) {
                return Promise.reject(badData(`Failed to remove auth with id ${id}`));
            } else if (!result.deletedCount) {
                return Promise.reject(badData(`auth with id ${id} does not exist`));
            }
        } catch (error) {
            return Promise.reject(badData(error.message));
        }
    }

  }
