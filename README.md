# DistractionBlocker

A browser extension that helps you stay focused by removing distracting elements from popular websites.

## Overview

DistractionBlocker is designed to eliminate recommendation feeds, advertisements, and other attention-grabbing elements from websites that can disrupt your productivity. By hiding these distractions, you can focus on your intended tasks without being pulled into endless scrolling or unwanted content.

## Features

- **Automatic Blocking**: Works immediately when you visit supported websites
- **Low Resource Usage**: Lightweight implementation that doesn't slow down your browsing
- **Targeted Removal**: Only removes distracting elements while keeping website functionality intact
- **Multiple Site Support**: Works across several popular platforms

## Supported Websites

### YouTube
- Removes homepage recommendations
- Hides sidebar recommended videos
- Eliminates end screen video suggestions

### Amazon
- Hides product recommendations
- Removes "Recommended for you" sections
- Cleans up the homepage

### Bilibili
- Removes homepage recommendations
- Hides channel headers
- Eliminates video page advertisements and recommendations

### LinkedIn
- Hides ads and sponsored content
- Removes news feed recommendations
- Cleans up sidebar distractions

## Installation

### From Repository
1. Clone the repository:
   ```
   git clone 
   ```
2. Load the extension in your browser:
   - Chrome: Go to `chrome://extensions/`, enable Developer mode, and click "Load unpacked". Select the cloned project folder.

## Usage

After installation, the extension works automatically when you visit any of the supported websites. No configuration is needed:

1. When you visit YouTube, Amazon, Bilibili, or LinkedIn, distracting elements will be automatically hidden
2. You can click the extension icon in your browser toolbar to see which sites are being protected
3. The extension runs in the background and works without requiring any user interaction

## Development

This project is a simple browser extension built with vanilla JavaScript. The structure is straightforward:

- `manifest.json` - Extension configuration
- `index.html` - Popup interface
- `src/components/` - Contains site-specific content blocking scripts

### Project Structure
```
DistractionBlocker/
├── manifest.json
├── index.html
└── src/
    └── components/
        ├── amazon.js
        ├── bilibili.js
        ├── linkedin.js
        └── youtube.js
```


