/**
 * Web Scraper Usage Examples
 *
 * This file demonstrates how to use the WebScraper class
 * Copy these examples to your own code as needed
 */

// Example 1: Basic Exa Search
async function example1_BasicExaSearch() {
  const scraper = new WebScraper();

  const results = await scraper.searchExa('premium photography studio Dehradun', {
    numResults: 5,
    searchType: 'auto'
  });

  console.log('Exa Search Results:', results);
  return results;
}

// Example 2: Basic Tavily Search
async function example2_BasicTavilySearch() {
  const scraper = new WebScraper();

  const results = await scraper.searchTavily('best camera settings for portrait photography', {
    maxResults: 10,
    searchDepth: 'advanced',
    includeAnswer: true
  });

  console.log('Tavily Search Results:', results);
  return results;
}

// Example 3: Extract Content from Specific URLs
async function example3_ExtractContent() {
  const scraper = new WebScraper();

  const urls = [
    'https://example.com/blog/photography-tips',
    'https://example.com/portfolio/gallery'
  ];

  const content = await scraper.extractContent(urls, {
    useHighlights: true,
    maxAgeHours: 24 // Ensure fresh content
  });

  console.log('Extracted Content:', content);
  return content;
}

// Example 4: Structured Search with Schema
async function example4_StructuredSearch() {
  const scraper = new WebScraper();

  const schema = {
    type: 'object',
    description: 'Photography studios and their services',
    required: ['studios'],
    properties: {
      studios: {
        type: 'array',
        description: 'List of photography studios',
        items: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              description: 'Name of the studio'
            },
            location: {
              type: 'string',
              description: 'Location of the studio'
            },
            services: {
              type: 'array',
              description: 'Services offered',
              items: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  };

  const results = await scraper.searchExaStructured('premium photography studios in India', schema, {
    searchType: 'deep',
    numResults: 10
  });

  console.log('Structured Results:', results);
  return results;
}

// Example 5: Domain-Specific Search
async function example5_DomainSpecificSearch() {
  const scraper = new WebScraper();

  const results = await scraper.searchExa('photography tips and techniques', {
    numResults: 10,
    includeDomains: ['petapixel.com', 'fstoppers.com', 'photographyblog.com'],
    maxAgeHours: 168 // Content from last week
  });

  console.log('Domain-Specific Results:', results);
  return results;
}

// Example 6: Compare Both Services
async function example6_CompareServices() {
  const scraper = new WebScraper();

  const comparison = await scraper.compareSearch('wedding photography lighting techniques', {
    exa: {
      numResults: 5,
      searchType: 'auto'
    },
    tavily: {
      maxResults: 5,
      searchDepth: 'basic'
    }
  });

  console.log('Comparison Results:', comparison);
  return comparison;
}

// Example 7: Real-time Content Extraction
async function example7_RealTimeExtraction() {
  const scraper = new WebScraper();

  const urls = [
    'https://example.com/latest-photography-trends-2026'
  ];

  // Always get fresh content (live crawl)
  const content = await scraper.extractContent(urls, {
    useHighlights: false,
    maxCharacters: 15000,
    maxAgeHours: 0 // Always livecrawl
  });

  console.log('Real-time Content:', content);
  return content;
}

// Example 8: Search with Exclude Domains
async function example8_ExcludeDomains() {
  const scraper = new WebScraper();

  const results = await scraper.searchExa('professional photography equipment reviews', {
    numResults: 10,
    excludeDomains: ['amazon.com', 'ebay.com', 'etsy.com'], // Exclude shopping sites
    searchType: 'deep'
  });

  console.log('Filtered Results:', results);
  return results;
}

// Export examples for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    example1_BasicExaSearch,
    example2_BasicTavilySearch,
    example3_ExtractContent,
    example4_StructuredSearch,
    example5_DomainSpecificSearch,
    example6_CompareServices,
    example7_RealTimeExtraction,
    example8_ExcludeDomains
  };
}
