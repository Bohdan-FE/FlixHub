/*
  Warnings:

  - You are about to drop the `FavoriteMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteMovies" DROP CONSTRAINT "FavoriteMovies_userId_fkey";

-- DropTable
DROP TABLE "FavoriteMovies";

-- CreateTable
CREATE TABLE "FavoriteMovie" (
    "id" INTEGER NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "genre_ids" INTEGER[],
    "release_date" TEXT NOT NULL,
    "vote_average" INTEGER NOT NULL,
    "runtime" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavoriteMovie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteMovie" ADD CONSTRAINT "FavoriteMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "FavoriteMovie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
