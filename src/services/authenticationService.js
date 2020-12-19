export const signInWithEmailAndPassword = (email, password) => {
    if(email === "test" && password === "test123")
        return Promise.resolve(true)
    return Promise.resolve(false)
}

export const signOut = () => {
    return Promise.resolve(true)
}
export const signUpWithEmailAndPassword = (email, password) => {
    return Promise.resolve(true)
}