<template>
  <div class="bg-gradient-to-bl from-gray-50 to-blue-50 rounded-lg shadow-md">
    <div v-if="$slots.header" class="border-b px-4 py-3">
      <slot name="header" />
    </div>
    <div class="p-4">
      <slot name="content" />
    </div>
  </div>
</template>