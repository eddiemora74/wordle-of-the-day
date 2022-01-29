// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getWordle from "../../server/getWordle";

export default async function handler(req, res) {
  const {number, word} = await getWordle();
  res.json({ number, word });
  ;
}
