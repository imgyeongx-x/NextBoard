import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = "your-secret-key"; // 실제 애플리케이션에서는 환경 변수로 관리하세요.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { userId, password } = req.body;

    const user = await prisma.boardUser.findUnique({
      where: {
        userId: userId,
      },
    });

    if (user && user.password === password) {
      const token = jwt.sign({ userId: user.userId }, SECRET_KEY, { expiresIn: "1h" });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: "아이디 또는 비밀번호가 틀렸습니다." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}