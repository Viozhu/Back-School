-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_familyMemberId_fkey";

-- CreateTable
CREATE TABLE "_FamilyMemberToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FamilyMemberToUser_AB_unique" ON "_FamilyMemberToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FamilyMemberToUser_B_index" ON "_FamilyMemberToUser"("B");

-- AddForeignKey
ALTER TABLE "_FamilyMemberToUser" ADD CONSTRAINT "_FamilyMemberToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "FamilyMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FamilyMemberToUser" ADD CONSTRAINT "_FamilyMemberToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
