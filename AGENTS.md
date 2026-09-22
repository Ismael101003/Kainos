# KAINOS — Project Guidelines

## Project scope

- This is a static, mobile-first landing page for KAINOS, a local technology-solutions business in Tlalnepantla de Baz, Estado de México.
- Keep the project deployable on GitHub Pages. Use only HTML5, CSS3, and vanilla JavaScript; do not introduce frameworks, build tooling, backends, databases, or package dependencies without explicit approval.

## Design and content

- Preserve the KAINOS identity: navy as the base, electric blue for primary actions, and red as a deliberate accent inspired by the logo.
- Aim for a refined, trustworthy local-business presence. Avoid generic agency copy, unsupported claims, excessive gradients, heavy dark layouts, and distracting animation.
- Design mobile-first. Maintain clear visual hierarchy, readable contrast, generous touch targets, keyboard focus states, and responsive layouts.
- Keep customer-facing copy concise, practical, and in Mexican Spanish. Do not invent clients, certifications, prices, metrics, or experience.

## Code conventions

- Keep semantic HTML and use descriptive `alt` text. Preserve the skip link, accessible navigation, and reduced-motion support.
- Prefer CSS custom properties and existing stylesheets. Add narrowly scoped overrides only when a shared component should not change.
- Keep JavaScript dependency-free, defensive, and focused on progressive enhancement. Do not show fake form-success states.
- Store public contact and social configuration only in `js/main.js` under `KAINOS_CONFIG`. The WhatsApp number must use international digits only.

## Contact behavior

- WhatsApp links must generate `https://wa.me/529131035238` URLs and the public email is `ismaelmara1010@gmail.com`.
- A static site cannot send email itself. Use `mailto:` only to prepare a real email in the visitor's client; use a backend or approved form service before claiming automatic delivery.

## Before finishing changes

- Check navigation anchors, contact links, responsive breakpoints, and JavaScript syntax.
- Preserve fast loading and avoid adding large assets unless they materially improve the page.
- When making a visual change, review both desktop and mobile CSS paths.
