module.exports = {
    // Do not include a trailing slash!
    siteUrl: `https://www.jamify.org`,

    // Enable infinite scroll (default: true)
    infiniteScroll: false,

    // Initial number fetched, scrolling lazy loads posts one by one
    // If infinite scroll is disabled: maximum number of post shown per page
    postsPerPage: 300,

    // This allows an alternative site title for meta data for pages.
    siteTitleMeta: `Jamify Tutorials`,

    // This allows an site description for meta data for pages.
    siteDescriptionMeta: `Publish flaring fast blogs with Gatsby and Ghost`,

    // Used for App and Offline manifest e.g. Mobile Home Screen
    shortTitle: `Jamify`,
    siteIcon: `favicon.png`,
    backgroundColor: `#e9e9e9`,
    themeColor: `#15171A`,

    // Exclude post or pages (default: do not exclude)
    excludePostsOrPages: (node) =>
        node.tags.find((tag) => tag.name === `#hidden`) !== undefined,

    // Show more logs for debugging purposes (default: false)
    verbose: false,

    // Severity for verbose mode: (`info`, `warn`, `error`)
    severity: `info`,
};
