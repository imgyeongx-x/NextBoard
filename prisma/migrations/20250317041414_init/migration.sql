/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- -- DropTable
DROP TABLE IF EXISTS "User";

DROP TABLE IF EXISTS "BoardUser";

-- CreateTable
CREATE TABLE "BoardUser" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "BoardUser_pkey" PRIMARY KEY ("id")
);
