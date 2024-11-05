<template>
  <div class="flex items-start justify-center pt-10 ">
    <div class="w-full max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div class="p-4">
        <!-- Display -->
        <div class="text-right bg-gray-800 text-white text-4xl font-mono p-4 rounded-md mb-4">
          <span>{{ displayValue }}</span>
        </div>
        <!-- Buttons -->
        <div class="grid grid-cols-4 gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Megami_Tensei_logo.png" alt="Potencia" class="w-24 h-14" />
          <button @click="inputOperation('%')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-percent">%</button>
          <button @click="clearDisplay" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="clear">C</button>
          <button @click="deleteDigit" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="delete">DEL</button>

          <button @click="inputOperation('1/x')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-inverse">1/x</button>
          <button @click="inputOperation('x^2')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-squared">x²</button>
          <button @click="inputOperation('sqrt')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-sqrt">√x</button>
          <button @click="inputOperation('/')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-divide">÷</button>

          <button @click="inputDigit('7')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-7">7</button>
          <button @click="inputDigit('8')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-8">8</button>
          <button @click="inputDigit('9')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-9">9</button>
          <button @click="inputOperation('*')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-multiply">×</button>

          <button @click="inputDigit('4')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-4">4</button>
          <button @click="inputDigit('5')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-5">5</button>
          <button @click="inputDigit('6')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-6">6</button>
          <button @click="inputOperation('-')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-subtract">-</button>

          <button @click="inputDigit('1')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-1">1</button>
          <button @click="inputDigit('2')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-2">2</button>
          <button @click="inputDigit('3')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-3">3</button>
          <button @click="inputOperation('+')" class="bg-gray-600 text-white text-2xl p-4 rounded-md" data-testid="operation-add">+</button>

          <button @click="toggleSign" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="toggle-sign">+/-</button>
          <button @click="inputDigit('0')" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="digit-0">0</button>
          <button @click="inputDecimal" class="bg-green-500 text-white text-2xl p-4 rounded-md" data-testid="decimal">,</button>
          <button @click="calculateResult" class="bg-blue-500 text-white text-2xl p-4 rounded-md" data-testid="equal">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const displayValue = ref('0')
let lastOperation = false

function inputDecimal() {
  const lastNumber = displayValue.value.split(/[\+\-\*\/\%]/).pop();
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
  const operators = ['+', '-', '*', '/', '%', '1/x', 'x^2', 'sqrt'];
  const currentValue = parseFloat(displayValue.value);

  if (['+', '-', '*', '/','%'].includes(operator)) {
    if (operators.includes(displayValue.value.toString().slice(-1))) {
      displayValue.value = displayValue.value.slice(0, -1) + operator;
      lastOperation = false;
    } else {
      displayValue.value += operator;
      lastOperation = false;
    }
  }
  else if (operator === '1/x') {
    displayValue.value = (1 / currentValue).toString();
    lastOperation = true;
  }
  else if (operator === 'x^2') {
    displayValue.value = (currentValue ** 2).toString();
    lastOperation = true;
  }
  else if (operator === 'sqrt') {
    displayValue.value = Math.sqrt(currentValue).toString();
    lastOperation = true;
  }
}

function calculateResult() {
  displayValue.value = eval(displayValue.value)
  displayValue.value = displayValue.value.toString()
  lastOperation = true
}
function deleteDigit() {

  displayValue.value = displayValue.value.slice(0, -1)
  if (displayValue.value === '') {
    displayValue.value = '0'
    lastOperation = false
  }
}
function toggleSign() {
  if (displayValue.value === '0') {
    return
  }
  displayValue.value = -parseFloat(displayValue.value)
  lastOperation = false
}
</script>
