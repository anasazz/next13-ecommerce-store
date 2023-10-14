import { Color } from "@/types";

const URL=`https://octopus-app-594h8.ondigitalocean.app/api/c208efd7-54fa-44a3-b5bc-6fd23bae1737/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
