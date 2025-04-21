// Function to hide Bilibili recommendations
function hideBilibiliRecommendations() {
  console.log('DistractionBlocker: Running on bilibili page');
  
  // Common recommendation selectors
  const recommendationSelectors = [
    '.bili-header__channel', // homepage header(under searching bar)
    '.bili-feed4-layout', // homepage recommendations
    '.header-channel-fixed', //homepage channel bar

    '#slide_ad',// video page ad
    '.ad-report-inner',// video page ad(after recommendations)
    '.recommend-list-v1',// video page recommendations
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
console.log('DistractionBlocker: Bilibili script loaded');
hideBilibiliRecommendations();

// Run when navigation occurs
const observer = new MutationObserver(() => {
  console.log('DistractionBlocker: Page content changed, checking for new recommendations');
  hideBilibiliRecommendations();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
console.log('DistractionBlocker: Observer started');