import { NextApiRequest, NextApiResponse } from "next";

// on-demand api
// 사용자가 요청하면 업데이트
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (err) {
    res.status(500).send("Revalidation Failed");
    console.log(err);
  }
}
