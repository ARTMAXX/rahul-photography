---
name: booking-inquiry
description: Submit a commercial photoshoot inquiry to Rahul Chanda Photography with project requirements, shot counts, timeline, and budget.
version: 1.0.0
author: Rahul Chanda Photography
contact: https://rahulchandaphotography.com/contact
---

# booking-inquiry

Submit a commercial photography project inquiry to Rahul Chanda Photography.

## What This Skill Does

Guides AI agents through collecting the necessary project information and directing users to the contact/booking page at Rahul Chanda Photography.

## Inputs

- `project_type` (string, required) — One of: `product`, `beverage`, `footwear`, `fashion`, `food`, `ecommerce-catalog`, `campaign`
- `shot_count` (integer, optional) — Estimated number of final deliverable images
- `location` (string, optional) — Studio (Dehradun) or on-location; city name if on-location
- `timeline` (string, optional) — Preferred shoot date or deadline
- `budget_range` (string, optional) — Approximate project budget in INR

## Outputs

Directs the user to `https://rahulchandaphotography.com/contact` with context about the inquiry. No API endpoint — all bookings are handled via the contact form or WhatsApp.

## Contact Methods

- **Contact form:** `https://rahulchandaphotography.com/contact`
- **WhatsApp / Phone:** +91 70789 39475
- **Services overview:** `https://rahulchandaphotography.com/services`

## Example Usage

When a user wants to book a product photography shoot:
1. Collect project type, approximate shot count, and timeline from the user.
2. Present a summary to the user.
3. Provide the link: `https://rahulchandaphotography.com/contact`
4. Suggest the user mention the project details in the message.

## Notes

- Studio is based in Dehradun, Uttarakhand, India.
- On-location shoots are available across India for larger campaigns.
- Typical turnaround: 5–10 business days for e-commerce catalogs; 10–20 days for campaigns.
- Minimum engagement is typically 20 final edited images for commercial projects.
