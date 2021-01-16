export const getPictureUrl = (url, size) => {
    switch(size) {
        case 'sm':
            return `${url}188160.png`
        case 'lg':
            return `${url}375160.png`;
        default:
            return `${url}375160.png`;
    }
}