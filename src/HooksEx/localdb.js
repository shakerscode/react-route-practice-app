
const setLocalData = (id) => {

    let settingData = getLocalData();

    // let settingData = {};

    // const gettingData = localStorage.getItem('simple-data');
    // if (gettingData) {
    //     settingData = JSON.parse(gettingData);
    // }


    const quantity = settingData[id];
    if (quantity) {
        settingData[id] = quantity + 1;
    } else {
        settingData[id] = 1;
    }

    localStorage.setItem('simple-data', JSON.stringify(settingData))


}

const getLocalData = () =>{
    let settingData = {};
    
    const gettingData = localStorage.getItem('simple-data');
    if (gettingData) {
        settingData = JSON.parse(gettingData);
    }
    return settingData;
}



const removeFromDatabase = id =>{
    const getData = localStorage.getItem('simple-data');
    if(getData){
        const cartData = JSON.parse(getData);
        if(id in cartData){
            delete cartData[id];
            localStorage.setItem('simple-data', JSON.stringify(cartData))
        }
    }
}

export {
    setLocalData,
    getLocalData,
    removeFromDatabase

}