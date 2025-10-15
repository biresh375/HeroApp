export const stordedApp = () => {
  const stordAppSTR = localStorage.getItem("installed");
  if (stordAppSTR) {
    const stordAppData = JSON.parse(stordAppSTR);
    return stordAppData;
  } else {
    return [];
  }
};


export const addToStoreDB =(id)=>{
    const stordAppData =stordedApp();
   
        stordAppData.push(id);
        const data = JSON.stringify(stordAppData);
        localStorage.setItem("installed",data)
  
}

// export const rmlocalstorage =(id)=>{
//   const storedData = stordedApp();
//   const parsData = JSON.parse(storedData)
//   const updateStorage = parsData.filter(data=>)
// }