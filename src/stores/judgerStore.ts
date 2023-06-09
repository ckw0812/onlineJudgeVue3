import {defineStore} from 'pinia'



export const judgerStore = defineStore('judge',{
    state:()=>{
        return {
            type:100,
            lasttime:0
        }
    },
    getters:{},
    actions:{
        // 设置当前选择的题目
        setJudgeType(data:any){
            this.type = data
        },
        setLastTime(data:any){
            this.lasttime = data
        }

    },
    persist:{
        enabled:true
    }
})