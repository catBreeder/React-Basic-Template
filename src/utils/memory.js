/**保存token */
const index_token = 'index-token'
export const setToken = value=>localStorage.setItem(index_token,value);
export const getToken = ()=>{return localStorage.getItem(index_token)};
export const clearToken = ()=>{localStorage.removeItem(index_token)}  