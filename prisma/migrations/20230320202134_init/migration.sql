/*
  Warnings:

  - You are about to drop the column `userId` on the `FamilyMember` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[familyMemberId]` on the table `FamilyMember` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_memberId_fkey";

-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_userId_fkey";

-- AlterTable
ALTER TABLE "FamilyMember" DROP COLUMN "userId",
ADD COLUMN     "familyMemberId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "FamilyMember_familyMemberId_key" ON "FamilyMember"("familyMemberId");

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_familyMemberId_fkey" FOREIGN KEY ("familyMemberId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
