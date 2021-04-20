const { TestScheduler } = require('jest')
const sum= require('./sum')
test("test case",()=>{
    expect(sum()).toEqual({name:'amol'})
});
