# FLiPR-Task
Purpose and Overview
The HTML document is a design of a webpage as a blog interface. It utilizes Bootstrap 5.3 for responsiveness and styling to give it a modern look with consistency in all devices. It contains sections of recent blog posts, all blog posts, and pagination with a toggle for light/dark mode.

Main Elements
Header and Navigation:

A navigation bar is included in the form of <nav> that has links to sections such as Blog, Projects, About, and Newsletter.
Includes a dark mode toggle with a sun and moon icon.
The brand name ("Aman Vyas") is displayed on the top and linked to the homepage.
Blog Section:

Recent Blog Posts:
In two-column layout using the Bootstrap grid system.
Each card includes:
An image.
Author, date, title, and description of the blog post.
Tags represented as badges (e.g., Design, Research).
All Blog Posts:
In three-column layout, displaying other blog posts.
The cards are visually consistent with the cards in the new blog section.
Pagination:
The system includes pagination for navigation across multiple pages of a blog.
Links to the previous, next, and a certain page with an ellipsis sign for more pages
Footer:
The footer features links to social media networks like Twitter, LinkedIn, and an RSS feed
Copyright text: Simple version - 2023.

It makes use of a <div> container with a <input> element to toggle light and dark themes, linking functionality to an external script (nightmode.js).
Benefits
Responsive Design: Leverages Bootstrap's grid system for flexibility and consistency.
Modern UI Features:
Badge usage to classify content ("Research," "Design").
Dark mode toggle improves the user experience.
Content Organization:
Recent and All Blog Posts are clearly differentiated.
Pagination makes it easy to navigate.
Social Media Integration: Footer links enhance discoverability and connectivity.

JavaScript Code: Dark Mode Toggle
Implementation Goal and Summary
This piece of JavaScript code adds dark mode toggle functionality to the webpage. It will not allow the user's preference on theme to be lost at a session level, using local storage. The script makes dynamic changes between light and dark themes by adding/removing the respective CSS class from the <body>.

Main Elements
Initialization:
Script waits for the DOM being loaded completely with DOMContentLoaded.
Fetches the theme chosen previously from local storage, using localStorage.getItem("theme").
Defaults to "light-theme" if there is no saved theme.
Applies the saved theme by adding the appropriate class either light-theme or dark-theme to the <body>.
Switch Toggle Behaviour:
It will listen to the change event on the checkbox element named darkModeToggle.
Upon toggle;
It will add the class dark-theme along with remove the class light-theme if switch is turned ON
Add the class light-theme along with remove the dark-theme class if the switch is turned OFF
This selected theme is saved to localStorage to persist.a
Dynamic Theme Application:

Updates the state of the toggle switch (checked) based on the current theme stored in localStorage.
Benefits
Persistence:

The script remembers the user's theme preference by using localStorage. So, even after page reloads or browser restarts, the user will experience the same thing.
User-Friendly:

The state of the toggle switch (checked) is automatically set according to the saved theme so that there is no confusion.
Separation of Concerns:

The logic of managing themes is centralized and kept clean from the HTML and CSS.
Event-Driven:

Uses event listeners properly to manage user interaction without DOM manipulations.
