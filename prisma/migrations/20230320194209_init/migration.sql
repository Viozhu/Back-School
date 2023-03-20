/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rol` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROL" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN');

-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "DAY" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "FAMILYRELATION" AS ENUM ('FATHER', 'MOTHER', 'BROTHER', 'SISTER', 'GRANDFATHER', 'GRANDMOTHER', 'GRANDSON', 'GRANDDAUGHTER', 'AUNT', 'UNCLE', 'COUSIN', 'NEPHEW', 'NIECE', 'FRIEND', 'OTHER');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "gender" "GENDER",
ADD COLUMN     "rol" "ROL" NOT NULL;

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "day" "DAY" NOT NULL,
    "time" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilyMember" (
    "id" SERIAL NOT NULL,
    "type" "FAMILYRELATION" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FamilyMember_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
