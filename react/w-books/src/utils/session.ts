export function saveInLocalStorage(state: any): void {
  if (state) {
    localStorage.setItem('access-token', state.headers['access-token']);
    localStorage.setItem('uid', state.headers.uid);
    localStorage.setItem('client', state.headers.client);
  }
}
