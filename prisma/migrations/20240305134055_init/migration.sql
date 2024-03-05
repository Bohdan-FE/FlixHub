-- CreateTable
CREATE TABLE "FavoriteMovies" (
    "id" INTEGER NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "original_language" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "media_type" TEXT NOT NULL,
    "genre_ids" INTEGER[],
    "popularity" INTEGER NOT NULL,
    "release_date" TEXT NOT NULL,
    "video" BOOLEAN NOT NULL,
    "vote_average" INTEGER NOT NULL,
    "vote_count" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavoriteMovies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteMovies" ADD CONSTRAINT "FavoriteMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
