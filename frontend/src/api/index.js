const getUsers = () => {
    console.log(`${process.env.VUE_APP_BACKEND_URL}`)
    console.log(`${process.env.VUE_APP_BACKEND_URL}users`)
    console.log(`${process.env.VUE_APP_BACKEND_URL}/users`)
    return fetch(`${process.env.VUE_APP_BACKEND_URL}/users`).then(res=>{
        return res.json()}
        )
}


export {getUsers}