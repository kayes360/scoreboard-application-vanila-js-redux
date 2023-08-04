const addMatchBtn = document.querySelector(".add-match");
const allMatches = document.querySelector(".all-matches");
const incrementField = document.querySelector(".increment-field");
const totalScore = document.querySelector(".total-score");
const resetBtn = document.querySelector(".reset-btn");
 
 
let MatchBody = `<div class="match" id="{UUID}">
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


addMatchBtn.addEventListener('click',()=>{
    const UUID = crypto.randomUUID();
    const newMatchBody = MatchBody.replace(/{UUID}/g, UUID);
    allMatches.innerHTML += newMatchBody
})