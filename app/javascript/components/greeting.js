import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/v1/random_greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.text))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div>{greeting}</div>;
}

export default Greeting;
