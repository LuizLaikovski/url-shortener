-- CreateTable
CREATE TABLE "urls" (
    "id" SERIAL NOT NULL,
    "original" TEXT NOT NULL,
    "short" TEXT NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_short_key" ON "urls"("short");
