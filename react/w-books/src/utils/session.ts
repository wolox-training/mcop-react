interface Session {
  accessToken: string;
  uid: string;
  client: string;
}

export function saveInLocalStorage({ accessToken, uid, client }: Session): void {
  if (accessToken) {
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('uid', uid);
    localStorage.setItem('client', client);
  }
}
