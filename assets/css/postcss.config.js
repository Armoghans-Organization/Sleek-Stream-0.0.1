/* This code is exporting a configuration object for a JavaScript module. */

const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
        require('@fullhuman/postcss-purgecss')({
            content: [
                `${themeDir}layouts/**/*.html`,
                `${themeDir}content/**/*.md`,
                // Add any other file paths that include your CSS classes
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ]
}