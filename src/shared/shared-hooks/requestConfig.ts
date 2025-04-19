type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

interface HTTPHeaders {
    [key: string]: string;
}

type FormatFile = 'json' | 'blob';

export interface IRequestConfig {
    url: string;
    method?: HTTPMethod;
    body?: string | null;
    headers?: HTTPHeaders;
    format?: FormatFile;
}
