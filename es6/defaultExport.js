// 每個檔案只能有一個預設匯出
export default{
    myName:'小名',
    fn(){
        console.log('我是小明')
    }
}

//具名匯出:每個檔案能有多個具名匯出
export const myName = '小名';

export function fn(){
    console.log('我的名字是小明')
}