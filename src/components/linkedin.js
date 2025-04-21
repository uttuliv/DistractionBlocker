// Function to hide LinkedIn distractions
function hideLinkedInDistractions() {
  console.log('DistractionBlocker: Running on LinkedIn page');
  
  // Common distraction selectors
  const distractionSelectors = [
    '.feed-follows-module', // Who to follow
    '.feed-shared-news-module', // LinkedIn News
    '.premium-upsell-card', // Premium upsell
    '.ad-banner-container', // Ads
    '.feed-shared-update-v2--promoted', // Promoted content
    '.feed-shared-update-v2--sponsored', // Sponsored content
    '.right-rail', // Right sidebar with recommendations
    '.feed-right-rail', // Feed right rail
  ];

  // Hide each distracting section
  let totalHidden = 0;
  distractionSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    console.log(`DistractionBlocker: Found ${elements.length} elements matching "${selector}"`);
    elements.forEach(element => {
      if (element) {
        element.style.display = 'none';
        totalHidden++;
      }
    });
  });
  
  console.log(`DistractionBlocker: Hidden ${totalHidden} distracting elements in total`);
}

// Run on page load
console.log('DistractionBlocker: LinkedIn script loaded');
hideLinkedInDistractions();

// Run when navigation occurs
const observer = new MutationObserver(() => {
  console.log('DistractionBlocker: Page content changed, checking for new distractions');
  hideLinkedInDistractions();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
console.log('DistractionBlocker: Observer started');