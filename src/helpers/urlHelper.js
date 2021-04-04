export const isFrontpage = () => {
    if (window.location.pathname !== '/Travelbunny-Web')
        return true;
    return false;
}