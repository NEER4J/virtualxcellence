/**
 * Script to update ALL pages to use runtime SEO with dynamic rendering
 * This ensures SEO updates appear immediately without build
 */

const fs = require('fs')
const path = require('path')

// List of all pages that need to be updated
const pagesToUpdate = [
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/consultation/page.tsx',
  'src/app/services/business-process-outsourcing/page.tsx',
  'src/app/services/development/page.tsx',
  'src/app/services/integration-and-professional-services/page.tsx',
  'src/app/services/business-transformation/page.tsx',
  'src/app/services/fractional-cto/page.tsx',
  'src/app/services/cloud-infrastructure/page.tsx',
  'src/app/services/fractional-cfo/page.tsx',
  'src/app/services/cybersecurity/page.tsx',
  'src/app/industries/retail/page.tsx',
  'src/app/industries/manufacturing/page.tsx',
  'src/app/industries/healthcare/page.tsx',
  'src/app/industries/finance/page.tsx',
  'src/app/industries/education/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/careers/[slug]/page.tsx',
  'src/app/terms-of-sale/page.tsx',
  'src/app/terms-conditions/page.tsx',
  'src/app/refund-policy/page.tsx',
  'src/app/privacy-policy/page.tsx'
]

function updatePageToRuntimeSEO(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // Skip if already using runtime SEO
    if (content.includes('createRuntimePageMetadata')) {
      console.log(`✅ ${filePath} - Already using runtime SEO`)
      return
    }
    
    let updated = false
    
    // Replace generateSeoMetadata with createRuntimePageMetadata
    if (content.includes('generateSeoMetadata')) {
      content = content.replace(
        /import { generateSeoMetadata } from '@/lib\/seo'/g,
        "import { createRuntimePageMetadata } from '@/lib/runtime-seo'"
      )
      
      // Add dynamic export
      if (!content.includes("export const dynamic = 'force-dynamic'")) {
        content = content.replace(
          /import { ReactElement } from "react";/,
          `import { ReactElement } from "react";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'`
        )
      }
      
      // Replace generateSeoMetadata function calls
      content = content.replace(
        /return generateSeoMetadata\(([^,]+),\s*fallbackMetadata\);/g,
        (match, pagePath) => {
          return `return createRuntimePageMetadata(${pagePath}, {
    title: fallbackMetadata.title,
    description: fallbackMetadata.description,
    keywords: fallbackMetadata.keywords,
    ogImage: fallbackMetadata.openGraph?.images?.[0]?.url,
    canonicalUrl: fallbackMetadata.alternates?.canonical
  });`
        }
      )
      
      updated = true
    }
    
    // Replace createPageMetadata with createRuntimePageMetadata
    if (content.includes('createPageMetadata')) {
      content = content.replace(
        /import { createPageMetadata } from "@/lib\/page-seo";/g,
        "import { createRuntimePageMetadata } from '@/lib/runtime-seo';"
      )
      
      content = content.replace(
        /createPageMetadata\(/g,
        'createRuntimePageMetadata('
      )
      
      // Add dynamic export
      if (!content.includes("export const dynamic = 'force-dynamic'")) {
        content = content.replace(
          /import { ReactElement } from "react";/,
          `import { ReactElement } from "react";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'`
        )
      }
      
      updated = true
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ ${filePath} - Updated to runtime SEO`)
    } else {
      console.log(`⚠️  ${filePath} - No changes needed`)
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message)
  }
}

console.log('🚀 Starting runtime SEO update for all pages...\n')

// Update each page
pagesToUpdate.forEach(page => {
  const fullPath = path.join(process.cwd(), page)
  if (fs.existsSync(fullPath)) {
    updatePageToRuntimeSEO(fullPath)
  } else {
    console.log(`⚠️  ${page} - File not found`)
  }
})

console.log('\n✅ Runtime SEO update completed!')
console.log('\n📝 Next steps:')
console.log('1. Test that pages load with runtime SEO')
console.log('2. Update SEO in admin panel')
console.log('3. Verify changes appear immediately without build')
console.log('4. Deploy to production')
