-- Additive migration: existing Project and Admin rows are preserved.

ALTER TABLE "Project" ADD COLUMN "memberId" TEXT;

CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "initials" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "skills" TEXT[],
    "contact" TEXT,
    "location" TEXT,
    "availability" TEXT,
    "highlight" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "eyebrow" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idealFor" TEXT NOT NULL,
    "useCase" TEXT NOT NULL,
    "outcome" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "startingPrice" TEXT,
    "cta" TEXT NOT NULL,
    "deliverables" TEXT[],
    "process" TEXT[],
    "notIncluded" TEXT[],
    "tags" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "TeamMember_slug_key" ON "TeamMember"("slug");
CREATE UNIQUE INDEX "Offer_slug_key" ON "Offer"("slug");

ALTER TABLE "Project"
ADD CONSTRAINT "Project_memberId_fkey"
FOREIGN KEY ("memberId") REFERENCES "TeamMember"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

-- The public schema is exposed by default in Supabase. Prisma connects with
-- the database owner, while RLS protects these tables from Data API access.
ALTER TABLE "TeamMember" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Offer" ENABLE ROW LEVEL SECURITY;
