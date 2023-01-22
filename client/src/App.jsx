import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [frequencyTable, setFrequencyTable] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/lemmatize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setFrequencyTable(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <header>
        <h1>German Lemmatizer</h1>
      </header>
      <main>
        <form action="/lemmatize" method="post" onSubmit={handleSubmit}>
          <label htmlFor="input-text">Input German Text:</label>
          <textarea
            name="input-text"
            id="input-text"
            cols="20"
            rows="10"
          ></textarea>
          <button type="submit">Lemmatize</button>
        </form>
      </main>
      <footer>
        <p>Copyright &copy; 2023 German Lemmatizer Contributors</p>
      </footer>
    </>
  );
}

export default App;

// Header
// Form
// Table
// Footer
