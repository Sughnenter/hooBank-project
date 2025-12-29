Animations

This project uses Framer Motion for component animations and provides a small reusable wrapper `ScrollReveal` for scroll-triggered reveals. There are also a few lightweight CSS keyframes in `src/index.css` for cases where a JS-free animation is preferred.

Files of interest

- `src/components/ScrollReveal.jsx` — a small wrapper around Framer Motion that accepts props: `as`, `direction`, `delay`, `distance`, and `duration`. Use it to animate children as they enter the viewport.
- `src/index.css` — contains helper keyframes and utility classes: `.float`, `.btn-press`, and `.fade-in-up`.

Quick usage

- Scroll reveal (recommended):

  Wrap any element with `ScrollReveal`:

  ```jsx
  import ScrollReveal from "./components/ScrollReveal";

  <ScrollReveal as="section" direction="up" delay={0.08}>
    <h2>My section</h2>
  </ScrollReveal>;
  ```

- CSS helpers (no JS):

  - Add `className="float"` to give a gentle bobbing animation.
  - Add `className="fade-in-up"` to run a one-time fade + translate animation on mount.
  - Add `className="btn-press"` to a button wrapper to give an active press animation.

Notes

- Framer Motion is already included as a dependency in `package.json`.
- The `ScrollReveal` wrapper uses `whileInView` and `viewport={{ once: true }}` so elements reveal when scrolled into the viewport and animate only once by default. Adjust `amount` and `once` inside `ScrollReveal.jsx` if you need different behavior.

If you'd like, I can add Tailwind-configured keyframe entries so these helpers are available as `animate-*` utility classes (e.g., `animate-float`).
