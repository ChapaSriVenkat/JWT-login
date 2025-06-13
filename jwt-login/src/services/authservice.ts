export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:3030/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Login failed');
  }

  const data: LoginResponse = await response.json();
  return data;
};
