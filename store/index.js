export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ชื่อ',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'นามสกุล', value: 'lastname' },
    { text: 'E-mail', value: 'email' },
    { text: 'วันเช็คอิน', value: 'checkin' },
    { text: 'วันเช็คเอาท์', value: 'checkout' },
    { text: 'จำนวนห้อง', value: 'sumroom' },
    { text: 'จำนวนผู้เข้าพัก', value: 'sumperson' }
  ]
})
export const mutations = {
  input (state, { name, lastname, email, checkin, checkout, sumroom, sumperson }) {
    state.data.push({ name, lastname, email, checkin, checkout, sumroom, sumperson })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
