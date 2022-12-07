import mockjs, { mock } from "mockjs";

// console.log(mockjs);

mockjs.mock('api/news', 'get', {
    code: 200,
    msg: "nihao !",
    data: {
        ded: "aaass"
    }
})

mockjs.mock('user/login', 'post', {
    code: 200,
    msg: "nihao !",
    
})