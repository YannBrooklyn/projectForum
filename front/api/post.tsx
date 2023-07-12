import axios from 'axios'

export const getAllActu = async () => {
    
    return await axios({
        method: 'get',
        url: `http://localhost:3105/post/get/actualite/all/actu`,
        
    })
    .then((result)=> {
        return result.data.post
    })
    .catch((error) => {
        console.log(error);
    })
}

export const newActu = async (data: {}) => {
    return await axios({
        method:'post',
        url: `http://localhost:3105/post/new/actualite`,
        data: data,
    })
    .then((result)=> {
        console.log(result.data)
        return result.data.post
    })
    .catch((error) => {
        console.log("tottototo", error)
    })
}