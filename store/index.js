export const state = () => ({
  posts: [],
  article: [],
  lang: 'ru'
})

export const mutations = {
  setPosts(state, value) {
    if (value) {
      state.posts = value
    }
  },
  setLang(state, value) {
    if (value) {
      state.lang = value
    }
  },
  setArticle(state, value) {
    if (value) {
      state.article = value
    }
  }
}

export const actions = {
  async fetchPosts({ commit }, lang) {
    try {
      commit('setLang', lang)
      await fetch(`https://navruzhotel.uz/wp-json/wp/v2/posts?filter[lang]=${lang}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('setPosts', data)
        })
    }
    catch (error) {
      throw error;
    }
  }
}

export const getters = {
  getPosts: state => state.posts,
  getLang: state => state.lang,
  getArticle: state => state.article
}