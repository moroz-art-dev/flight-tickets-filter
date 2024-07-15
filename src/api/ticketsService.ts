const API_URL = '/tickets.json';

const handleResponse = async (response: Response): Promise<any> => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }

  return response.json();
};

const sendRequest = async (
  endpoint: string,
  method: string,
  body?: any
): Promise<any> => {
  const url = `${API_URL}${endpoint}`;

  const options = {
    //: RequestInit
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);
  return handleResponse(response);
};

export const fetchTickets = async () => {
  return sendRequest('', 'GET');
};
