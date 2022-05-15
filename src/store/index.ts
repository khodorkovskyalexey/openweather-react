export const getLastFetchDate = () => new Date(Number(localStorage.getItem('lastFetchDate')));
export const updateLastFetchDate = () => localStorage.setItem('lastFetchDate', String(Date.now()));
