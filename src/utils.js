// Help us dynamically import images
export const getImageUrl = (path) => {
    // Construct absolute path of image
    return new URL(`assets/${path}`, import.meta.url).href;
};