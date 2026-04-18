// Defensive fix for Tipue Search - ensures tipuesearch is never null or has null entries
(function() {
    if (typeof tipuesearch === 'undefined' || tipuesearch === null || !tipuesearch.pages) {
        tipuesearch = {"pages": []};
    }
    // Filter out any null entries in the pages array
    tipuesearch.pages = tipuesearch.pages.filter(function(page) {
        return page !== null && typeof page !== 'undefined';
    });
})();