import { BookData } from "@/types";

export default async function fetchRandowBooks(): Promise<BookData[]> {
  const url = `https://onebite-books-server-main-hazel.vercel.app/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
