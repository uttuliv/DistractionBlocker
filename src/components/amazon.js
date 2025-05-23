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