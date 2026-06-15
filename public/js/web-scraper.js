/**
 * Web Scraping Utility
 * Integrates Tavily and Exa APIs for content scraping
 *
 * Usage:
 *   const scraper = new WebScraper();
 *   const results = await scraper.searchExa('your query');
 *   const results = await scraper.searchTavily('your query');
 *   const content = await scraper.extractContent(['url1', 'url2']);
 */

class WebScraper {
  constructor() {
    this.tavilyApiKey = process.env.TAVILY_API_KEY || '';
    this.exaApiKey = process.env.EXA_API_KEY || '';

    // Validate API keys on initialization
    if (!this.tavilyApiKey && !this.exaApiKey) {
      console.warn('Warning: No API keys configured. Please set TAVILY_API_KEY and/or EXA_API_KEY in .env file');
    }
  }

  /**
   * Search using Exa API
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @returns {Promise<Object>} Search results with highlights
   */
  async searchExa(query, options = {}) {
    if (!this.exaApiKey) {
      throw new Error('Exa API key not configured');
    }

    const {
      numResults = 10,
      searchType = 'auto',
      includeDomains = [],
      excludeDomains = [],
      maxAgeHours = undefined
    } = options;

    try {
      const requestBody = {
        query,
        type: searchType,
        num_results: numResults,
        contents: {
          highlights: true
        }
      };

      // Add domain filters if provided
      if (includeDomains.length > 0) {
        requestBody.includeDomains = includeDomains;
      }
      if (excludeDomains.length > 0) {
        requestBody.excludeDomains = excludeDomains;
      }

      // Add freshness control if specified
      if (maxAgeHours !== undefined) {
        requestBody.contents.maxAgeHours = maxAgeHours;
      }

      const response = await fetch('https://api.exa.ai/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.exaApiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Exa API error: ${error.message || response.statusText}`);
      }

      const data = await response.json();

      return {
        success: true,
        query,
        results: data.results || [],
        totalResults: data.results?.length || 0,
        searchType
      };

    } catch (error) {
      console.error('Exa search error:', error);
      return {
        success: false,
        error: error.message,
        query
      };
    }
  }

  /**
   * Search using Tavily API
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @returns {Promise<Object>} Search results with content
   */
  async searchTavily(query, options = {}) {
    if (!this.tavilyApiKey) {
      throw new Error('Tavily API key not configured');
    }

    const {
      searchDepth = 'basic', // 'basic' or 'advanced'
      includeDomains = [],
      excludeDomains = [],
      maxResults = 10,
      includeAnswer = false,
      includeRawContent = false
    } = options;

    try {
      const requestBody = {
        api_key: this.tavilyApiKey,
        query,
        search_depth: searchDepth,
        max_results: maxResults,
        include_answer: includeAnswer,
        include_raw_content: includeRawContent
      };

      // Add domain filters if provided
      if (includeDomains.length > 0) {
        requestBody.include_domains = includeDomains;
      }
      if (excludeDomains.length > 0) {
        requestBody.exclude_domains = excludeDomains;
      }

      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Tavily API error: ${error.detail || error.message || response.statusText}`);
      }

      const data = await response.json();

      return {
        success: true,
        query,
        results: data.results || [],
        answer: data.answer,
        totalResults: data.results?.length || 0,
        searchDepth
      };

    } catch (error) {
      console.error('Tavily search error:', error);
      return {
        success: false,
        error: error.message,
        query
      };
    }
  }

  /**
   * Extract content from specific URLs using Exa API
   * @param {string[]} urls - Array of URLs to extract content from
   * @param {Object} options - Content extraction options
   * @returns {Promise<Object>} Extracted content
   */
  async extractContent(urls, options = {}) {
    if (!this.exaApiKey) {
      throw new Error('Exa API key not configured');
    }

    const {
      useHighlights = true,
      maxCharacters = 10000,
      maxAgeHours = undefined
    } = options;

    try {
      const requestBody = {
        urls,
        maxAgeHours
      };

      if (useHighlights) {
        requestBody.highlights = true;
      } else {
        requestBody.text = {
          max_characters: maxCharacters
        };
      }

      const response = await fetch('https://api.exa.ai/contents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.exaApiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Exa API error: ${error.message || response.statusText}`);
      }

      const data = await response.json();

      return {
        success: true,
        urls,
        contents: data.results || [],
        totalContents: data.results?.length || 0
      };

    } catch (error) {
      console.error('Content extraction error:', error);
      return {
        success: false,
        error: error.message,
        urls
      };
    }
  }

  /**
   * Advanced search with structured output using Exa
   * @param {string} query - Search query
   * @param {Object} schema - JSON schema for structured output
   * @param {Object} options - Search options
   * @returns {Promise<Object>} Structured search results
   */
  async searchExaStructured(query, schema, options = {}) {
    if (!this.exaApiKey) {
      throw new Error('Exa API key not configured');
    }

    const {
      searchType = 'deep',
      numResults = 10
    } = options;

    try {
      const requestBody = {
        query,
        type: searchType,
        num_results: numResults,
        outputSchema: schema,
        contents: {
          highlights: true
        }
      };

      const response = await fetch('https://api.exa.ai/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.exaApiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Exa API error: ${error.message || response.statusText}`);
      }

      const data = await response.json();

      return {
        success: true,
        query,
        structuredContent: data.output?.content,
        grounding: data.output?.grounding,
        searchType
      };

    } catch (error) {
      console.error('Exa structured search error:', error);
      return {
        success: false,
        error: error.message,
        query
      };
    }
  }

  /**
   * Compare results from both Tavily and Exa
   * @param {string} query - Search query
   * @param {Object} options - Options for both services
   * @returns {Promise<Object>} Comparison results
   */
  async compareSearch(query, options = {}) {
    const [exaResults, tavilyResults] = await Promise.all([
      this.searchExa(query, options.exa || {}),
      this.searchTavily(query, options.tavily || {})
    ]);

    return {
      query,
      exa: exaResults,
      tavily: tavilyResults,
      comparison: {
        exaSuccess: exaResults.success,
        tavilySuccess: tavilyResults.success,
        exaResultCount: exaResults.results?.length || 0,
        tavilyResultCount: tavilyResults.results?.length || 0
      }
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WebScraper;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
  window.WebScraper = WebScraper;
}
