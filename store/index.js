export const state = () => ({
  lang: 'ru',
  posts: [],
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
  }
}

export const actions = {
  async fetchPosts({ commit }, lang) {
    try {
      console.log('FETCH');
      // await fetch(`http://localhost/wp-json/wp/v2/posts?filter[lang]=${lang}`)
      //   .then((response) => {
      //     return response.json()
      //   })
      //   .then((data) => {
      //     commit('setPosts', data)
      //   })
    }
    catch (error) {
      throw error;
    }
  }
}

export const getters = {
  getPosts: state => state.posts,
  getLang: state => state.lang
}