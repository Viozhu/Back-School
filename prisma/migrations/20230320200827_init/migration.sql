/*
  Warnings:

  - You are about to drop the `FamilyMemberOnUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[successorId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "FamilyMemberOnUser" DROP CONSTRAINT "FamilyMemberOnUser_familyMemberId_fkey";

-- DropForeignKey
ALTER TABLE "FamilyMemberOnUser" DROP CONSTRAINT "FamilyMemberOnUser_userId_fkey";

-- AlterTable
ALTER TABLE "FamilyMember" ADD COLUMN     "userId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "successorId" INTEGER;

-- DropTable
DROP TABLE "FamilyMemberOnUser";

-- CreateIndex
CREATE UNIQUE INDEX "User_successorId_key" ON "User"("successorId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
