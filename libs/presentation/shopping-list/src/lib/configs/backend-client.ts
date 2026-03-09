const backendBaseUrl = process.env.BACKEND_URL ?? 'http://localhost:3000';

const backendClient = (input: string, init?: RequestInit) =>
  fetch(`${backendBaseUrl}${input}`, init);

export default backendClient;
