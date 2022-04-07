<template>
    <s-link :link="productUrl" class="s-category-card">
        <div class="gallery">
            <s-image
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            ></s-image>
        </div>
        <div class="info">
            <h6 class="title">{{ productTitle }}</h6>
            <p class="description">{{ productDescription }}</p>
        </div>
        <div class="actions">
            <s-button color="secondary">More info</s-button>
            <s-button>Add to cart</s-button>
        </div>
    </s-link>
</template>
<script lang="ts">
import SImage from '../../atoms/s-image/s-image.vue'
import SButton from '../../atoms/s-button/s-button.vue'
import SLink from '../../atoms/s-link/s-link.vue'
import { ProductItem } from '../../../../shared/types/category'


import { computed, defineComponent, PropType } from 'vue'
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ProductItem>
        }
    },
    components: {
        SImage, SButton, SLink
    },
    setup(props) {
        const productImage = computed(() => {
            return props.item?.images
        })

        const productTitle = computed(() => {
            return props.item?.title || 'Ao thun dai tay'
        })

        const productDescription = computed(() => {
            return props.item?.description || '10% cotton nguyen chiec, khong tap khuan'
        })

        const productUrl = computed(() => {
            return `/product-detail/${props.item?.code}`
        })

        return { productImage, productTitle, productDescription, productUrl }
    }
})
</script>
<style>
.s-category-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 12px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
.s-category-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 8px;
}
.s-category-card .info .title {
    font-size: 18px;
    line-height: 18px;
    padding: 0;
    margin: 0;
}
.s-category-card .info .description {
    font-size: 16px;
    line-height: 16px;
    max-height: calc(var(--lh) * var(3));
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0;
    margin: 0;
}
.s-category-card .actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    gap: 8px;
}
</style>