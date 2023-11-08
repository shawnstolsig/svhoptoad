const withImages = require('next-images')
module.exports = withImages({
    images: {
        domains: ['storage.googleapis.com','res.cloudinary.com', 'custom', 'source.unsplash.com', 'cdn.sanity.io'],
    },
})
