import axios from 'axios'

export const getClasse = classes =>{
    return axios
    .get('classe/getClasse',{
        classes: [classes]
    })
    .then(res => {
        return res.data
    })
}