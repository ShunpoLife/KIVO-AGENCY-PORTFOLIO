-- Baseline for the existing production database.
-- This migration is marked as applied and must not be executed on production.

CREATE SCHEMA IF NOT EXISTS "public";

CREATE TABLE "public"."Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT,
    "client" TEXT,
    "category" TEXT NOT NULL,
    "technologies" TEXT[],
    "coverImage" TEXT,
    "gallery" TEXT[],
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "challenges" TEXT,
    "contribution" TEXT,
    "completionDate" TIMESTAMP(3),
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Admin_email_key" ON "public"."Admin"("email" ASC);
CREATE UNIQUE INDEX "Project_slug_key" ON "public"."Project"("slug" ASC);
