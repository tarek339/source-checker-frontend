import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AddSurveyPagesAction,
  HandleCurrentPageAction,
  HandleStarsAction,
  HandleVotedAction,
  HandleVotedStarsAction,
  SetPageIdAction,
  IncreaseFirstPageAction,
  IncreaseLastPageAction,
  InitialStateSurveyPages,
  GetPageIdAction,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialStateSurveyPages = {
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
    addSurveyPages: (state, action: PayloadAction<AddSurveyPagesAction>) => {
      state.pages = action.payload.pages;
    },
    increaseFirstPage: (
      state,
      action: PayloadAction<IncreaseFirstPageAction>
    ) => {
      state.sideBarFirstPage = action.payload.sideBarFirstPage;
    },
    increaseLastPage: (
      state,
      action: PayloadAction<IncreaseLastPageAction>
    ) => {
      state.sideBarLastPage = action.payload.sideBarLastPage;
    },
    setPageId: (state, action: PayloadAction<SetPageIdAction>) => {
      state.pageId = action.payload.pageId;
    },
    handleCurrentPage: (
      state,
      action: PayloadAction<HandleCurrentPageAction>
    ) => {
      state.currentPage = action.payload.currentPage;
    },
    handleVoted: (state, action: PayloadAction<HandleVotedAction>) => {
      state.voted = action.payload.voted;
    },
    handleVotedStars: (
      state,
      action: PayloadAction<HandleVotedStarsAction>
    ) => {
      state.votedStars = action.payload.votedStars;
    },
    handleStars: (state, action: PayloadAction<HandleStarsAction>) => {
      state.stars = action.payload.stars;
    },
    getPageId: (state, action: PayloadAction<GetPageIdAction>) => {
      state.pageId = action.payload.pageId;
    },
  },
});

export const surveyPagesReducer = surveyPagesSlice.reducer;
export const {
  addSurveyPages,
  increaseFirstPage,
  increaseLastPage,
  setPageId,
  handleCurrentPage,
  handleVoted,
  handleVotedStars,
  handleStars,
  getPageId,
} = surveyPagesSlice.actions;
