import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000/',
  responseType: "json",
  headers:{
    authorization: localStorage.getItem('token')
  }
})

export const registerEmail = (email) => {
  return client.post('/api/customer/signup/email', { email: email })
};

export const checkOtp = (data) => {
  return client.post(`/api/customer/signup/otp/${data.emailId}`, {otp: data.otp})
}

export const registerDetails = (data) => {
  let details = {
    name: data.name,
    mobile: data.mobile,
    password: data.password,
    address: data.address
  }
  return client.post(`/api/customer/signup/details/${data.emailId}`, details)
}

export const login = data => {
  console.log(data)
  return client.post('/api/customer/login', data)
}

export const searchhotel = search => {
  console.log(search.partcode)
  return client.get(`/api/search?checkIn=${search.checkIn}&checkOut=${search.checkOut}&noofadult=${search.adultno}&noofrooms=${search.rooms}&partcode=${search.partcode}`)
}

export const getHoteldetails = details => {
  return client.get(`/api/hotel/details/${details.id}`)
}

export const checkAvailability = data => {
  return client.get(`/api/hotel/check?hotelid=${data.hotelid}&checkIn=${data.checkIn}&checkOut=${data.checkOut}`)
}

export const checkOut = data => {
  return client.get(`/api/hotel/checkout/${data.hotelid}/${data.roomid}`)
}

export const getprofile = data => {
  return client.get('/api/hotel/profile')
}
export const updateProfile = data => {
  return client.put('/api/hotel/user/profile', data)
}

export const loginHotel = data => {
  return client.post(`/api/business/signin`, data)
}

export const addreview = data => {
  return client.post(`/api/hotel/review/${data.hotelid}`, data)
}

export const registerHotelDetails = data => {
  let datas = new FormData();
  datas.append('image', data.image);
  datas.set('name', data.firstname +' '+ data.middlename+' '+data.lastname);
  datas.set('companyname', data.companyname);
  datas.set('address', data.address);
  datas.set('state', data.state);
  datas.set('city', data.city);
  datas.set('pin_code', data.pincode);
  datas.set('mobileno', data.mobile);
  datas.set('email', data.email);
  datas.set('password', data.password);
  return client.post(`/api/business/signup`, datas)
}

export const businesscheckOtp = (data) => {
  return client.post(`/api/business/check/otp/${data.id}`, { otp: data.otp})
}

export const businessHome = (data) => {
  // window.location.reload(false)
  console.log(localStorage.getItem('token'))
  return client.get(`/api/business/home`)
}

export const createRoom = (data) => {
  // console.log(data)
  let datas = new FormData()
  datas.append('image', data.file)
  datas.set('roomname', data.roomname)
  datas.set('roomType', data.roomType)
  datas.set('persons', data.persons)
  datas.set('availableRooms', data.availableRooms)
  datas.set('price', data.price)
  datas.set('amentites', data.amentites)
  return client.post(`/api/business/create/room`, datas)
}

export const getRoom = (data) => {
  return client.get(`/api/business/get/room`)
}

export const deleteRoom = (data) => {
  return client.delete(`/api/business/delete/room/${data.id}`)
}

export const logoutHotel = (data) => {
  console.log('Logout')
  console.log(sessionStorage.getItem('token'))
  return client.post(`/api/business/hotel/logout`)
}

export const getBooking = data => {
  return client.get(`/api/business/hotel/booking`)
}

export const geBraintreeClientToken = () => {
  return client.get(`/api/braintree/getToken`)
}

export const processPayment = (data) =>{
  return client.post('/api/braintree/payment', data)
}