# auth.md

This document describes how AI agents can discover authentication and registration capabilities for **Rahul Chanda Photography** (`https://rahulchandaphotography.com`).

## Overview

Rahul Chanda Photography is a commercial product photography studio. The site is **publicly accessible without authentication**. No account or token is required to browse the portfolio, blog, or service information.

## Agent Audience

This registration document is intended for AI agents that wish to:
- Browse the portfolio or blog on behalf of a user
- Retrieve structured markdown content via content negotiation
- Guide users through submitting a booking inquiry

## Authentication

**No authentication is required** to access portfolio content, blog articles, or service information.

All public endpoints support unauthenticated `GET` requests. Agents may optionally include the following in outbound requests for transparency:

```http
User-Agent: <agent-name>/<version> (+https://your-agent-docs-url)
```

## Resource Metadata

OAuth Protected Resource Metadata (RFC 9728):

```
GET https://rahulchandaphotography.com/.well-known/oauth-protected-resource
```

## Agent Discovery Endpoints

| Document | URL |
|---|---|
| API Catalog (RFC 9727) | `https://rahulchandaphotography.com/.well-known/api-catalog` |
| A2A Agent Card | `https://rahulchandaphotography.com/.well-known/agent-card.json` |
| MCP Server Card | `https://rahulchandaphotography.com/.well-known/mcp/server-card.json` |
| Agent Skills Index | `https://rahulchandaphotography.com/.well-known/agent-skills/index.json` |
| OIDC Discovery | `https://rahulchandaphotography.com/.well-known/openid-configuration` |
| Bot Auth JWKS | `https://rahulchandaphotography.com/.well-known/http-message-signatures-directory` |

## Contact

For questions about agent integration or commercial photography inquiries:

- **Contact form:** https://rahulchandaphotography.com/contact
- **Phone/WhatsApp:** +91 70789 39475
- **Location:** Dehradun, Uttarakhand, India
