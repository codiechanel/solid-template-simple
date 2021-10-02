import { createClient, gql } from "@urql/core";

const client = createClient({
  url: "https://api-ap-northeast-1.graphcms.com/v2/cktvjl0jt1k3l01z3hvph3xfu/master",
});

const API_ROOT = "https://api.realworld.io/api";

const encode = encodeURIComponent;

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article) => Object.assign({}, article, { slug: undefined });
let packagesByCategoryQuery = gql`
  query MyQuery($id: ID!) {
    packages(orderBy: updatedAt_DESC, where: { category: { id: $id } }) {
      name
      id
      jsonData
    }
  }
`;

let packagesQuery = gql`
  query MyQuery {
    packages(orderBy: updatedAt_DESC) {
      name
      id
      jsonData
    }
  }
`;
let categoriesQuery = gql`
  query MyQuery {
    categories {
      name
      id
    }
  }
`;

const createCategoryMutation = gql`
  mutation MyMutation($name: String!) {
    __typename
    createCategory(data: { name: $name }) {
      id
      name
    }
  }
`;

let publishCategoryMutation = gql`
  mutation MyMutation($id: ID!) {
    __typename
    publishCategory(where: { id: $id }) {
      id
      name
      publishedAt
    }
  }
`;

export default function createAgent([state, actions]) {
  const Articles = {
    fetchCategoriesFromDB: () => client.query(categoriesQuery).toPromise(),

    fetchPackagesFromDB: (catId) => {
      let query = catId ? packagesByCategoryQuery : packagesQuery;

      let queryVar = catId ? { id: catId } : null;
      return client.query(query, queryVar).toPromise();
    },
    createCategoryToDB: async (name) => {
      let res = await client
        .mutation(createCategoryMutation, { name })
        .toPromise();

      let res2 = await client
        .mutation(publishCategoryMutation, { id: res.data?.createCategory?.id })
        .toPromise();

      return res.data.createCategory;
    },
  };

  return {
    Articles,
  };
}

/*export const createCategoryToDB = async (name) => {
  let res = await client.mutation(createCategoryMutation, { name }).toPromise();

  let res2 = await client
      .mutation(publishCategoryMutation, { id: res.data?.createCategory?.id })
      .toPromise();

  return res.data.createCategory;
};*/

/*export const fetchPackagesFromDB = async (catId = "fetchAllCategories") => {
  let query =
    catId === "fetchAllCategories" ? packagesQuery : packagesByCategoryQuery;

  let queryVar = catId === "fetchAllCategories" ? null : { id: catId };
  let res = await client.query(query, queryVar).toPromise();
  return res.data.packages;
};*/

/*fetchCategoriesFromDB: () => async () => {
  let res = await client.query(categoriesQuery).toPromise();
  return res?.data?.categories;
},*/

/*
export const fetchCategoriesFromDB = async () => {
  let res = await client.query(categoriesQuery).toPromise();
  return res.data.categories;
}*/
