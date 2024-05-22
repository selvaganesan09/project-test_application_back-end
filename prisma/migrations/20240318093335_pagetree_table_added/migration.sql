-- CreateTable
CREATE TABLE "PageTree" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB,

    CONSTRAINT "PageTree_pkey" PRIMARY KEY ("id")
);
