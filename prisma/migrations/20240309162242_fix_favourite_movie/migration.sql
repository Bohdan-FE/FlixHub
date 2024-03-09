/*
  Warnings:

  - Added the required column `movieId` to the `FavoriteMovie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE favoritemovie_id_seq;
ALTER TABLE "FavoriteMovie" ADD COLUMN     "movieId" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('favoritemovie_id_seq');
ALTER SEQUENCE favoritemovie_id_seq OWNED BY "FavoriteMovie"."id";

-- AlterTable
CREATE SEQUENCE video_id_seq;
ALTER TABLE "Video" ALTER COLUMN "id" SET DEFAULT nextval('video_id_seq');
ALTER SEQUENCE video_id_seq OWNED BY "Video"."id";
