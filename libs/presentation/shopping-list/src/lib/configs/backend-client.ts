const backendClient = (input: string | URL | Request, init?: RequestInit) =>
  fetch(process.env.BACKEND_URL ?? 'http://localhost:3000' + input, init);

export default backendClient;
