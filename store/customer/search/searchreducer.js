const initialState = {
  hotels: [],
  isFind: '',
  search_hotel: [],
}

const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SEARCH_HOTEL':
      action.payload.hotels.map((list) => (
        state.hotels.push(list)
      ))
      action.payload.hotels.map((list) => (
        state.search_hotel.push(list)
      ))
      console.log(state.hotels)
      sessionStorage.clear()
      return {
        ...state,
        isFind: action.payload.isFind
      }
    case 'SEARCH_AMENITITES_RATING':
      const search_hotel_rating = [];
      state.hotels.map((list) => {
        search_hotel_rating.push(list)
      })
      
      state.search_hotel = [];
      let rating = sessionStorage.getItem('rating')
      
      search_hotel_rating.map((list) => {
        if(list.rating === parseInt(rating, 10)){
          state.search_hotel.push(list)
        }
      })
      return {
        ...state
      }
    case 'SEARCH_AMENITITES_PRICE':
      let search_hotel_price = [];
      state.search_hotel.map((list) => {
        search_hotel_price.push(list)
      })

      state.search_hotel = [];
      let min_price = action.payload.min_price;
      let max_price = action.payload.max_price;
      console.log(min_price)
      console.log(max_price)

      let ratings = sessionStorage.getItem('rating');

      state.hotels.map((list) => {
        if(sessionStorage.getItem('rating')){
          if(parseInt(list.price.split('$')[1], 10) < max_price && parseInt(list.price.split('$')[1], 10) > min_price && list.rating === parseInt(ratings, 10)){
            console.log(list.rating, list.price)
            state.search_hotel.push(list)
          }
        }
        else{
          if(parseInt(list.price.split('$')[1], 10) < max_price && parseInt(list.price.split('$')[1], 10) > min_price){
            console.log(list.price)
            state.search_hotel.push(list)
          }
         }
      })
      return {
        ...state
      }
    case 'SEARCH_HOTEL_NAME':
      const search_hotel_name = [];
      state.search_hotel.map((list) => {
        search_hotel_name.push(list)
      })
      if(action.payload.name === ""){
        state.search_hotel = [];
        // console.log(state)
        state.hotels.map((list) => {
          state.search_hotel.push(list)
        })
        // console.log(state.search_hotel)
      }
      else{
        state.search_hotel = [];
        search_hotel_name.map((list)=>{
          // if()
          if(list.name.includes(action.payload.name)){
            state.search_hotel.push(list)
          }
        })
      }
      return {
        ...state
      }
    default:
      return state
  }
}

export default searchReducer