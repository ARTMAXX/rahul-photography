# auth.md — Agent Registration & Authentication

This document describes authentication, authorization, and agent registration for Rahul Chanda Photography.

## Overview

Rahul Chanda Photography is a commercial and product photography studio based in Dehradun, India. The site provides portfolio showcases, technical photography articles, and commercial booking inquiry workflows.

## Agent Audience

This document is intended for autonomous AI agents, web crawlers, and LLM-assisted search systems that:
- Browse commercial photography portfolio assets and case studies
- Retrieve structured content via HTTP Content Negotiation (Accept: text/markdown)
- Assist users in preparing and submitting commercial photoshoot inquiries

## Authentication & Authorization

All public content on this domain is openly accessible without authentication.

- Public Access: Portfolio, blog, service pages, and sitemaps require no API keys or Bearer tokens.
- Header Identification: Agents are encouraged to include an identifying User-Agent string.

## OAuth Protected Resource Metadata

The Protected Resource Metadata (PRM) endpoint is available at:

https://rahulchandaphotography.com/.well-known/oauth-protected-resource

- Resource: https://rahulchandaphotography.com
- Authorization Servers: https://rahulchandaphotography.com
- Bearer Methods: header
- Scopes Supported: read:portfolio, read:blog, write:inquiry

## OAuth Authorization Server Metadata

The OAuth Authorization Server metadata endpoint is available at:

https://rahulchandaphotography.com/.well-known/oauth-authorization-server

- Issuer: https://rahulchandaphotography.com
- Registration URI: https://rahulchandaphotography.com/agent/auth
- Supported Methods: anonymous, identity_assertion
- Identity Assertion Types: urn:ietf:params:oauth:token-type:id-jag, verified_email
- JWKS URI: https://rahulchandaphotography.com/.well-known/http-message-signatures-directory

## Standalone Agent Registration

For agents operating without OAuth 2.0 discovery:

- Audience: public AI agents and assistants
- Registration Endpoint: https://rahulchandaphotography.com/agent/auth
- Supported Methods: anonymous, identity_assertion
- Credentials: none required for public GET requests

## Agent Discovery Endpoints

- API Catalog (RFC 9727): https://rahulchandaphotography.com/.well-known/api-catalog
- OpenAPI Specification: https://rahulchandaphotography.com/openapi.json
- Agent Skills Index: https://rahulchandaphotography.com/.well-known/agent-skills/index.json
- A2A Agent Card: https://rahulchandaphotography.com/.well-known/agent-card.json
- MCP Server Card: https://rahulchandaphotography.com/.well-known/mcp/server-card.json
- Web Bot Auth JWKS: https://rahulchandaphotography.com/.well-known/http-message-signatures-directory
- LLMs Directory: https://rahulchandaphotography.com/llms.txt

## Contact & Studio Inquiries

- Studio Location: Dehradun, Uttarakhand, India
- Contact Form: https://rahulchandaphotography.com/contact
- WhatsApp / Phone: +91 70789 39475
