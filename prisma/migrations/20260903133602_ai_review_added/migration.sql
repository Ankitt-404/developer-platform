-- CreateTable
CREATE TABLE "AiReview" (
    "id" TEXT NOT NULL,
    "analysisId" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIissue" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "line" INTEGER,
    "recommendation" TEXT NOT NULL,
    "suggestedFix" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AIissue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AiReview" ADD CONSTRAINT "AiReview_analysisId_fkey" FOREIGN KEY ("analysisId") REFERENCES "Analysis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIissue" ADD CONSTRAINT "AIissue_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "AiReview"("id") ON DELETE CASCADE ON UPDATE CASCADE;
