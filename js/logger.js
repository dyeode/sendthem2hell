(async function logUserDetails() {
    // Simulate getting the IP address
    const getIpAddress = async () => {
        // Check if we're running locally
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            // Use a mock IP for local testing
            return "127.0.0.1";
        }

        // Fetch the actual IP if not running locally
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipResponse.json();
        return ip;
    };

    // Get the user's IP address
    const ip = await getIpAddress();

    // Gather user details
    const userDetails = {
        ip,
        userAgent: navigator.userAgent
    };

    // Send details to the backend for logging
    fetch("log.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails)
    });
})();
