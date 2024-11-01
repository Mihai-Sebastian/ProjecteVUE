<template>
  <div class="flex items-start justify-center pt-10 bg-cyan-900">
    <div class="w-full max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div class="p-4">
        <!-- Display -->
        <div class="text-right bg-gray-800 text-white text-4xl font-mono p-4 rounded-md mb-4">
          <span>{{ displayValue }}</span>
        </div>

        <!-- Buttons -->
        <div class="grid grid-cols-4 gap-2">
          <button @click="inputOperation('%')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">%</button>
          <button @click="clearEntry" class="bg-gray-600 text-white text-2xl p-4 rounded-md">CE</button>
          <button @click="clearDisplay" class="bg-gray-600 text-white text-2xl p-4 rounded-md">C</button>
          <button @click="deleteDigit" class="bg-gray-600 text-white text-2xl p-4 rounded-md">DEL</button>

          <button @click="inputOperation('1/x')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">1/x</button>
          <button @click="inputOperation('x^2')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">x²</button>
          <button @click="inputOperation('sqrt')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">√x</button>
          <button @click="inputOperation('/')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">÷</button>

          <button @click="inputDigit('7')" class="bg-green-500 text-white text-2xl p-4 rounded-md">7</button>
          <button @click="inputDigit('8')" class="bg-green-500 text-white text-2xl p-4 rounded-md">8</button>
          <button @click="inputDigit('9')" class="bg-green-500 text-white text-2xl p-4 rounded-md">9</button>
          <button @click="inputOperation('*')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">×</button>

          <button @click="inputDigit('4')" class="bg-green-500 text-white text-2xl p-4 rounded-md">4</button>
          <button @click="inputDigit('5')" class="bg-green-500 text-white text-2xl p-4 rounded-md">5</button>
          <button @click="inputDigit('6')" class="bg-green-500 text-white text-2xl p-4 rounded-md">6</button>
          <button @click="inputOperation('-')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">-</button>

          <button @click="inputDigit('1')" class="bg-green-500 text-white text-2xl p-4 rounded-md">1</button>
          <button @click="inputDigit('2')" class="bg-green-500 text-white text-2xl p-4 rounded-md">2</button>
          <button @click="inputDigit('3')" class="bg-green-500 text-white text-2xl p-4 rounded-md">3</button>
          <button @click="inputOperation('+')" class="bg-gray-600 text-white text-2xl p-4 rounded-md">+</button>

          <button @click="toggleSign" class="bg-green-500 text-white text-2xl p-4 rounded-md">+/-</button>
          <button @click="inputDigit('0')" class="bg-green-500 text-white text-2xl p-4 rounded-md">0</button>
          <button @click="inputDecimal" class="bg-green-500 text-white text-2xl p-4 rounded-md">,</button>
          <button @click="calculateResult" class="bg-blue-500 text-white text-2xl p-4 rounded-md col-span-4">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const displayValue = ref('0')
const actualValue = ref('0')
let lastOperation = false

function clearEntry() {
  if (actualValue.value){

  }
}

function inputDecimal() {
  const lastNumber = displayValue.value.split(/[\+\-\*\/]/).pop();
  if (!lastNumber.includes('.')) {
    displayValue.value += '.';
    lastOperation = false;
  }
}

function clearDisplay() {
  displayValue.value = '0'
  lastOperation = false
}

function inputDigit(digit) {
  if (lastOperation === true){
    displayValue.value = digit
    lastOperation = false
  }
  else if (displayValue.value === '0') {
    displayValue.value = digit
  }
  else {
    displayValue.value += digit
  }
}

function inputOperation(operator) {
  const operators = ['+', '-', '*', '/'];
  // Comprova si l'últim caràcter és un operador
  if (operators.includes(displayValue.value.toString().slice(-1))) {
    // Si l'últim caràcter és un operador, el substitueix
    displayValue.value = displayValue.value.slice(0, -1) + operator;
    lastOperation = false;
  } else {
    // Si no hi ha operador, afegeix el nou operador
    displayValue.value += operator;
    lastOperation = false;
  }
}

function calculateResult() {
  displayValue.value = eval(displayValue.value)
  lastOperation = true
}
function deleteDigit() {
  displayValue.value = displayValue.value.slice(0, -1)
  if (displayValue.value === '') {
    displayValue.value = '0'
  }

}

</script>
