GatusHub
Powered by GatusSecGG

Your premier destination for cybersecurity, software development, and penetration testing solutions.



Note: Replace with an actual screenshot (e.g., screenshot.png) after capturing or hosting.



Current Date: March 29, 2025


Overview
GatusHub is a futuristic, interactive web platform designed to highlight expertise in cybersecurity, software development, web development, and penetration testing. Featuring a sleek glassmorphism UI, matrix rain effects, and a live Code Playground, it serves as both a professional portfolio and a practical tool for tech enthusiasts. Created by Mark JP Tolentino, GatusHub embodies a passion for secure, innovative, and visually captivating digital experiences.

Features
GatusHub is packed with features to engage users and showcase technical prowess:

Interactive Header:
Real-time clock with a smooth slide-up animation for changing digits.
Dark/light mode toggle and background music controls.
Code Playground:
Resizable split-pane editor supporting HTML/CSS/JS and Python (via Pyodide).
Syntax highlighting, live output, and a "Copy Code" button.
Visual Effects:
Matrix rain background, particle animations, custom cursor, and 3D tilt effects on content boxes.
Responsive Design: Fully optimized for desktop and mobile with a collapsible hamburger menu.
Dynamic Content:
Typing animation for slogans, animated stats counters, and a video carousel for tutorials.
Glassmorphism UI: Transparent, blurred elements for a modern, premium look.
Performance: Lazy loading for images and iframes to enhance speed.
Easter Eggs: Click the logo for a playful spin animation.
Demo
Experience GatusHub live: [Insert Live Demo Link]

Note: Host on GitHub Pages, Netlify, or similar (e.g., https://markjptolentino.github.io/gatushub), then update this link. For now, it’s a placeholder.

Installation
To run GatusHub locally, follow these steps:

Clone the Repository (if hosted):
bash

Collapse

Wrap

Copy
git clone https://github.com/markjptolentino/gatushub.git
cd gatushub
Replace with your repo URL if applicable.
Open the Project:
Double-click index.html or drag it into a browser (e.g., Chrome, Firefox).
No server or build tools required for basic use.
Dependencies:
Requires an internet connection for CDNs (e.g., Prism.js, Pyodide).
No local installation of libraries needed.
Optional Local Server:
For a production-like setup:
bash

Collapse

Wrap

Copy
python -m http.server 8000
Visit http://localhost:8000.
Usage
Here’s how to interact with GatusHub:

Navigation: Use the sticky nav bar to explore sections like "Cybersecurity," "Code Playground," or "Contact."
Header Controls:
🌙/☀️: Switch between dark and light modes.
🎵/🎶: Toggle background music on/off.
Code Playground:
Select a tab (HTML/CSS/JS or Python).
Edit code in the left pane, click "Run Code" to see results, and drag the resizer to adjust layout.
Click "Copy Code" to copy to clipboard.
Scroll: Use the ↑ button (appears after scrolling) to return to the top.
Contact: Fill out the "Contact Us" form (currently logs to console).
Project Structure
The project is organized as follows:

text

Collapse

Wrap


gatushub/
├── index.html       # Core HTML file with structure and content
├── style.css        # Stylesheet for design, animations, and responsiveness
├── script.js        # JavaScript for interactivity and functionality
└── README.md        # Project documentation (this file)
Add assets like images or audio files to this directory and update paths in index.html as needed.

Technologies Used
GatusHub leverages modern web technologies:

Core:
HTML5: Semantic structure.
CSS3: Glassmorphism, slide-up animations, and media queries.
JavaScript: Dynamic features and event handling.
Libraries:
Prism.js: Code syntax highlighting.
Vanilla Tilt: 3D tilt effects.
Pyodide: Python execution in-browser.
Fonts: Google Fonts (Orbitron, Roboto Mono).
CDNs: Hosted via Cloudflare, jsDelivr, etc.
Known Issues
Current limitations include:

Pyodide Delay: Python execution may take 10-20 seconds to load initially.
Audio: The sample music URL (SoundHelix-Song-1.mp3) may fail in some regions; replace with a local file.
Mobile Resizer: Code Playground resizer is hidden on mobile for layout reasons.
Form: Contact form logs to console only; no backend yet.
Future Plans
Planned enhancements:

Backend: Add server-side form handling (e.g., Node.js, Flask).
Custom Assets: Replace placeholders (logo, favicon, audio) with originals.
Search: Implement functional search via the 🔍 icon.
Chat: Upgrade the chat bubble to a live chat system.
Optimization: Bundle CDNs locally for offline use.
Contributing
Contributions are encouraged! To contribute:

Fork the repository.
Create a branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "Add your feature".
Push: git push origin feature/your-feature.
Submit a pull request with a detailed description.
Please follow the existing code style and add comments for clarity.

Credits
Developer: Mark JP Tolentino
Inspiration: Cyberpunk aesthetics, cybersecurity tools, and open-source projects.
Tools: Developed in Visual Studio Code; tested on Chrome and Firefox.
Thanks: To Prism.js, Vanilla Tilt, and Pyodide communities for their amazing libraries.
License
GatusHub is licensed under the MIT License:

text

Collapse

Wrap

Copy
MIT License

Copyright (c) 2025 Mark JP Tolentino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Contact
Reach out for questions or collaboration:

Author: Mark JP Tolentino
Email: tolentinomarkjp@gmail.com
YouTube
LinkedIn
GitHub
Twitter
TryHackMe
Verification of Table of Contents
Here’s how the TOC aligns with the sections:

: Describes the project’s purpose and creator.
: Lists key functionalities with details.
: Provides a placeholder for a live demo link.
: Step-by-step setup instructions.
: Guides users on how to interact with the site.
: Details the file layout.
: Lists tools and libraries.
: Highlights current limitations.
: Outlines upcoming features.
: Explains how to contribute.
: Acknowledges contributors and tools.
: Includes the full MIT License text.
: Provides contact info and social links.
Changes Made
Clarity: Slightly refined section descriptions for better readability (e.g., expanded "Features" with sub-bullets).
Consistency: Ensured every TOC entry has a corresponding detailed section.
No Gaps: Confirmed no TOC items lack content, making it "filled up."
How to Use
Save: Copy this into README.md in your project root.
Customize:
Update the screenshot URL with a real image.
Replace the demo link once hosted.
Adjust any section (e.g., "Known Issues") based on your testing.
Preview: View in a Markdown editor or on GitHub.