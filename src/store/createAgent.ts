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

export default function createAgent([state, actions]) {
  async function send(method, url, data?, resKey?, token?) {
    const headers = {},
      opts = { method, headers };

    if (data !== undefined) {
      headers["Content-Type"] = "application/json";
      // @ts-ignore
      opts.body = JSON.stringify(data);
    }

    // if (state.token) headers["Authorization"] = `Token ${state.token}`;
    headers["Authorization"] = `Token ${token}`;

    try {
      const response = await fetch(API_ROOT + url, opts);
      const json = await response.json();
      return resKey ? json[resKey] : json;
    } catch (err) {
      if (err && err.response && err.response.status === 401) {
        /* client unauthorized or token expired, logout and show login page */
        // actions.logout();
      }
      return err;
    }
  }

  const Articles = {
    fetchCategoriesFromDB: () => client.query(categoriesQuery).toPromise(),

    fetchPackagesFromDB: (catId = "fetchAllCategories") => {
      let query =
        catId === "fetchAllCategories"
          ? packagesQuery
          : packagesByCategoryQuery;

      let queryVar = catId === "fetchAllCategories" ? null : { id: catId };
      return client.query(query, queryVar).toPromise();
    },
  };

  return {
    Articles,
  };
}

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
