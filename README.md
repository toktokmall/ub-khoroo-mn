# ub-khoroo-mn

## Package setup
```
yarn add ub-khoroo-mn
```
or
```
npm i ub-khoroo-mn
```

### Quick setup 
### main.js
```
var calculate = require('ub-khoroo-mn')
let lat = 47.9174, lng = 106.9137
calculate(lat, lng).then(data=>{
    console.log(data)
})

```
### Result:
```
{
  "district": "ЧД",
  "horoo": "1-р хороо",
  "population": 3750
}
```
