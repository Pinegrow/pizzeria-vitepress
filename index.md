---
slug: home
title: Home
layout: home
---

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import TheDivider from '@/components/TheDivider.vue'
import PizzaStoreAsync from '@/components/PizzaStoreAsync.vue'
import DeliverySection from '@/components/DeliverySection.vue'
import SubscribeSection from '@/components/SubscribeSection.vue'
import {Suspense} from 'vue'
</script>

<main>
  <HeroSection />
  <FeatureSection />
  <TheDivider />
  <Suspense>
    <PizzaStoreAsync />
  </Suspense>
  <DeliverySection />
  <SubscribeSection />
</main>

<!-- <style>
/* https://vitepress.dev/guide/using-vue#script-and-style */
/* Currently getting this error - 4:25:54 PM [vitepress] Internal server error: Tags with side effect (<script> and <style>) are ignored in client component templates. */
</style> -->
