const addMatchBtn = document.querySelector(".add-match");
const allMatches = document.querySelector(".all-matches");
const incrementField = document.querySelector(".increment-field");
const totalScore = document.querySelector(".total-score");
const resetBtn = document.querySelector(".reset-btn");
const singleResult = document.querySelector(".singleResult");

// crypto.randomUUID()
let MatchBody = `<div class="match" id="${crypto.randomUUID()}">
<div class="wrapper">
    <button class="delete-btn">
        <img src="./image/delete.svg" alt="" />
    </button>
    <h3 class="lws-matchName">Match 1</h3>
</div>
<div class="inc-dec">
    <form class="incrementForm">
        <h4>Increment</h4>
        <input
            type="number"
            name="increment"
            class="increment-field"
        />
    </form>
    <form class="decrementForm">
        <h4>Decrement</h4>
        <input
            type="number"
            name="decrement"
            class="decrement-field"
        />
    </form>
</div>
<div class="numbers">
    <h2 class="lws-singleResult">120</h2>
</div>
</div>`;

//initial state
const initialState = [
  {
    id: "c3389f24-85ad-4971-95a0-27545fb39d44",
    value: 120,
  },
];

//action identifier
const ADDMATCH = "addMatch";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const DELETEMATCH = "deleteMatch";
const RESET = "reset";

//action creator
const addMatch = () => {
  return {
    type: ADDMATCH,
  };
};
 
const increment = (payload) => {
  return {
    type: INCREMENT,
    payload
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
const deleteMatch = () => {
  return {
    type: DELETEMATCH,
    payload: value,
  };
};
const reset = () => {
  return {
    type: RESET,
    payload: value,
  };
};

//action reducer
function actionReducer(state = initialState, action) {
  if (action.type === "addMatch") {
    const UUID = crypto.randomUUID();
    const newMatch = {
      id: UUID,
      value: 120,
    };
    return [...state, newMatch];
  }
  if (action.type === "increment") { 
   // 
  }
  return state;
}

let store = Redux.createStore(actionReducer);

//add match button functionality
addMatchBtn.addEventListener("click", () => {
  store.dispatch(addMatch());
});

allMatches.addEventListener("keypress", (e) => { 
  if (e.key === "Enter") {
    if (e.target.classList.contains("increment-field")) {
        e.preventDefault()
      console.log(e.target.value);

        store.dispatch(increment(e.target.closest('.match').id,e.target.value))
    }
  }
});

const matchBuilder = (singleState) => {
  return `<div class="match" id="${singleState.id}">
<div class="wrapper">
    <button class="delete-btn">
        <img src="./image/delete.svg" alt="" />
    </button>
    <h3 class="lws-matchName">Match 1</h3>
</div>
<div class="inc-dec">
    <form class="incrementForm">
        <h4>Increment</h4>
        <input
            type="number"
            name="increment"
            class="increment-field"
        />
    </form>
    <form class="decrementForm">
        <h4>Decrement</h4>
        <input
            type="number"
            name="decrement"
            class="decrement-field"
        />
    </form>
</div>
<div class="numbers">
    <h2 class="lws-singleResult">120</h2>
</div>
</div>`;
};

const render = () => {
  const state = store.getState();

  singleMatchContainer = ``;
  state.map(
    (singleState) => (singleMatchContainer += matchBuilder(singleState))
  );
  return (allMatches.innerHTML = singleMatchContainer);
};

// for initial render
render();
store.subscribe(render);
