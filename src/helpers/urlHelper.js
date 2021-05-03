export const isFrontpage = () => {
    if (window.location.pathname !== '/')
        return true;
    return false;
}