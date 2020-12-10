export const getRandomImg = async () => {
    try {   
        const res = await fetch('https://randomuser.me/api/?inc=picture', {
            method: 'GET'
        })
        return res.json()
    } catch (error) {
        // return
        console.log(error)
    }
}