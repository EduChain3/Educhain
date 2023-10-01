const initialData={
    wallet: "0X"
}
const walletReducer=(state=initialData,action)=>{
     if(action.type==="AddWallet"){
        console.log("yaha");
        const data=action.payload?.data;
        console.log("data" + data);
        return{
            ...state,
            wallet:data
        }
     }
}

export default walletReducer;