<template>
  <div class="container">
    <NavigationBar />
    <HeroSection
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <Contributors2021Section
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
    <FooterSection
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import HeroSection from "~/components/HeroSection";
import Contributors2021Section from "~/components/Contributors2021Section";
import FooterSection from "~/components/FooterSection";
import aosMixin from "~/mixins/aos";

export default {
  components: {
    NavigationBar,
    HeroSection,
    Contributors2021Section,
    FooterSection
  },
  mixins: [aosMixin]
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
</style>
