<script setup>
import {ref} from "vue";
import {host} from "@/assets/host.json"

function request(method, path, urlSearchParam) {
  return new Promise((resolve, reject) => {
    const header = new Headers()
    header.append("Content-Type", "application/x-www-form-urlencoded")
    fetch(path, {
      method: method,
      headers: header,
      body: urlSearchParam,
      redirect: "follow"
    })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
  })
}

const question = ref("42")
const answers = ref({
  0: "q0",
  1: "q1",
  2: "q2",
  3: "q3"
})
let loggedIn = ref(false)
let quizCode = ref("")
let quizState = ref(0)
let answerResponse = ref({status: true, correct: 0})
let correctAnswers = ref(0)

request("get", host + "/api/quiz/test").then(json => loggedIn.value = json.loggedIn)

function login() {
  const code = quizCode.value
  console.log(code)
  request("post", host + "/api/quiz/login", new URLSearchParams({"quizkey": code}))
      .then(json => {
        if (json.loggedIn === true) loggedIn.value = true
        quizCode.value = ""
      })
  return false
}

function loadNextQuestion() {
  request("get", host + "/api/quiz/nextQuestion")
      .then(json => {
        console.log(json)
        if (json.status === "okay") {
          question.value = json.question
          answers.value = json.answers
          quizState.value = 1
        } else {
          correctAnswers.value = json.correctAnswers
          quizState.value = 3
        }
      })
}

function submitAnswer(index) {
  request("post", host + "/api/quiz/submitAnswer", new URLSearchParams({"answer": index}))
      .then(json => {
        answerResponse.value.status = json.status
        answerResponse.value.correct = json.correct
        quizState.value = 2
      })
}
</script>

<template>
  <div>
    <h1>Das Quiz</h1>
    <div v-if="!loggedIn">
      <p>Quiz Code</p>
      <div id="formInputContainer">
        <input v-model="quizCode" type="text">
        <input @click="login()" type="submit" value="Absenden">
      </div>
    </div>
    <div v-if="loggedIn">
      <div v-if="quizState === 0">
        <p>Macht es euch Bequem, macht euch Bereit und <button @click="loadNextQuestion">Startet</button></p>
      </div>
      <div v-if="quizState === 1">
        <p>Frage: {{ question }}</p>
        <label v-for="(answer, index) in answers">
          Antwort {{ index }}:
          <button @click="submitAnswer(index)">{{ answer }}</button>
        </label>
      </div>
      <div v-if="quizState === 2">
        <p v-if="answerResponse.status">Richtig!</p>
        <p v-if="!answerResponse.status">Leider falsch!</p>
        <p>{{question}}</p>
        <p>{{answers[answerResponse.correct]}}</p>
        <p>Bereit für die Nächste Frage?</p>
        <p>Auf die Plätze, Fertig,
          <button @click="loadNextQuestion()">Los</button>
        </p>
      </div>
      <div v-if="quizState === 3">
        <p>Quiz durchgespielt!</p>
        <p>Richtige Antworten: {{correctAnswers}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

label {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#formInputContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button, input[type=submit] {
  background-color: #383838;
  color: white;
  border-color: white white black black;
  border-radius: 5px;
}
</style>