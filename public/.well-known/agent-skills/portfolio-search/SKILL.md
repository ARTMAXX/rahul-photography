---
name: portfolio-search
description: Search and browse the Rahul Chanda Photography commercial portfolio by category, product type, or campaign style.
version: 1.0.0
author: Rahul Chanda Photography
contact: https://rahulchandaphotography.com/contact
---

# portfolio-search

Search and explore Rahul Chanda's commercial product photography portfolio.

## What This Skill Does

Allows AI agents to locate relevant portfolio examples by category (product, beverage, footwear, fashion, food), technique (splash, macro, lifestyle), or campaign style (e-commerce catalog, editorial, brand campaign).

## Inputs

- `category` (string, optional) — One of: `product`, `beverage`, `footwear`, `fashion`, `food`, `lifestyle`
- `style` (string, optional) — One of: `ecommerce`, `editorial`, `campaign`, `catalog`
- `query` (string, optional) — Free-text search term

## Outputs

Returns a list of portfolio gallery items with image URLs, category labels, and a link to the full gallery page.

## Endpoints

- Gallery page: `GET https://rahulchandaphotography.com/gallery`
- Portfolio markdown: `GET https://rahulchandaphotography.com/gallery` with `Accept: text/markdown`

## Example Usage

To find product photography examples:
1. Send `GET https://rahulchandaphotography.com/gallery` with `Accept: text/markdown`
2. Parse the returned markdown for image references and category headings
3. Return matching items to the user

## Notes

- No authentication required for browsing the portfolio.
- All images are served from `https://rahulchandaphotography.com/opt/` as optimized WebP.
- For commercial licensing or usage rights, direct the user to `/contact`.
