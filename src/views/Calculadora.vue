<template>
    <div class="flex items-start justify-center  pt-10 ">
    <div class="w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-6">
        <!-- Pantalla de la calculadora -->
        <div class="mb-6 h-20 bg-gray-100 text-right text-3xl font-semibold text-gray-800 p-4 rounded-md shadow-inner">
          <!-- Aquí es mostrarà el número -->
          0
        </div>


        <!-- Botons de la calculadora -->
        <div class="grid grid-cols-4 gap-4">
          <!-- Números i operadors -->
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            7
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            8
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            9
          </button>
          <button class="bg-blue-500 text-white font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-blue-600">
            ÷
          </button>

          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            4
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            5
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            6
          </button>
          <button class="bg-blue-500 text-white font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-blue-600">
            ×
          </button>

          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            1
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            2
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            3
          </button>
          <button class="bg-blue-500 text-white font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-blue-600">
            -
          </button>

          <button class="col-span-2 bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            0
          </button>
          <button class="bg-gray-200 text-gray-800 font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-gray-300">
            .
          </button>
          <button class="bg-blue-500 text-white font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-blue-600">
            +
          </button>

          <button class="col-span-4 bg-blue-500 text-white font-semibold text-2xl py-4 rounded-lg shadow-sm hover:bg-blue-600">
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
