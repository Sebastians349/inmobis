import { Property } from "./types";

const api = {
  list: async (): Promise<Property[]> => [],
  fetch: async (id: Property["id"]): Promise<Property> => ({ id } as Property),

  mock: {
    list: async (mock: string): Promise<Property[]> =>
      import(`./mocks/list/${mock}`).then((res) => res.default as Property[]),
    fetch: async (mock: string): Promise<Property> =>
      import(`./mocks/single/${mock}`).then((res) => res.default as Property),
  },
};

export default api;
