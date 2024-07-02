/*
  Warnings:

  - You are about to drop the column `trainingTypeId` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the `TrainingType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `trainngName` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_trainingTypeId_fkey";

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "trainingTypeId",
ADD COLUMN     "trainngName" TEXT NOT NULL;

-- DropTable
DROP TABLE "TrainingType";
