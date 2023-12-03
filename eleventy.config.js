const eleventyGoogleFonts = require('eleventy-google-fonts')
const lazyImagesPlugin = require('eleventy-plugin-lazyimages')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/fonts')
    eleventyConfig.addPassthroughCopy('src/images')
    
    eleventyConfig.addWatchTarget('src/css/')
    eleventyConfig.addWatchTarget('tailwind.config.js')

    eleventyConfig.addPlugin(eleventyGoogleFonts)
    eleventyConfig.addPlugin(lazyImagesPlugin)
    eleventyConfig.setTemplateFormats(['html', 'md'])

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    }
}
