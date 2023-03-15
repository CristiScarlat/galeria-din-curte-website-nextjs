export const getBigImage = (imgSrc) => {
    console.log(imgSrc, imgSrc?.replace('thumbnail_', ''))
    return imgSrc?.replace('thumbnail_', '')
}