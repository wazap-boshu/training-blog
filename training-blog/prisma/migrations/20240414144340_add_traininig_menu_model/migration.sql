-- CreateTable
CREATE TABLE "TrainingMenu" (
    "id" TEXT NOT NULL,
    "postId" TEXT,
    "weight" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "trainingTypeId" INTEGER NOT NULL,

    CONSTRAINT "TrainingMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodyPartId" INTEGER NOT NULL,

    CONSTRAINT "TrainingType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyPart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BodyPart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingMenu" ADD CONSTRAINT "TrainingMenu_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingMenu" ADD CONSTRAINT "TrainingMenu_trainingTypeId_fkey" FOREIGN KEY ("trainingTypeId") REFERENCES "TrainingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingType" ADD CONSTRAINT "TrainingType_bodyPartId_fkey" FOREIGN KEY ("bodyPartId") REFERENCES "BodyPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
