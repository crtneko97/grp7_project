import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import { Task } from '@/types/Task';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const task: Task = req.body;

    try {
      const db = await connectToDatabase();
      const tasksCollection = db.collection('testTask');
      await tasksCollection.insertOne(task);
      res.status(201).json({ message: 'Task created successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Unable to create task' });
    }
  } else if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const tasksCollection = db.collection('testTask');
      const tasks = await tasksCollection.find().toArray();
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Unable to retrieve tasks' });
    }
  }  else if (req.method === 'DELETE') {
    try {
      const db = await connectToDatabase();
      const tasksCollection = db.collection('testTask');
      const title = req.query.title;
      const deletedTask = await tasksCollection.deleteOne({ taskTitle: title });
      res.status(200).json({ message: 'Task deleted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Unable to delete task' });
    }
} 
else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
