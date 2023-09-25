import axios from 'axios'


export const newCom = async (data: any) => {
    console.log('salut je suis nouveau ', data)
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/com/new/com`,
        data: data
    })
    .then((result)=> {
        return result
    })
    .catch((error)=>{
        console.log('erreur com', error)
        return error
    })
}

export const getAllCom = async () => {
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/com/get/com/all/com`
    })
    .then((result)=> {
        console.log(result)
        return result.data.coms
    })
    .catch((error)=> {
        console.log(error)
    })
}

export const getCom = async (paramsCom: any) =>{
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/com/get/com/${paramsCom}`,
       
    })
    .then((result)=> {
        console.log("cocou", result)
        return result.data.com
    })
    .catch((error)=> {
        console.log(error)
    })
}

export const putComs = async (data: any, paramsCom: any) => {
    console.log(paramsCom)
    return await axios ({
        method: 'put',
        url: `${process.env.CXCD}/com/put/com/${paramsCom}`,
        data: data
    })
    .then((result)=>{
        
            console.log(result)
            return result
        
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}

export const delComs = async (data: any, paramsCom: any) =>{
    return await axios ({
        method: 'delete',
        url: `${process.env.CXCD}/com/delete/com/${paramsCom}`,
        data: data
    })
    .then((result)=>{
        
            console.log(result)
            return result
        
    })
    .catch((error)=> {
        console.log(error)
        return error
    })
}