// Function to hide Amazon recommendations
function hideAmazonRecommendations() {
  // Common recommendation selectors
  const recommendationSelectors = [
    '#similarities_feature_div', // "Products related to this item"
    '#rhf', // "Recommended for you"
    '#sp_detail', // Sponsored products
    '#sims-consolidated-1_feature_div', // "Customers who viewed this item also viewed"
    '#sims-consolidated-2_feature_div', // "Customers who bought this item also bought"
    '#desktop-dp-sims_purchase-similarities-sims-feature', // Similar items
    '#personalizedContent', // Personalized content
    '#hero-quick-promo', // Homepage promotions
    '#gridItemRoot', // Homepage recommended items
  ];

  // Hide each recommendation section
  recommendationSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element) {
        element.style.display = 'none';
      }
    });
  });
}

// Run on page load
hideAmazonRecommendations();

// Run when navigation occurs
const observer = new MutationObserver(() => {
  hideAmazonRecommendations();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });