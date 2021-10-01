<template>
  <div class="footer">
    <Container class="contents">
      <div class="content-grid">
        <div class="panel">
          <div class="branding">
            <img src="~/assets/hacktoberfest.svg" />
          </div>
        </div>

        <div class="panel">
          <h4 class="title">Useful Links</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/"
            >Official Website</a
          >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/resources"
            >Useful Resources</a
          >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/apoorvdwi/HacktoberFest-2021"
            >Github Repo</a
          >
          <a rel="noopener noreferrer" target="_blank" href="https://hacktoberfest.digitalocean.com/events"
            >Events</a
          >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://apoorvdwivedi.live"
            >About Me</a
          >
        </div>

        <div class="panel">
          <h4 class="title">Explore</h4>
          <a
            target="_blank"
            href="https://github.com/search?q=hacktoberfest&ref=opensearch"
            >Repositories</a
          >
          <a
            target="_blank"
            href="https://github.com/search?q=hacktoberfest&type=issues"
            >Issues</a
          >
          <a
            target="_blank"
            href="https://github.com/search?q=hacktoberfest&type=discussions"
            >Discussions</a
          >
          <a target="_blank" href="https://hacktoberfest.digitalocean.com/faq"
            >FAQ</a
          >
          <a
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/event-organizer-kit"
            >Event Organizer Kit</a
          >
        </div>
      </div>
      <hr />
      <div class="attribution">
        <span>Created By Apoorv Dwivedi with ❤️ </span>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin: -1rem 0 -2rem 0;

  @include respond-between(md, lg) {
    padding: 40px 20px;
  }

  @include respond-between(sm, md) {
    text-align: center;
    padding: 40px 20px;
  }

  @include respond-below(sm) {
    text-align: center;
    padding: 40px 10px;
  }

  hr {
    width: 85%;
    margin: auto;
  }

  a {
    text-decoration: none;
    color: #848484;
  }

  .contents {
    background-color: #feede6;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 100px;
    row-gap: 30px;
    padding: 2rem;

    @include respond-above(lg) {
      padding: 2rem 6rem;
    }

    @include respond-between(md, lg) {
      column-gap: 50px;
    }

    @include respond-below(md) {
      column-gap: 50px;
      grid-template-columns: 1fr 1fr;
      margin: auto;
    }

    @include respond-between(sm, md) {
      column-gap: 30px;
    }

    @include respond-below(xs) {
      grid-template-columns: 1fr;
      margin: auto;
      width: 70%;
    }
  }

  .panel {
    display: flex;
    flex-direction: column;
    line-height: 2;

    a {
      transition: all 0.3s ease;
      &:hover {
        color: #e85325;
        transition: all 0.3s ease;
      }
    }

    .branding {
      width: 30vw;
      
      @include respond-below(sm) {
          width: 100%;
      }
      
      img {
        width: 100%;
        margin-top: 40px;

        @include respond-below(md) {
          max-width: 100%;
          margin-top: 20px;
        }

        @include respond-below(xxs) {
          width: 100%;
          margin-bottom: -40px;
        }
      }
    }

    .description {
      opacity: 0.5;
    }

    .title {
      padding: 10px 0;
    }
  }

  .attribution {
    padding: 10px 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    font-weight: 600;

    span {
      margin-top: -10px;
      @include respond-below(sm) {
        margin-bottom: 1em;
      }
    }

    img {
      height: 1.75em;
    }
  }
}
</style>
