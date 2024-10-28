
/*
window.onload = function() {
    // Check if consent is already given
    if (!localStorage.getItem('consent')) {
        // Ask for consent
        if (confirm('Agree to terms and conditions?')) {
            // Store consent in localStorage
            localStorage.setItem('consent', 'accepted');
        }
    }
};
*/


window.onload = function() {
    // Check if consent is already given
    if (!sessionStorage.getItem('consent')) {
        // Ask for consent
        if (confirm('Agree to terms and conditions?')) {
            // Store consent in sessionStorage
            sessionStorage.setItem('consent', 'accepted');
        }
    }
};
