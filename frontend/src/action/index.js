//we require one action i.e storing the wallet address
export const AddWallet=(data)=>{
    return{
        type: "AddWallet",
        payload:{
            data:data
        }
    }
}