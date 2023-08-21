
const loginUser = (email, password) => {

    console.log('getting response ..!')
    return new Promise((resolve, reject) => {
            //code
            setTimeout(() => {

                resolve({
                    userEmail: "taylor@laravel.com",
                    userPassword: password,
                    userAge: "",
                })
            
              }, 3001)
    })

}

const getUserVideos = (email) => {
    console.log('getting videos ..!')
    console.log(email)
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(['video1', 'video2' , 'video3'])
        }, 1000)
    }
)}

const videoDetails = (videos, callback) => {
    setTimeout(() => {
    callback(videos[0])
}, 1000)}


//asynchronously
// async function getUser() {
    const getUser = async () => {
    console.log("async await")
  const user =  await loginUser("email@mail.com", 123456)

  console.log(user.userEmail)
  const vids = await getUserVideos(user.userEmail);
  console.log(vids)
}

// getUser();


(async () => {
    console.log("async await")
    const user =  await loginUser("email@mail.com", 123456)
  
    console.log(user.userEmail)
    const vids = await getUserVideos(user.userEmail);
    console.log(vids)

})();