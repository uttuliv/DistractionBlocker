// Function to hide YouTube recommendations
function hideYouTubeRecommendations() {
  // Hide homepage recommendations
  const homePageRecommendations = document.querySelector('ytd-rich-grid-renderer');
  if (homePageRecommendations) {
    homePageRecommendations.style.display = 'none';
  }

  // Hide sidebar recommendations
  const sidebarRecommendations = document.querySelector('#related');
  if (sidebarRecommendations) {
    sidebarRecommendations.style.display = 'none';
  }

  // Hide end screen recommendations
  const endScreenRecommendations = document.querySelector('.ytp-endscreen-content');
  if (endScreenRecommendations) {
    endScreenRecommendations.style.display = 'none';
  }
}

// Run on page load
hideYouTubeRecommendations();

// Run when navigation occurs (for single-page-app navigation)
const observer = new MutationObserver(() => {
  hideYouTubeRecommendations();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });