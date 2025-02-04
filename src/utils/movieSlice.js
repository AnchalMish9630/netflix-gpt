import { createSlice } from "@reduxjs/toolkit";
 
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:[],
        trailerVideo: null,
        topRatedMovies:[],
        popularMovies:[],
        upcomingMovies:[],
    },
    reducers:{
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
            },
        addTrailerVideo: ( state, action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload
        },
        addPopularMovie: (state, action)=>{
            state.popularMovies = action.payload
        },
        addUpcomingMovie: (state, action)=>{
            state.upcomingMovies = action.payload
        }
        
 
 
}
})
 
export const {addNowPlayingMovie, addTrailerVideo,addTopRatedMovies, addPopularMovie,addUpcomingMovie } = movieSlice.actions;
export default movieSlice.reducer;