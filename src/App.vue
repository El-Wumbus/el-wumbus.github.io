<template>
  <header>
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-dark"
      style="padding-left: 1rem; background-color: #23272a"
    >
      <RouterLink style="text-decoration: none" to="/"
        ><a class="navbar-brand">Decator</a></RouterLink
      >
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/"
              ><a class="nav-link">Home</a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink style="text-decoration: none" to="/projects"
              ><a class="nav-link">Projects</a></RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />

  <div class="social_links">
    <ul class="social_link__list">
      <li>
        <a
          class="social_link__hyperlink"
          href="https://github.com/El-Wumbus"
          target="_blank"
        >
          <font-awesome-icon
            class="social_link__icon"
            icon="fa-brands fa-github"
          />
        </a>
      </li>
      <li>
        <a class="social_link__hyperlink" href="" target="_blank">
          <font-awesome-icon
            class="social_link__icon"
            icon="fa-brands fa-spotify"
          />
        </a>
      </li>
      <li>
        <a
          class="social_link__hyperlink"
          href="mailto:decator.c@proton.me"
          target="_blank"
        >
          <font-awesome-icon
            class="social_link__icon"
            icon="fa-solid fa-envelope"
          />
        </a>
      </li>
      <li>
        <a
          class="social_link__hyperlink"
          href="discord.gg/8wBUFeGGYc"
          target="_blank"
        >
          <font-awesome-icon
            class="social_link__icon"
            icon="fa-brands fa-discord"
          />
        </a>
      </li>
    </ul>
  </div>
  
</template>

<style>
@import "assets/nord.css";
@import "assets/fonts.css";

:root {
  background-color: var(--nord0);
  color: var(--nord8);
}

.social_links {
  position: fixed;
  bottom: 0;
  left: 1rem;
  width: auto;
}

.social_link__list {
  list-style: none;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  display: inline-block;
}

ul.social_links__list li {
  display: inline-block;
  margin: 0 0.5rem;
}

.social_link__image {
  width: 32px;
}

.social_link__hyperlink {
  text-decoration: none;
  color: var(--nord5);
}

.social_link__hyperlink:hover {
  color: var(--nord7);
}

.social_link__icon {
  font-size: 1.5rem;
  font-weight: 500;
  width: 32px;
}

</style>
