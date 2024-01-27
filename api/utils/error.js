export const errorHandler = (statusCode,message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    ErrorEvent.meassage = message;
    return error;

};