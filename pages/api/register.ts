import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.MONGODB_URI) {
    res.status(500).send('MONGODB_URI not set');
    return;
  }
  const client = await MongoClient.connect(process.env.MONGODB_URI!, {});
  const collection = client.db("Users").collection('registeredUsers');

  switch (req.method) {
    case 'GET':
      // Perform a GET operation on your collection
      break;
    case 'POST':
      // Perform a POST operation on your collection
      // Get the body & put it into the database
      const user = req.body;
      await collection.insertOne(user);
      res.status(201).json(user);
      break;
    case 'PUT':
      // Perform a PUT operation on your collection
      break;
    case 'DELETE':
      // Perform a DELETE operation on your collection
      break;
    default:
      res.status(405).end();
      break;
  }

  client.close();
}

