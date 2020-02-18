<template>
  <div class="relative w-full">
    <div
      class="absolute w-full h-full flex items-center justify-between click-through z-30"
    >
      <svg viewBox="0 0 24 24" class="magnifying-glass h-5 w-5 ml-4 opacity-50">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
      </svg>
      <button class="microphone mr-4 click-enable"></button>
    </div>
    <div
      v-if="searchResults.length > 0"
      class="absolute top-0 pt-12 text-base bg-background-primary w-full shadow-all-direction-lg-themed z-10 rounded-xl"
    >
      <div class="h-px bg-gray-300 mx-4"></div>
      <ul class="mt-2">
        <li
          v-for="result in searchResults"
          :key="result.id"
          class="py-1 hover:bg-background-secondary no-transition"
          :class="{
            'bg-background-secondary': selectedResult
              ? result.id == selectedResult.id
              : false,
          }"
        >
          <a
            :href="result.url"
            class="d-block w-full flex cursor-default text-text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              class="magnifying-glass h-5 w-5 mx-4 bg- opacity-50"
            >
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              ></path>
            </svg>
            <div>
              <span class="font-bold">{{ result.before }} </span>
              <span>{{ result.matched }}</span>
              <span class="font-bold">{{ result.rest }} </span>
            </div>
          </a>
        </li>
      </ul>
      <div class="flex justify-center m-4">
        <GoogleSearchButton v-bind:query="query"></GoogleSearchButton>
        <FeelingLuckyButton></FeelingLuckyButton>
      </div>
      <div class="text-xs mr-6 opacity-50 flex justify-end italic">
        <a href="#">Report inappropriate predictions</a>
      </div>
    </div>
    <input
      type="search"
      v-bind:value="query"
      @input="predict($event)"
      v-on:keyup.enter="search()"
      v-on:keyup.up="selectPreviousResult()"
      v-on:keyup.down="selectNextResult()"
      class="relative hide-clear bg-background-primary text-base text-text-primary border-background-secondary rounded-full w-full p-3 pl-12 z-20"
      :class="{
        border: searchResults.length == 0,
        'hover:shadow-all-direction-lg-themed': searchResults == 0,
      }"
    />
  </div>
</template>

<script>
function queryToUrl(query) {
  return `https://google.com/search?q=${query.replace(/ +/g, '+')}`;
}

export default {
  data: () => ({
    dummyString: 'lorem ipsum dolor sit amet',
    dummyResults: [],
    query: '',
    typedQuery: '',
    searchResults: [],
    selectedResult: undefined,
  }),
  created() {
    for (let i = 0; i < 5; i++) {
      const text = this.dummyString.slice(
        0,
        Math.floor(Math.random() * this.dummyString.length + 1),
      );
      this.dummyResults.push({
        id: i,
        text,
        url: queryToUrl(text),
      });
    }

    fetch('./');
  },
  mounted() {
    document.myCustomCallback = res => {
      this.searchResults = res[1].map((result, i) => ({
        id: i,
        text: result[0],
        before: result[0].slice(0, result[0].indexOf(this.query)),
        matched: result[0].slice(
          result[0].indexOf(this.query),
          result[0].indexOf(this.query) + this.query.length,
        ),
        rest: result[0].slice(
          result[0].indexOf(this.query) + this.query.length,
        ),
        url: queryToUrl(result[0]),
      }));
    };
  },
  methods: {
    predict: function(event) {
      const query = event.target.value || '';
      this.query = query;
      this.typedQuery = query;
      this.$emit('query', query);
      if (query.length > 0) {
        var s = document.createElement('script');
        s.src = `http://suggestqueries.google.com/complete/search?callback=?&jsonp=document.myCustomCallback&q=${this.query}&client=youtube`;
        document.head.appendChild(s);
        document.head.removeChild(s);
      } else this.searchResults = [];
    },
    search: function() {
      if (this.selectedResult || this.query.trim().length > 0)
        window.location.href = queryToUrl(
          this.selectedResult ? this.selectedResult.text : this.query,
        );
    },
    selectPreviousResult: function() {
      const i = this.searchResults.indexOf(this.selectedResult);
      switch (i) {
        case -1:
          this.selectedResult = this.searchResults[
            this.searchResults.length - 1
          ];
          this.query = this.selectedResult.text;
          break;
        case 0:
          this.selectedResult = undefined;
          this.query = this.typedQuery;
          break;

        default:
          this.selectedResult = this.searchResults[i - 1];
          this.query = this.selectedResult.text;
      }
    },
    selectNextResult: function() {
      const i = this.searchResults.indexOf(this.selectedResult);
      if (i == this.searchResults.length - 1) {
        this.selectedResult = undefined;
        this.query = this.typedQuery;
      } else {
        this.selectedResult = this.searchResults[i + 1];
        this.query = this.selectedResult.text;
      }
    },
  },
};
</script>

<style scoped>
.microphone {
  background: url(//www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png)
    0 0 no-repeat;
  height: 24px;
  width: 24px;
  background-size: 24px;
  vertical-align: middle;
}

/* clears the 'X' from Chrome */
input.hide-clear[type='search']::-webkit-search-decoration,
input.hide-clear[type='search']::-webkit-search-cancel-button,
input.hide-clear[type='search']::-webkit-search-results-button,
input.hide-clear[type='search']::-webkit-search-results-decoration {
  display: none;
}

.click-enable {
  pointer-events: all;
}

.magnifying-glass {
  fill: var(--text-secondary);
}

.no-transition {
  transition: none;
}
</style>
