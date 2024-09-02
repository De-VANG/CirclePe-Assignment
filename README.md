
  # Frontend Assignment
  

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm run dev` to view project in browser
  
**CirclePe Frontend Assignment**

**Overview**

This project is a responsive website implementation based on Figma designs and prototypes. The objective was to deliver a pixel-perfect, fully responsive, cross-browser compatible website, following best practices for performance optimization and accessibility.

**Technologies Used**

Next.js: Chosen for its server-side rendering, static site generation, and out-of-the-box performance optimizations.
Tailwind CSS: A utility-first CSS framework used to maintain consistency, modularity, and rapid styling based on the Figma design tokens.
Framer Motion: Used for implementing smooth transitions and animations as specified in the Figma prototype.
HTML5 & CSS3: Semantic HTML was used for accessibility best practices, with CSS custom properties for design token integration.
JavaScript (ES6+): For interactivity and logic within the application, focusing on modern features like async/await and modular imports.
Git & GitHub: For version control and collaboration, ensuring proper management of code changes across different stages of development.

**Project Features**

Responsive Design: Optimized layouts for mobile, tablet, and desktop views, ensuring seamless user experience across all devices.
Pixel-Perfect Implementation: Strict adherence to Figma designs to ensure a precise match in layout, typography, and color schemes.
Animations & Interactions: Smooth transitions and hover effects implemented using Framer Motion and CSS animations.
Cross-Browser Compatibility: Tested across major browsers (Chrome, Firefox, Safari, and Edge) for consistent functionality.
Performance Optimizations: Optimized images and assets for fast load times and implemented lazy loading where possible.
Accessibility: Followed WCAG guidelines, using semantic HTML, ARIA roles, and ensuring the site is keyboard navigable.


**Challenges Faced**

1. Cross-Browser Compatibility
Challenge: Achieving consistent rendering across multiple browsers with varying support for CSS features.
Solution: Used modern CSS features with proper fallbacks, and conducted extensive testing on BrowserStack to ensure compatibility across devices and browsers.
2. Complex Animations
Challenge: Implementing the complex transitions and animations as shown in the Figma prototype while keeping performance optimal.
Solution: Leveraged Framer Motion for JavaScript-based animations, allowing fine control over animation timelines and easing functions without compromising performance.
3. Performance Optimization
Challenge: Ensuring fast load times even with high-resolution images and heavy animation scripts.
Solution: Optimized images using tools like ImageOptim and TinyPNG, and implemented lazy loading and code-splitting in Next.js to defer non-critical resources until they were needed.
4. Version Control Conflicts
Challenge: Faced issues with Git push/pull operations due to conflicts between local and remote branches.
Solution: Integrated remote changes by pulling first, resolving conflicts, and pushing updates while maintaining proper commit hygiene.


**Conclusion**

This project demonstrates a strong emphasis on responsive design, performance optimization, and accessibility best practices. By leveraging modern technologies like Next.js and Tailwind CSS, we were able to create a maintainable and scalable codebase that adheres to best practices for both frontend development and user experience.
