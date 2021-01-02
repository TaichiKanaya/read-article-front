import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({})

export type ArticleState = ReturnType<typeof state>

export const mutations: MutationTree<ArticleState> = {}

export const actions: ActionTree<ArticleState, ArticleState> = {
  async findArticles (_, { page, limit }) {
    const res = await this.$axios.get(`/api/articles?page=${page}&limit=${limit}`)
    if (res.status !== 200) {
      return Promise.resolve([])
    }
    return Promise.resolve(res.data)
  },
  async findById (_, id: Number) {
    const res = await this.$axios.get(`/api/articles/${id}`)
    if (res.status !== 200) {
      return Promise.resolve([])
    }
    return Promise.resolve(res.data)
  }
}
