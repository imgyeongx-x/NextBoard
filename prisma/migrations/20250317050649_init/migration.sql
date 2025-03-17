/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `BoardUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BoardUser_userId_key" ON "BoardUser"("userId");
