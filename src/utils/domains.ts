export function getApiDomain() {
    const apiPort = process.env.API_PORT || 3001;
    const apiUrl = process.env.API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = process.env.WEBSITE_PORT || 3000;
    const websiteUrl = process.env.WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}
