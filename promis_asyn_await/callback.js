// function loginUser(email, password, callback){

// }

const loginUser = (email, password, callback) => {

    console.log('getting response ..!')

    setTimeout(() => {

    callback({
        userEmail: "taylor@laravel.com",
        userPassword: password,
        userAge: "",
    })

  }, 3001)


}

const getUserVideos = (email, callback) => {
    console.log('getting videos ..!')
    console.log(email)
    setTimeout(() => {
        callback(['video1', 'video2' , 'video3'])
    }, 1000)

}

const videoDetails = (videos, callback) => {
    setTimeout(() => {
    callback(videos[0])
}, 1000)}


const user =   loginUser("yultrish@gmai.com", "", user => {
//    console.log( userDetail.userEmail)
         getUserVideos(user.userEmail, video => {
                // console.log(video)
                videoDetails(video, showVid => {
                    console.log(showVid)
                    //   const err = new Error('something went wrong')
                    //   console.error(err)
                })
            })
})