var cal = require('./')
let lat = 47.9174, lng = 106.9137
cal(lat, lng).then(data=>{
    console.log(data)
})
