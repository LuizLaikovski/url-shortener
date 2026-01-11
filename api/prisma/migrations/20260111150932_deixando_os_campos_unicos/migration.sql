/*
  Warnings:

  - A unique constraint covering the columns `[original]` on the table `urls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "urls_original_key" ON "urls"("original");
