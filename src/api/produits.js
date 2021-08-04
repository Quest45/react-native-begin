export const getPostsFromApi =  async ()=>{
    // fetch('https://fakestoreapi.com/products?limit=5')
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
    try{
        let response = await fetch('https://fakestoreapi.com/products?limit=5');
        return await response.json();
    }catch(e){
        console.error(e);
    }
};
export const getOneProductFromApi =  async (id)=>{
    try{
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        return await response.json();
    }catch(e){
        console.error(e);
    }
};
//
// export const getPostFromApi = async (userId)=>{
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
//         return await response.json();
//     }catch (e) {
//         console.error(e);
//     }
// }
