const fetchData = require('./fetchData')
const fetchData1=require('./fetchData1')

test("promise testing",()=>{
    return fetchData1().then((data)=>{
        expect(data).toBe('hello')
    })
})