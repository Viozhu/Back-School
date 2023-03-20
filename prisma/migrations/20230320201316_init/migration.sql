/*
  Warnings:

  - You are about to drop the column `successorId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memberId]` on the table `FamilyMember` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_successorId_fkey";

-- DropIndex
DROP INDEX "User_successorId_key";

-- AlterTable
ALTER TABLE "FamilyMember" ADD COLUMN     "memberId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "successorId";

-- CreateIndex
CREATE UNIQUE INDEX "FamilyMember_memberId_key" ON "FamilyMember"("memberId");

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "FamilyMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
