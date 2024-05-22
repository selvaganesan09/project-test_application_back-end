/*
  Warnings:

  - Added the required column `slug` to the `PageTree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `PageTree` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PageTree" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
