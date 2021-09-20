import axios from "axios";

// export const addModel = async (model) =>{
//     try{
//       let res = await axios.post(`/api/${model}s`, model);
//       setModels([res.data, ...model])
//     }catch(err){
//       console.log(err);
//     };
// };

// export const updateModels = async (model) =>{
//     try {
//       let res = await axios.put(`/api/${model}s/${model.id}`, model);
//       let newModels = models.map((m) => (m.id === model.id ? model: m));
//       setModels(newModels)
//     } catch (err) {
//       console.log(err)
//     };
// };

export const deleteModels = async ({id, model}) => {

    try {
      await axios.delete(`/api/${model}s/${id}`)
    } catch (err) {
      console.log(err)
    }
};


