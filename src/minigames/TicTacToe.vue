<template>
  <h1>Tic Tac Toe</h1>

  <div class="grid">
    <div class="cell" v-for="(cells, index) in gridCells" :key="index" @click="selectedCell(index)">{{ cells }}</div>
  </div>

  <h2 v-if="!winner">Select a cell!</h2>
  <h2 v-else> {{ winner }} </h2>
  <div class="row">
    <div class="textLeft">
      <toggle 
        v-model = "easyDifficulty" 
        labelBefore = "Hard" 
        labelAfter = "Easy"
        size = "big"
      />
    </div>
    <div class="textRight">
      <font-awesome-icon class="hover-spin" icon="rotate-left" spin spin-reverse size="xl" @click="resetGame()"/>
    </div>
  </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import toggle from '../components/toggle.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const gridCells = ref(["","","","","","","","",""]);
const difficulty = ref(localStorage.getItem("ticTacToe_Difficulty"));
const easyDifficulty = ref(difficulty.value === "easy");
const playerIcon = ref("X");
const opponentIcon = ref("O");
const winner = ref("");

watch(easyDifficulty, (newValue) => {
  difficulty.value = newValue ? "easy" : "hard";
  localStorage.setItem("ticTacToe_Difficulty", difficulty.value);
});

function selectedCell(index) {
  if (gridCells.value[index] === "" && winner.value === "") {
    gridCells.value[index] = playerIcon.value;
    checkWinning(playerIcon.value);
    if (winner.value === ""  && (gridCells.value.filter(cell => cell === "").length > 1)) {
      if(easyDifficulty.value) randomMove();
      else hardOpponentAI();
      checkWinning(opponentIcon.value);
    } else if (winner.value === "") winner.value = "It's a tie!";
  }
}

function randomMove() {
  let randNum;
  do {
    randNum = Math.floor(Math.random() * 9);
  } while (gridCells.value[randNum] !== "");
  gridCells.value[randNum] = opponentIcon.value;
}

function hardOpponentAI() {
  // check for winning
  const position = ref(checkWinPosition(opponentIcon.value));
  // check for player winning
  if (position.value === null) position.value = checkWinPosition(playerIcon.value);
  // random
  if (position.value === null) randomMove();
  gridCells.value[position.value] = opponentIcon.value;
}

function checkWinPosition(icon) {
  if ((gridCells.value[1] === icon && gridCells.value[2] === icon || gridCells.value[3] === icon && gridCells.value[6] === icon || gridCells.value[4] === icon && gridCells.value[8] === icon) && gridCells.value[0] === "") 
    return 0;
  else if ((gridCells.value[0] === icon && gridCells.value[2] === icon || gridCells.value[4] === icon && gridCells.value[7] === icon) && gridCells.value[1] === "")
    return 1;
  else if ((gridCells.value[0] === icon && gridCells.value[1] === icon || gridCells.value[5] === icon && gridCells.value[8] === icon || gridCells.value[4] === icon && gridCells.value[6] === icon) && gridCells.value[2] === "")
    return 2;
  else if ((gridCells.value[4] === icon && gridCells.value[5] === icon || gridCells.value[0] === icon && gridCells.value[6] === icon) && gridCells.value[3] === "")
    return 3;
  else if ((gridCells.value[3] === icon && gridCells.value[5] === icon || gridCells.value[1] === icon && gridCells.value[7] === icon || gridCells.value[0] === icon && gridCells.value[8] === icon) && gridCells.value[4] === "")
    return 4;
  else if ((gridCells.value[3] === icon && gridCells.value[4] === icon || gridCells.value[2] === icon && gridCells.value[8] === icon) && gridCells.value[5] === "")
    return 5;
  else if ((gridCells.value[7] === icon && gridCells.value[8] === icon || gridCells.value[0] === icon && gridCells.value[3] === icon || gridCells.value[4] === icon && gridCells.value[2] === icon) && gridCells.value[6] === "")
    return 6;
  else if ((gridCells.value[6] === icon && gridCells.value[8] === icon || gridCells.value[1] === icon && gridCells.value[4] === icon) && gridCells.value[7] === "")
    return 7;
  else if ((gridCells.value[6] === icon && gridCells.value[7] === icon || gridCells.value[2] === icon && gridCells.value[5] === icon || gridCells.value[1] === icon && gridCells.value[4] === icon) && gridCells.value[8] === "")
    return 8;
  else return null;
}

function checkWinning(icon) {
  if( (gridCells.value[0] === icon && gridCells.value[1] === icon && gridCells.value[2] === icon) ||
      (gridCells.value[3] === icon && gridCells.value[4] === icon && gridCells.value[5] === icon) ||
      (gridCells.value[6] === icon && gridCells.value[7] === icon && gridCells.value[8] === icon) ||
      (gridCells.value[0] === icon && gridCells.value[3] === icon && gridCells.value[6] === icon) ||
      (gridCells.value[1] === icon && gridCells.value[4] === icon && gridCells.value[7] === icon) ||
      (gridCells.value[2] === icon && gridCells.value[5] === icon && gridCells.value[8] === icon) ||
      (gridCells.value[0] === icon && gridCells.value[4] === icon && gridCells.value[8] === icon) ||
      (gridCells.value[2] === icon && gridCells.value[4] === icon && gridCells.value[6] === icon)) {
        if(icon === playerIcon.value) winner.value = "Congratulations, you won!";
        else winner.value = "Sorry, you lost!";
  }
}

function resetGame() {
  gridCells.value = gridCells.value.map(() => "");
  winner.value = "";
}

</script>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: 100px;
  justify-content: center;
  gap: 5px;
}

.cell {
  background-color: var(--bg-dark);
  border: 2px solid var(--bg-dark);
  justify-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.row {
  display: grid;
  grid-template-columns: 75% 25%;
  width: 50%;
  margin: auto;
}

</style>