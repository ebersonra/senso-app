// Detects WebP support - iOS compatible version
(function() {
    // Check for WebP support using multiple methods for maximum compatibility
    function checkWebPSupport() {
        // Method 1: Check canvas toDataURL (works on most browsers)
        var canvasTest = function() {
            var elem = document.createElement('canvas');
            if (elem.getContext && elem.getContext('2d')) {
                // Was able or not to get WebP representation
                return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            }
            return false;
        };
        
        var canvasResult = canvasTest();
        
        // Method 2: Use Image-based detection for iOS compatibility
        // Only run if canvas test fails (to catch false negatives on some iOS versions)
        if (!canvasResult) {
            var img = new Image();
            img.onload = function() {
                // Image loaded successfully, WebP is supported
                document.documentElement.classList.remove('no-webp');
                document.documentElement.classList.add('webp');
            };
            img.onerror = function() {
                // Image failed to load, WebP is not supported
                // no-webp class already set, nothing to do
            };
            // Small 1x1 WebP image
            img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
        }
        
        // Return canvas test result for immediate synchronous detection
        return canvasResult;
    }
    
    // Apply class immediately for synchronous detection
    if (checkWebPSupport()) {
        document.documentElement.classList.add('webp');
    } else {
        document.documentElement.classList.add('no-webp');
    }
})(); 