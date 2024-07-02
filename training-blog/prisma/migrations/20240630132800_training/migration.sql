/*
  Warnings:

  - The primary key for the `TrainingType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bodyPartId` on the `TrainingType` table. All the data in the column will be lost.
  - You are about to drop the `BodyPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrainingMenu` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TrainingMenu" DROP CONSTRAINT "TrainingMenu_postId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingMenu" DROP CONSTRAINT "TrainingMenu_trainingTypeId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingType" DROP CONSTRAINT "TrainingType_bodyPartId_fkey";

-- AlterTable
ALTER TABLE "TrainingType" DROP CONSTRAINT "TrainingType_pkey",
DROP COLUMN "bodyPartId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TrainingType_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TrainingType_id_seq";

-- DropTable
DROP TABLE "BodyPart";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "TrainingMenu";

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "trainingTypeId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "weight" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "set" INTEGER NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_trainingTypeId_fkey" FOREIGN KEY ("trainingTypeId") REFERENCES "TrainingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
