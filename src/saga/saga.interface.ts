export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
    connection?: boolean,
    response?: object,
    message?: string,
    isSaved?: boolean,
    isObjectChoose?: boolean,
}