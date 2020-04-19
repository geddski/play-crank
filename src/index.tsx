/** @jsx createElement */
import {createElement} from "/web_modules/@bikeshaving/crank.js";
import {renderer} from "/web_modules/@bikeshaving/crank/dom.js";
import {Greeting} from "./Greeting.js";

// sample async component
async function QuoteOfTheDay() {
  const res = await fetch("https://favqs.com/api/qotd");
  const {quote} = await res.json();
  return (
    <p>
      “{quote.body}” – <a href={quote.url}>{quote.author}</a>
    </p>
  );
}

function App () {
  return <div>
    <Greeting name="Davie Boy"/>
    <QuoteOfTheDay />
  </div>
}

renderer.render(<App/>, document.body);