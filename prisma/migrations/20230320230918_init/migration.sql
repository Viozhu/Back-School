/*
  Warnings:

  - The primary key for the `FamilyMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_familyMemberId_fkey";

-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_studentId_fkey";

-- AlterTable
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "memberId" SET DATA TYPE TEXT,
ALTER COLUMN "familyMemberId" SET DATA TYPE TEXT,
ADD CONSTRAINT "FamilyMember_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FamilyMember_id_seq";

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "studentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Room_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_familyMemberId_fkey" FOREIGN KEY ("familyMemberId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
