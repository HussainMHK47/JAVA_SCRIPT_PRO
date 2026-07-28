document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    
    try {
        const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        if (!cleaned) {
            throw new Error("Please enter at least one letter or number.");
        }
        
        const reversed = cleaned.split('').reverse().join('');
        
        if (cleaned === reversed) {
            result.textContent = "Yes ✅, it is a palindrome.";
        } else {
            result.textContent = "No ❌, it is not a palindrome.";
        }
    } catch (error) {
        result.textContent = error.message;
    }
});
