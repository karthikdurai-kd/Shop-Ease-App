// This is Server Side Rendering. Here will call external API and send complete HTML, CSS code with API Data in it as response to the browser

const fetchQuotesData = async () => {
  const fetchQuotesAPI = await fetch("https://dummyjson.com/quotes");
  const fetchQuotesAPIJson = await fetchQuotesAPI.json();
  return fetchQuotesAPIJson.quotes;
};

const Quotes = async () => {
  const quotesData = await fetchQuotesData();
  console.log(quotesData);
  return (
    <div className="container">
      <h2 className="text-center mt-2">Popular Quotes</h2>
      {quotesData.map((q) => {
        return (
          <div key={q.id}>
            <p>
              <span>
                {" "}
                <b>Quote: </b>
              </span>{" "}
              {q.quote}
            </p>
            <p>
              <span>
                <b>Author: </b>
              </span>{" "}
              {q.author}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
