import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchData=createAsyncThunk('data/fetchData',async ()=>{
    const res=await axios("https://covid19.mathdro.id/api");
    return res.data;
})

export const fetchCountries =createAsyncThunk('data/fetchCountries',async (country)=>{

    const res=await axios(`https://covid19.mathdro.id/api/countries/${country}`)
    return await res.data
})

export const covidSlice= createSlice({
    name:"covid",
    initialState:{
       global:{},
       globalİsloading:true,
       countries:{},
       country:"Turkey",
      
    },
    reducers:{
       
        getCountry:(state,action)=>{
            state.country=action.payload
         
        }
    },
    extraReducers:{

        [fetchData.fulfilled]:(state,action)=>{
           state.global=action.payload;
           state.globalİsloading=false; 
           
        },
        [fetchCountries.fulfilled]:(state,action)=>{
            state.countries=action.payload
        }
    }
}) 


export const {getCountry}=covidSlice.actions
export default covidSlice.reducer