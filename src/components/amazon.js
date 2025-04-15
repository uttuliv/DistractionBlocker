// Function to hide Amazon recommendations
function hideAmazonRecommendations() {
  console.log('DistractionBlocker: Running on Amazon page');
  
  // Common recommendation selectors
  const recommendationSelectors = [
    '#nav-main', // Homepage top-navigation menu
    '#pageContent',//Homepage recommendations
    '#navFooter', // Footer recommendations
    '[id*="rhf"]', // Recommendations based on items you search in the main content area
    '.a-container.octopus-page-style', // Recommendations in the main content area
  ];

  // Hide each recommendation section
  let totalHidden = 0;
  recommendationSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    console.log(`DistractionBlocker: Found ${elements.length} elements matching "${selector}"`);
    elements.forEach(element => {
      if (element) {
        element.style.display = 'none';
        totalHidden++;
      }
    });
  });
  
  console.log(`DistractionBlocker: Hidden ${totalHidden} recommendation elements in total`);
  
  // Add a visual indicator that the extension is active
  if (!document.getElementById('distraction-blocker-indicator')) {
    const indicator = document.createElement('div');
    indicator.id = 'distraction-blocker-indicator';
    indicator.style.position = 'fixed';
    indicator.style.bottom = '10px';
    indicator.style.right = '10px';
    indicator.style.padding = '5px 10px';
    indicator.style.backgroundColor = 'rgba(0,0,0,0.7)';
    indicator.style.color = 'white';
    indicator.style.zIndex = '9999';
    indicator.style.fontSize = '12px';
    indicator.style.borderRadius = '3px';
    indicator.style.pointerEvents = 'none';
    indicator.textContent = 'DistractionBlocker: Active';
    document.body.appendChild(indicator);
  }
}

// Run on page load
console.log('DistractionBlocker: Amazon script loaded');
hideAmazonRecommendations();

// Run when navigation occurs
const observer = new MutationObserver(() => {
  console.log('DistractionBlocker: Page content changed, checking for new recommendations');
  hideAmazonRecommendations();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
console.log('DistractionBlocker: Observer started');