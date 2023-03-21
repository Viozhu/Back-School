-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_studentId_fkey";

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
