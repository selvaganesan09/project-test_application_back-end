/*
  Warnings:

  - You are about to drop the column `key` on the `PageTree` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `PageTree` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PageTree" DROP COLUMN "key",
DROP COLUMN "value";

-- CreateTable
CREATE TABLE "PageTreeKeyValues" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB,
    "pageTreeId" INTEGER,

    CONSTRAINT "PageTreeKeyValues_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PageTreeKeyValues" ADD CONSTRAINT "PageTreeKeyValues_pageTreeId_fkey" FOREIGN KEY ("pageTreeId") REFERENCES "PageTree"("id") ON DELETE SET NULL ON UPDATE CASCADE;
