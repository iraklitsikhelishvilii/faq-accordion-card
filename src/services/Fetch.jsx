import axios from "axios";

export async function FetchData(setdata) {
  try {
    const info = await axios.get("https://dummyjson.com/quotes");
    const firstFiveQuotes = info.data.quotes.slice(0, 5);
    setdata(firstFiveQuotes);
  } catch (error) {
    console.log(error);
  }
}
