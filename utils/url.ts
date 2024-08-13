export function createUrl(baseUrl: string, params: { [key: string]: string | number }) {
    const queryString = Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
    return `${baseUrl}?${queryString}`;
}
  
  