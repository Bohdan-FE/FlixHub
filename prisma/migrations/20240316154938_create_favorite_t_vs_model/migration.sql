-- CreateTable
CREATE TABLE "FavoriteTVs" (
    "id" SERIAL NOT NULL,
    "tvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "first_air_date" TEXT NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavoriteTVs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteTVs" ADD CONSTRAINT "FavoriteTVs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
