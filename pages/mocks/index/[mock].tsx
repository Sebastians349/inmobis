import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import type { Property } from "../../../property/types";
import type { ParsedUrlQuery } from "querystring";

import PropertiesScreen from "../../../property/screens/Properties";
import api from "../../../property/api";

interface Props {
  properties: Property[];
}
interface Params extends ParsedUrlQuery {
  mock: string;
}

const PropertiesPage: NextPage<Props> = ({ properties }) => {
  return <PropertiesScreen properties={properties} />;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const properties = await api.mock.list(params?.mock as string);

  return {
    // Revalidate every 1 second
    revalidate: 1,
    props: {
      properties,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    // Only get paths for non production environments
    fallback: process.env.NODE_ENV === "production" ? false : "blocking",
  };
};
export default PropertiesPage;
