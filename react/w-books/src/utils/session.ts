export function saveInLocalStorage(state: any): void {
  if (state) {
    localStorage.setItem('access_token', state.access_token);
  }
}
