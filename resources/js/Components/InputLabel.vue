<script setup>
defineProps({
    value: {
        type: String,
    },
    for: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <label
        v-if="value"
        :for="for"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >{{ value }}</label
    >
    <label
        v-else
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
    </label>
</template>
