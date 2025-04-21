// Function to hide LinkedIn distractions
function hideLinkedInDistractions() {
  console.log('DistractionBlocker: Running on LinkedIn page');
  
  // Common distraction selectors
  const distractionSelectors = [
    '.ad-banner-container', // Ads
    '.relative', //homepage recommendations
    '#feed-news-module',// homepage sidebar LinkedIn News
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