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
        
        // Method 2: Use feature detection with createImageBitmap if available (modern browsers including iOS 15+)
        if (window.createImageBitmap) {
            var webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
            fetch(webpData)
                .then(function(response) { return response.blob(); })
                .then(function(blob) { return createImageBitmap(blob); })
                .then(function() {
                    document.documentElement.classList.remove('no-webp');
                    document.documentElement.classList.add('webp');
                })
                .catch(function() {
                    document.documentElement.classList.remove('webp');
                    document.documentElement.classList.add('no-webp');
                });
        }
        
        // Return canvas test result for immediate synchronous detection
        return canvasTest();
    }
    
    // Apply class immediately for synchronous detection
    if (checkWebPSupport()) {
        document.documentElement.classList.add('webp');
    } else {
        document.documentElement.classList.add('no-webp');
    }
})(); 