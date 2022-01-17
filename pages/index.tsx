import type { GetStaticProps, NextPage } from "next";
import type { Property } from "../property/types";

import PropertiesScreen from "../property/screens/Properties";
import api from "../property/api";

interface Props {
  properties: Property[];
}

const Home: NextPage<Props> = ({ properties = [] }) => {
  return <PropertiesScreen properties={properties} />;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const properties = await api.list();

  return {
    props: {
      properties,
    },
  };
};

export default Home;
