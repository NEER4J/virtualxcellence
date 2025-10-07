/**
 * Script to create SEO entry for AI Automation page
 * This demonstrates how the dynamic SEO system works
 */

const { createClient } = require('@supabase/supabase-js')

// You would need to set these environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createAIAutomationSeoEntry() {
  try {
    const seoData = {
      page_path: '/services/ai-automation',
      title: 'AI & Automation Services || Virtual Xcellence - AI, Automation & Business Transformation',
      description: 'Smarter, faster, future-ready businesses with AI & Automation. Virtual Xcellence helps organizations harness AI to reduce costs, improve efficiency, and create new business models through intelligent automation.',
      keywords: [
        'Virtual Xcellence AI automation',
        'AI services',
        'intelligent automation',
        'conversational AI',
        'business process automation',
        'predictive analytics',
        'machine learning services',
        'generative AI solutions',
        'RPA services',
        'AI strategy consulting',
        'voice automation',
        'document processing AI',
        'AI chatbots',
        'automation platforms',
        'AI transformation',
      ],
      og_title: 'AI & Automation Services - Virtual Xcellence',
      og_description: 'Transform your business with AI & Automation solutions. Reduce costs, improve efficiency, and create new business models.',
      og_image: '/assets/imgs/services/ai-automation/og-image.png',
      og_type: 'website',
      twitter_card: 'summary_large_image',
      twitter_title: 'AI & Automation Services - Virtual Xcellence',
      twitter_description: 'Transform your business with AI & Automation solutions. Reduce costs, improve efficiency, and create new business models.',
      twitter_image: '/assets/imgs/services/ai-automation/twitter-image.png',
      canonical_url: 'https://virtualxcellence.com/services/ai-automation',
      robots: 'index, follow',
      sitemap_included: true,
      schema_markup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI & Automation Services",
        "description": "AI and automation solutions to transform your business operations",
        "provider": {
          "@type": "Organization",
          "name": "Virtual Xcellence",
          "url": "https://virtualxcellence.com"
        },
        "serviceType": "AI & Automation Consulting",
        "areaServed": "Global"
      }
    }

    // Check if entry already exists
    const { data: existing } = await supabase
      .from('seo_pages')
      .select('id')
      .eq('page_path', '/services/ai-automation')
      .single()

    if (existing) {
      console.log('SEO entry for AI Automation page already exists')
      return
    }

    // Create new entry
    const { data, error } = await supabase
      .from('seo_pages')
      .insert([seoData])
      .select()

    if (error) {
      throw error
    }

    console.log('✅ SEO entry created successfully for AI Automation page')
    console.log('Entry ID:', data[0].id)
    console.log('Page Path:', data[0].page_path)
    console.log('Title:', data[0].title)
    
  } catch (error) {
    console.error('❌ Error creating SEO entry:', error.message)
  }
}

// Run the script
createAIAutomationSeoEntry()
