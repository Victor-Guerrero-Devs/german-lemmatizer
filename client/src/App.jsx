import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [frequencyTable, setFrequencyTable] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInputText(e.target.value);
    // send the text to the server
    await fetch(`http://localhost:3000/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputText }),
    });

    // try {
    //   const response = await fetch('http://localhost:3000/lemmatize', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ text: inputText }),
    //   });
    //   const data = await response.json();
    //   setFrequencyTable(data);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <>
      <header>
        <h1>German Lemmatizer</h1>
      </header>
      <main>
        <form action="/lemmatize" method="post" onSubmit={handleSubmit}>
          <label htmlFor="inputText">Input German Text:</label>
          <textarea name="inputText" id="inputText" rows="10">
            {inputText}
          </textarea>
          <div>
            <button type="submit">Lemmatize</button>
          </div>
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

// TODO: send text from form to backend
