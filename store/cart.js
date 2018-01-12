export const state = () => ({
  items: []
})

export const mutations = {
  addItem (state, item) {
    state.items.push(item)
  },
  removeItem (state, i) {
    state.items.splice(i, 1)
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
