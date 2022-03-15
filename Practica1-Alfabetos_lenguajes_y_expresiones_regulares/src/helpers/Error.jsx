
export const ErrorMsg = (msg) =>{
    if(typeof(msg) !== 'string') {
        console.error("Debe ser una string la recibida")
        return;
    }
    const Error = new Error(msg);
    return Error;
}