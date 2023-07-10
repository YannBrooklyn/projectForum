import axios from 'axios'
import env from 'react-dotenv'

export const getAllActu = async () => {
    
    return await  axios({
        method: 'get',
        url: `${env.MYAPI}/post/get/actualite/all/actu`,
        
    })
    .then((result)=> {
        console.log("olaaaaaa")
        console.log("coucou je suis la" + result.data)
        return result.data
    })
    .catch((error) => {
        console.log("olaaa error")
        console.log("ici ici ici" + error)
    })
}

export const newActu = async (data: {}) => {
    return await axios({
        method:'post',
        url: `${env.MYAPI}/post/new/actualite`,
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