import { ThemeContext } from "@emotion/react";
import { Property } from "./types";

const api = {
  list: async (): Promise<Property[]> => [],
  //   fetch: async (id: Property["id"]): Promise<Property[]> =>[{id} as Property]
  mock: {
    list: async (mock: string): Promise<Property[]> =>
      import(`./mocks/${mock}`).then((res) => res.default as Property[]),
    //   fetch: async (id: Property['id']): Promise<Property[]> =>({} as Property),
  },
};

export default api;
