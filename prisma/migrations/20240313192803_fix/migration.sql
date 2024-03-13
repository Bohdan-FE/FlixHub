/*
  Warnings:

  - You are about to drop the column `backdrop_path` on the `FavoriteMovie` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `FavoriteMovie` table. All the data in the column will be lost.
  - You are about to drop the column `overview` on the `FavoriteMovie` table. All the data in the column will be lost.
  - You are about to drop the column `runtime` on the `FavoriteMovie` table. All the data in the column will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_movieId_fkey";

-- AlterTable
ALTER TABLE "FavoriteMovie" DROP COLUMN "backdrop_path",
DROP COLUMN "genres",
DROP COLUMN "overview",
DROP COLUMN "runtime";

-- DropTable
DROP TABLE "Video";
