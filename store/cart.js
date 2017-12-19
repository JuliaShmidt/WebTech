export const state = () => ({
  items: []
})

export const mutations = {
  addItem (state, item) {
    state.items.push(item)
  },
  removeItem (state, item) {
    state.items.slice(item, 1)
  }
}

export const getters = {
  itemsCount (state) {
    return state.items.length
  },
  items (state) {
    return state.items
  }
}
