/*
  Warnings:

  - You are about to drop the column `userId` on the `FamilyMember` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_userId_fkey";

-- AlterTable
ALTER TABLE "FamilyMember" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "FamilyMemberOnUser" (
    "userId" INTEGER NOT NULL,
    "familyMemberId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "FamilyMemberOnUser_pkey" PRIMARY KEY ("userId","familyMemberId")
);

-- AddForeignKey
ALTER TABLE "FamilyMemberOnUser" ADD CONSTRAINT "FamilyMemberOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMemberOnUser" ADD CONSTRAINT "FamilyMemberOnUser_familyMemberId_fkey" FOREIGN KEY ("familyMemberId") REFERENCES "FamilyMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
