<script lang="ts" src="../assets/project">
</script>

<template>
  <div id="grid_contents" style="">
    <div class="cards">
      <div class="card">
        <div class="center_container">
          <div class="card__title">{{ projects[0].Project_Name }}</div>
        </div>
        <div class="center_container">
        </div>
        <div class="card__description">{{ projects[0].Project_Description }}</div>
        <div class="card__source_code_button_container">
          <a class="card__source_code_button" :href="projects[0].Project_Download">Download</a>
          <a class="card__source_code_button" :href="projects[0].Project_URL">View Source
            Code</a>
        </div>
      </div>

      <div class="card">
        <div class="center_container">
          <div class="card__title">{{ projects[1].Project_Name }}</div>
        </div>
        <div class="center_container">
        </div>
        <div class="card__description">{{ projects[1].Project_Description }}</div>
        <div class="card__source_code_button_container">
          <a class="card__source_code_button" :href="projects[1].Project_Download">Download</a>
          <a class="card__source_code_button" :href="projects[1].Project_URL">View Source
            Code</a>
        </div>
      </div>

      <div class="card">
        <div class="center_container">
          <div class="card__title">{{ projects[2].Project_Name }}</div>
        </div>
        <div class="center_container">
        </div>
        <div class="card__description">{{ projects[2].Project_Description }}</div>
        <div class="card__source_code_button_container">
          <a class="card__source_code_button" :href="projects[2].Project_Download">Download</a>
          <a class="card__source_code_button" :href="projects[2].Project_URL">View Source
            Code</a>
        </div>
      </div>

      <div class="card">
        <div class="center_container">
          <div class="card__title">{{ projects[3].Project_Name }}</div>
        </div>
        <div class="center_container">
        </div>
        <div class="card__description">{{ projects[3].Project_Description }}</div>
        <div class="card__source_code_button_container">
          <a class="card__source_code_button" :href="projects[3].Project_Download">Download</a>
          <a class="card__source_code_button" :href="projects[3].Project_URL">View Source
            Code</a>
        </div>
      </div>

       <div class="card">
        <div class="center_container">
          <div class="card__title">{{ projects[4].Project_Name }}</div>
        </div>
        <div class="center_container">
        </div>
        <div class="card__description">{{ projects[4].Project_Description }}</div>
        <div class="card__source_code_button_container">
          <a class="card__source_code_button" :href="projects[4].Project_Download">Download</a>
          <a class="card__source_code_button" :href="projects[4].Project_URL">View Source
            Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
}

#grid_contents {
  padding: 3.2rem;
  padding-top:2rem;
  background-color: var(--nord0);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
}

.card {
  border: 0px;
  border-radius: 0.7rem;
  display:grid;
  padding: 1rem;
  background-color: var(--nord4);
  grid-template-rows:1.5rem 2fr 8rem;
  grid-auto-columns: auto;
  grid-gap: 0.5rem;
}

:root {
  background-color: var(--nord0);
}

.card__image {
  width: 100%;
  height: auto;
}

.center_container {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card__title {
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
}

.card__description {
  font-size: 13px;
  font-family: "Fira Mono", monospace;
  padding-top: 0.5rem;
  padding-bottom: 3.5rem;
}

.card__source_code_button_container {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  
}

.card__source_code_button {
  border: none;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  color: var(--nord6);
  background-color: var(--nord3);
  cursor: pointer;
  padding: 0.5rem;
  bottom: 0;
  display: block;
  text-align: center;
}

.card__source_code_button:hover {
  background-color: var(--nord1);
}
</style>
