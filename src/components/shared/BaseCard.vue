<template>
  <div class="bg-white rounded-lg shadow-md">
    <div v-if="$slots.header" class="border-b px-4 py-3">
      <slot name="header" />
    </div>
    <div class="p-4">
      <slot name="content" />
    </div>
  </div>
</template>