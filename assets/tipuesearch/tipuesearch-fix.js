// Defensive fix for Tipue Search - ensures tipuesearch is never null or has invalid entries
(function() {
    // Fix tipuesearch variable
    if (typeof tipuesearch === 'undefined' || tipuesearch === null || !tipuesearch.pages) {
        tipuesearch = {"pages": []};
    }
    
    // Ensure pages is an array
    if (!Array.isArray(tipuesearch.pages)) {
        tipuesearch.pages = [];
    }
    
    // Filter out any null/invalid entries in the pages array
    var validPages = [];
    for (var i = 0; i < tipuesearch.pages.length; i++) {
        var page = tipuesearch.pages[i];
        // Check if page is valid object with required properties
        if (page && typeof page === 'object' && page.title && page.text && page.url) {
            // Ensure properties are strings (not null)
            page.title = String(page.title || '');
            page.text = String(page.text || '');
            page.tags = String(page.tags || '');
            page.url = String(page.url || '');
            validPages.push(page);
        }
    }
    tipuesearch.pages = validPages;
    
    // Also initialize tipuesearch_in for Tipue Search library
    if (typeof tipuesearch_in === 'undefined') {
        tipuesearch_in = {"pages": []};
    }
})();