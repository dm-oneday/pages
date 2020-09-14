import axios from 'axios'

import router from '@/router';
export const GET = (url, params) => {
    console.log('准备加载');
    return new Promise(resolve => {
        axios.get(url, params).then(res => {
            console.log('提交成功');
            return resolve(res)
        }).catch(err => {
            console.log('拼命加载中，网络出了点问题');
        })
    })
}
export const POST = (url, params) => {
    return new Promise(resolve => {
        axios.post(url, params).then(res => {
            return resolve(res)
        }).catch(err => {
            console.log("更改失败，请重新再试");

        })
    })
}
export let ids=()=>{
    
}


