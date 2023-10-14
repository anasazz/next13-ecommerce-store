import { Category } from "@/types";

const URL=`https://octopus-app-594h8.ondigitalocean.app/api/c208efd7-54fa-44a3-b5bc-6fd23bae1737/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  console.log(res);
  

  return res.json();
};

export default getCategories;

