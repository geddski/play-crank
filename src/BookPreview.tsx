/** @jsx createElement */
import {createElement} from "/web_modules/@bikeshaving/crank.js";
import { createMachine, interpret, assign } from '/web_modules/xstate.js';

const fetchBookName = async () => {
  const res = await fetch("https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582");
  const { name } = await res.json();
  return name;
}

const bookPreviewMachine = createMachine({
  id: 'bookPreview',
  initial: 'fetching',
  context: {
    bookName: "tempyo"
  },
  states: {
    fetching: {
      invoke: {
        src: fetchBookName,
        onDone: "showing"
      }
    },
    showing: {
      // update the context with the results of the fetch
      onEntry: assign({
        // @ts-ignore
        bookName: (context, event) => event.data
      })
    },
  }
});


// a state machine component as a generator. Neat!
export function *BookPreview() {
  console.log('starting state machine interpreter');
  const service = interpret(bookPreviewMachine)
  .onTransition(state => {
    if (state.changed){
      console.log("transition to:", state.value);
      // update component in place
      this.refresh();
    }
  })
  .start();

  const state = service.state.value;
  console.log('current state in component:', state);

  if (state === "fetching"){
    yield <div>Loading...</div>
  }

  const bookName = service.state.context.bookName;

  yield <div>
    <h1>{bookName}</h1>
    <div>What a fantastic book!</div>
  </div>;
}