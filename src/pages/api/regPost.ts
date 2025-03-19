import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    try{
      const { title, content } = req.body;
      await prisma.boardPost.create({
        data: {
          title,
          content,
        },
      });
      res.status(200).json({ message: "success" });
    }
    catch (error) {
      res.status(500).json({ message: "Failed to create post" });
      console.log(error);
    }
  }
  else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
