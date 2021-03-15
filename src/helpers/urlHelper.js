export const isFrontpage = () => {
    console.log(window.location.pathname)
    if (window.location.pathname !== '/Travelbunny-Web')
        return true;
    return false;
}