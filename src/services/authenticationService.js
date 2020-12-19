export const signInWithEmailAndPassword = (email, password) => {
    if(email === "test" && password === "test123")
        return Promise.resolve(true)
}