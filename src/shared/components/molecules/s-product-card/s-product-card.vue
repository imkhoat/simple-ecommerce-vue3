<template>
    <s-link :link="productUrl" class="s-product-card">
        <div class="gallery">
            <s-image :src="productImage"></s-image>
        </div>
        <div class="content">
            <div class="info">
                <h6 class="title">{{ productTitle }}</h6>
                <p class="description">{{ productDescription }}</p>
            </div>
            <div class="actions">
                <s-button
                    color="secondary"
                    class="action"
                    @click.prevent="onShowMoreInfo()"
                >More info</s-button>
                <s-button class="action" @click.prevent="onAddToCart()">Add to cart</s-button>
            </div>
        </div>
    </s-link>
</template>
<script lang="ts">
import SImage from '../../atoms/s-image/s-image.vue'
import SButton from '../../atoms/s-button/s-button.vue'
import SLink from '../../atoms/s-link/s-link.vue'
import { ProductItem } from '../../../types/category'


import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../../stores/cart'
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
        const router = useRouter()
        const cart = useCartStore()

        const productImage = computed(() => {
            return props.item?.images[0]!
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

        const onShowMoreInfo = () => {
            router.push(productUrl.value)
        }

        const onAddToCart = () => {
            cart.addToCart({
                product: props.item as ProductItem,
                quantity: 1
            })
        }

        return { productImage, productTitle, productDescription, productUrl, onShowMoreInfo, onAddToCart }
    }
})
</script>
<style>
.s-product-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 12px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
.s-product-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 8px;
}
.s-product-card .gallery {
    height: 400px;
}
.s-product-card .content {
    padding: 24px;
}
.s-product-card .info .title {
    font-size: 18px;
    line-height: 18px;
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
    color: #111872;
    max-height: calc(var(--lh) * var(3));
    text-overflow: ellipsis;
    overflow: hidden;
}
.s-product-card .info .description {
    font-size: 16px;
    line-height: 16px;
    max-height: calc(var(--lh) * var(3));
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
    color: #6b7280;
}
.s-product-card .actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 8px;
}
.s-product-card .actions .action {
    flex-grow: 1;
}
</style>