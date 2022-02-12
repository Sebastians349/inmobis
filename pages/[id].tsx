import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import type { Property } from "../property/types";
import type { ParsedUrlQuery } from "querystring";

import api from "../property/api";
import PropertyScreen from "../property/screens/Property";

interface Props {
  property: Property;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

const PropertyPage: NextPage<Props> = ({ property }) => {
  return <PropertyScreen property={property} />;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const property = await api.fetch(params?.mock as string);

  return {
    props: {
      property,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    // Only get paths for non production environments
    fallback: "blocking",
  };
};
export default PropertyPage;
