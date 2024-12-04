# FLiPR-Task
Purpose and Overview
This project is a responsive blog interface designed using Bootstrap 5.3. It features a modern look and ensures consistency across all devices. The webpage includes sections for recent blog posts, all blog posts, and pagination, along with a toggle for light and dark modes.

Main Features
Header and Navigation
Navigation Bar: Links to sections such as Blog, Projects, About, and Newsletter.
Dark Mode Toggle: Includes a toggle switch with sun and moon icons for easy theme switching.
Brand Name: "Aman Vyas" is prominently displayed and linked to the homepage.
Blog Section
Recent Blog Posts:
Displayed in a two-column layout using Bootstrap's grid system.
Each card includes an image, author, date, title, description, and tags represented as badges (e.g., Design, Research).
All Blog Posts:
Presented in a three-column layout, maintaining visual consistency with the recent posts section.
Pagination
Easy navigation across multiple pages of blog posts with links for previous, next, and specific pages, including ellipsis for additional pages.
Footer
Links to social media platforms (Twitter, LinkedIn) and an RSS feed.
Simple copyright text: "© 2023".
CSS: Light and Dark Theme Implementation
The CSS styles enable both light and dark themes, with the following characteristics:

Light Theme
Default Background: Light colors with dark text (#212529, #333).
Card Design: Minimalist with soft color palettes for badges.
Dark Theme
Background: Dark shade (#090D20) with light text for readability.
Interactive Elements: Cards and pagination styled for dark mode, ensuring contrast and visibility.
Typography
Font Family: Arial, Helvetica, sans-serif.
Custom Scaling: Dramatic headings and smooth transitions for interactive elements.
Layout and Spacing
Utilizes Flexbox for responsive layouts, ensuring cards and content are neatly aligned.
JavaScript: Dark Mode Toggle
This JavaScript code adds functionality for toggling between light and dark modes, ensuring user preferences are remembered using local storage.

Key Features
Initialization: Waits for the DOM to load, fetching the previously chosen theme from local storage.
Switch Toggle Behavior: Listens for changes on the toggle switch to dynamically apply the selected theme.
Dynamic Theme Application: Updates the toggle switch state based on the current theme stored in local storage.
Benefits
Persistence: Remembers user preferences across sessions using local storage.
User -Friendly: Automatically sets the toggle switch state according to the saved theme.
Separation of Concerns: Keeps theme management logic clean and separate from HTML and CSS.
Event-Driven: Efficiently manages user interactions without unnecessary DOM manipulations.
Conclusion
This blog interface not only provides a modern and responsive design but also enhances user experience through its dark mode feature. The implementation of Bootstrap, CSS, and JavaScript ensures a seamless and engaging interaction for users.
