import { useEffect, useState } from 'react';

const Quote = () => {
  let id = 0;
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const getQuote = async () => {
    setIsLoading(true);
    const category = 'happiness';
    const apiKey = 'vN7evSaxkf/FfcuiWBvSeA==JtACjCdSxc6ZUblM';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const headers = {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    };
    await fetch(url, {
      method: 'GET',
      headers,
    }).then((res) => res.json()).then((data) => {
      setQuote(data);
    }).catch(() => {
      setHasError(true);
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getQuote();
  }, []);

  if (isLoading) {
    return (
      <div>Loading....</div>
    );
  }
  if (hasError) {
    return (
      <div>No quote found!!</div>
    );
  }
  return (
    <div className="Quote">
      <h1>Math Magicians</h1>
      {quote?.map((cite) => (
        // eslint-disable-next-line no-plusplus
        <p key={id++}>
          {cite.quote}
          {' '}
          -
          {' '}
          <span>{cite.author}</span>
        </p>
      ))}
    </div>
  );
};

export default Quote;
