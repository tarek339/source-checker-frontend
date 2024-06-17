import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddSurveyPages,
  IHandleCurrentPage,
  IHandleStars,
  IHandleVoted,
  IHandleVotedStars,
  ISetPageId,
  IncreaseFirstPage,
  IncreaseLastPage,
  InitialStateSurvey,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialStateSurvey = {
  pages: [],
  sideBarFirstPage: 0,
  sideBarLastPage: 1,
  pageId: "",
  singlePage: null,
  currentPage: 1,
  voted: false,
  votedStars: 0,
  stars: 0,
};

const surveyPagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addSurveyPages: (state, action: PayloadAction<IAddSurveyPages>) => {
      state.pages = action.payload.pages;
    },
    increaseFirstPage: (state, action: PayloadAction<IncreaseFirstPage>) => {
      state.sideBarFirstPage = action.payload.sideBarFirstPage;
    },
    increaseLastPage: (state, action: PayloadAction<IncreaseLastPage>) => {
      state.sideBarLastPage = action.payload.sideBarLastPage;
    },
    setPageId: (state, action: PayloadAction<ISetPageId>) => {
      state.pageId = action.payload.pageId;
    },
    getSinglePage: (state, action) => {
      state.singlePage = action.payload.singlePage;
    },
    handleCurrentPage: (state, action: PayloadAction<IHandleCurrentPage>) => {
      state.currentPage = action.payload.currentPage;
    },
    handleVoted: (state, action: PayloadAction<IHandleVoted>) => {
      state.voted = action.payload.voted;
    },
    handleVotedStars: (state, action: PayloadAction<IHandleVotedStars>) => {
      state.votedStars = action.payload.votedStars;
    },
    handleStars: (state, action: PayloadAction<IHandleStars>) => {
      state.stars = action.payload.stars;
    },
  },
});

export const surveyPagesReducer = surveyPagesSlice.reducer;
export const {
  addSurveyPages,
  increaseFirstPage,
  increaseLastPage,
  setPageId,
  getSinglePage,
  handleCurrentPage,
  handleVoted,
  handleVotedStars,
  handleStars,
} = surveyPagesSlice.actions;
