import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import type { Property } from "../../../property/types";
import type { ParsedUrlQuery } from "querystring";

import api from "../../../property/api";
import PropertyScreen from "../../../property/screens/Property";

interface Props {
  property: Property;
}
interface Params extends ParsedUrlQuery {
  mock: string;
}

const PropertyPage: NextPage<Props> = ({ property }) => {
  return <PropertyScreen property={property} />;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const property = await api.mock.fetch(params?.mock as string);

  return {
    // Revalidate every 1 second
    revalidate: 1,
    props: {
      property,
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
export default PropertyPage;
