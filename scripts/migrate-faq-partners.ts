#!/usr/bin/env tsx

/**
 * Migration Script: Static FAQ & Partners → Sanity CMS
 *
 * Migrates existing FAQs and partners from static files to Sanity.
 * Partner logos are automatically uploaded from the public directory.
 *
 * Usage:
 *   1. Ensure .env.local has SANITY_API_TOKEN with write permissions
 *   2. Run: pnpm tsx scripts/migrate-faq-partners.ts
 */

// Load environment variables from .env.local
import { config } from "dotenv";
import { resolve, join } from "path";
import { createReadStream, existsSync } from "fs";

config({ path: resolve(process.cwd(), ".env.local") });

import { createClient } from "@sanity/client";
import { faqs } from "../lib/data/faq";
import { partners } from "../lib/data/partners";

// Create Sanity client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

/**
 * Migrate FAQs to Sanity
 */
async function migrateFAQs() {
  console.log("\n❓ Migrating FAQs...");

  for (let i = 0; i < faqs.length; i++) {
    const faq = faqs[i];

    try {
      console.log(`  → Creating FAQ: "${faq.question.substring(0, 50)}..."`);

      const faqDoc = {
        _type: "faq",
        _id: `faq-${i + 1}`,
        question: faq.question,
        answer: faq.answer,
        order: i,
      };

      await client.createOrReplace(faqDoc);
      console.log(`  ✓ Created FAQ #${i + 1}`);
    } catch (error) {
      console.error(`  ✗ Failed to create FAQ "${faq.question}":`, error);
    }
  }

  console.log(`\n✅ Migrated ${faqs.length} FAQs`);
}

/**
 * Upload an image to Sanity and return the asset reference
 */
async function uploadImage(imagePath: string, filename: string) {
  // Remove leading slash and resolve to public directory
  const relativePath = imagePath.startsWith("/")
    ? imagePath.slice(1)
    : imagePath;
  const fullPath = join(process.cwd(), "public", relativePath);

  if (!existsSync(fullPath)) {
    console.log(`    ⚠️  Image not found: ${fullPath}`);
    return null;
  }

  const imageStream = createReadStream(fullPath);
  const asset = await client.assets.upload("image", imageStream, {
    filename,
  });

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

/**
 * Migrate Partners to Sanity
 */
async function migratePartners() {
  console.log("\n🤝 Migrating Partners...");

  for (let i = 0; i < partners.length; i++) {
    const partner = partners[i];

    try {
      console.log(`  → Creating Partner: "${partner.name}"`);

      // Upload logo image
      console.log(`    📷 Uploading logo: ${partner.logo}`);
      const logoAsset = await uploadImage(
        partner.logo,
        `${partner.name.toLowerCase().replace(/\s+/g, "-")}-logo`,
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const partnerDoc: any = {
        _type: "partner",
        _id: `partner-${partner.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: partner.name,
        order: i,
      };

      if (logoAsset) {
        partnerDoc.logo = logoAsset;
      }

      await client.createOrReplace(partnerDoc);
      console.log(
        `  ✓ Created: "${partner.name}"${logoAsset ? " (with logo)" : " (no logo)"}`,
      );
    } catch (error) {
      console.error(`  ✗ Failed to create "${partner.name}":`, error);
    }
  }

  console.log(`\n✅ Migrated ${partners.length} Partners`);
}

/**
 * Main migration function
 */
async function migrate() {
  console.log("🚀 Starting FAQ & Partners migration to Sanity CMS...\n");
  console.log("Project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

  // Check for required environment variables
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
    process.exit(1);
  }

  if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.error("❌ Missing NEXT_PUBLIC_SANITY_DATASET in .env.local");
    process.exit(1);
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ Missing SANITY_API_TOKEN in .env.local");
    console.error("   Get your token from: https://sanity.io/manage");
    process.exit(1);
  }

  try {
    await migrateFAQs();
    await migratePartners();

    console.log("\n✨ Migration completed successfully!");
    console.log("\nNext steps:");
    console.log("   1. Go to http://localhost:3000/admin");
    console.log("   2. Review and publish all content");
  } catch (error) {
    console.error("\n❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration
migrate();
