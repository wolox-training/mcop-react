export function saveInLocalStorage(state: any): void {
  if (state) {
    localStorage.setItem('access-token', state.headers.access_token);
  }
}
