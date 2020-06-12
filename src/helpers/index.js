
export const saveNightModeToLocalStorage = state => {
    try{
        localStorage.setItem('mode', state)
    }catch(err){
        console.log(err)
    }
}