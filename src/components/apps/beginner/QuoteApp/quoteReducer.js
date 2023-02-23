export default function quoteReducer(quote, action) {
  switch (action.type) {
    case "add_quote": {
      return { ...quote, quoteArr: [...action.quoteArr] };
    }
    case "change_message": {
      let randomNum = Math.floor(
        Math.random(quote.quoteArr.length) * quote.quoteArr.length
      );
      return { ...quote, message: quote.quoteArr[randomNum] };
    }
  }
}
