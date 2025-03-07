<template>
     <div class="col-6 col-xl-4 col-lg-4 col-md-4">
          <div class="item_product_main">
               <form action="https://lofi-company.mysapo.net/cart/add" method="post" class="variants product-action"
                    data-cart-form :data-id="'product-actions-' + product.id" enctype="multipart/form-data">
                    <div class="product-thumbnail">
                         <a class="image_thumb" :href="product.url" :title="product.title">
                              <img class="lazyload" width="480" height="480" :src="product.placeholderImage"
                                   :data-src="product.image" :alt="product.title" />
                         </a>
                         <button class="btn-compare js-btn-wishlist setWishlist btn-views"
                              @click.prevent="addToWishlist(product.id)" :title="'Thêm ' + product.title + ' vào yêu thích'">
                              ❤️
                         </button>

                         <div class="action">
                              <div class="actions-secondary">
                                   <div class="actions-primary">
                                        <input type="hidden" name="variantId" :value="product.variantId" />
                                        <button class="btn-cart" title="Tùy chọn" type="button"
                                             @click="goToProduct(product.url)">
                                             ⚙️
                                        </button>
                                   </div>
                                   <button class="quick-view btn-views" @click="quickView(product)">
                                        👁️ Xem nhanh
                                   </button>
                              </div>
                         </div>
                    </div>

                    <div class="product-info">
                         <h3 class="product-name">
                              <a :href="product.url" :title="product.title">{{ product.title }}</a>
                         </h3>
                         <div class="price-box">{{ formatPrice(product.price) }}</div>
                    </div>
               </form>
          </div>
     </div>
</template>
   
<script>
export default {
     name: 'Product',
     props: {
          product: Object,
     },
     methods: {
          addToWishlist(productId) {
               console.log("Added to wishlist:", productId);
          },
          goToProduct(url) {
               window.location.href = url;
          },
          quickView(product) {
               console.log("Quick view:", product);
          },
          formatPrice(price) {
               return new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
               }).format(price);
          },
     },
};
</script>
   