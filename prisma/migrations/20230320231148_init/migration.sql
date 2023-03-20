/*
  Warnings:

  - The primary key for the `FamilyMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `FamilyMember` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `memberId` column on the `FamilyMember` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `familyMemberId` column on the `FamilyMember` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Room` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `studentId` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_familyMemberId_fkey";

-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_studentId_fkey";

-- AlterTable
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "memberId",
ADD COLUMN     "memberId" INTEGER,
DROP COLUMN "familyMemberId",
ADD COLUMN     "familyMemberId" INTEGER,
ADD CONSTRAINT "FamilyMember_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "studentId",
ADD COLUMN     "studentId" INTEGER NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyMember_memberId_key" ON "FamilyMember"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyMember_familyMemberId_key" ON "FamilyMember"("familyMemberId");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_familyMemberId_fkey" FOREIGN KEY ("familyMemberId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
