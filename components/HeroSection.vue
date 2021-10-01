<template>
  <div id="top">
    <Container name="hero">
      <section class="content-section">
        <div class="contents">
          <div class="img">
            <img width="100%" src="~/assets/hacktoberfest.svg" />
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script>
import HashHeader from "~/components/HashHeader";
import Container from "~/components/Container";
export default {
  components: {
    HashHeader,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 4rem;
  margin: 4.7rem 0 2rem 0;
  border-radius: 1rem;
  background-color: #feede6;
  @include respond-below(sm) {
    padding: 2rem 1rem;
    margin: 2rem 0 1rem 0;
  }

  .contents {
    display: flex;

    .img {
      width: 90vw;
      text-align: center;
    }
  }
}
</style>
