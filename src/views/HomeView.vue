<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="" />
            <div class="absolute inset-0 bg-gray-900 mix-blend-multiply" />
            <figure class="relative isolate">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Atlus_logo_%282014%29.svg/1200px-Atlus_logo_%282014%29.svg.png" alt="" class="h-12 w-auto" />
              <blockquote class="mt-6 text-xl/8 font-semibold text-white">
                <p>“Descobreix l'aplicació web SPA creada amb Vue, que integra funcionalitats com una calculadora completa, consultes d'API amb fetch i axios, i un disseny adaptable i fàcil de navegar.”</p>
              </blockquote>
              <figcaption class="mt-6 text-sm/6 text-gray-300">
                <strong class="font-semibold text-white">MihaiSebastian,</strong> Creador de l'Aplicació
              </figcaption>
            </figure>
          </div>
        </div>
        <div>
          <div class="text-base/7 text-gray-700 lg:max-w-lg">
            <p class="text-base/7 font-semibold text-indigo-600">Descripció del Projecte</p>
            <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Aplicació SPA amb Vue per a una Experiència Completa
            </h1>
            <div class="max-w-xl">
              <p class="mt-6">Aquest projecte és una aplicació web tipus SPA creada amb Vue, que inclou diverses pàgines i funcionalitats per mostrar la capacitat de Vue com a framework modern i versàtil.</p>
              <p class="mt-8">La primera pàgina és una landing page que serveix com a presentació del projecte. La segona pàgina ofereix una calculadora amb operacions bàsiques i decimals, amb opcions per netejar la pantalla.</p>
              <p class="mt-8">La tercera pàgina utilitza fetch per consultar dades des de l'API de JSONPlaceholder, i la quarta pàgina utilitza axios per connectar-se a l'API de DummyJSON. Això demostra la integració amb diferents serveis d'API.</p>
            </div>
          </div>
          <dl class="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx">
              <dt class="text-sm/6 font-semibold text-gray-600">{{ stat.label }}</dt>
              <dd class="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Iniciat', value: '2024' },
  { label: 'Pàgines', value: '4' },
  { label: 'APIs Integrades', value: '2' },
  { label: 'Tests', value: '3' },
]
</script>
