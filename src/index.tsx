/** @jsx createElement */
import {createElement} from "/web_modules/@bikeshaving/crank.js";
import {renderer} from "/web_modules/@bikeshaving/crank/dom.js";
import {BookPreview} from "./BookPreview.js";

function App () {
  return <div>
    <BookPreview />
  </div>
}

renderer.render(<App/>, document.body);