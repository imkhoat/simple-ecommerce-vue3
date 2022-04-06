<template>
    <div class="page-category">
        <div class="categories">
            <s-category-card class="item" v-for="i in 5"></s-category-card>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import SCategoryCard from './shared/components/molecules/s-category-card/s-category-card.vue'
export default defineComponent({
    components: {
        SCategoryCard,
    }
})
</script>