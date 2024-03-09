/*
  Warnings:

  - You are about to drop the column `genre_ids` on the `FavoriteMovie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FavoriteMovie" DROP COLUMN "genre_ids",
ADD COLUMN     "genres" INTEGER[];
