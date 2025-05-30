// import {
//   rmbServices,
//   rmbServicesGet,
// } from "@assisted/common/src/store/services/rmbServices/rmbServices";
// import { hasItems } from "@assisted/common/src/utils/array/array";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  error: null,
  component: "",
  saveNPSRes: null,
  managerOptions: [],
  fundAllocation: {},
  salutationOptions: [],
  qualificationOptions: [],
  incomeRangeOptions: [],
  maritalStatusOptions: [],
  occupationOptions: [],
  uploadPhotoRes: null,
  uploadSignRes: null,
  NpsDetailsToResume: null,
  openNPSRes: null,
  npsDetailsToResumeRes: null,
  npsSchemeDetailsResTierOne: [],
  npsSchemeDetailsResTierTwo: [],
  npsStatus: null,
  pincode: [],
  citeData: [],
  errorPincodes: [],
  contributedCharges: null,
  district: [],
  oneTimeCharges: null,
  productInfo: [],
  checkNpsAccBalData: [],
  viewSubscriberDetailsInfo: [],
  financialData: [],
  emailData: [],
  downloadData: null,
  casaAccountInfo: null,
  schemeData: [],
  frozenData: [],
  contributeData: null,
  getContributionSummaryData: null,
  generateOtp: [],
  verifyOtp: [],
  tc: [],
  faqDetails: null,
  productInfoDetails: null,
  downloadCmsImgResp: null,
};

// /* uploadPhotograph function is used to upload photo*/
// export const uploadPhotograph = createAsyncThunk(
//   "uploadPhotograph",
//   async (data, { dispatch, rejectWithValue }) => {
//     const requestData = JSON.stringify(data);
//     const url = `/dbp/mpgw/app/rib/invst/nps/api/v1/uploadDocument`;
//     const response = await rmbServices(
//       { url, data: requestData },
//       { rejectWithValue, dispatch }
//     );
//     return response;
//   }
// );

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    loadComponent: (state, action) => {
      state.component = action?.payload;
    },
    unSetError: (state) => {
      state.error = null;
    },
    resetSaveNPS: (state) => {
      state.saveNPSRes = null;
    },
    resetDocumentUpload: (state) => {
      state.uploadPhotoRes = null;
      state.uploadSignRes = null;
    },
    resetNpsData: () => initialState,
  },
  extraReducers: (builder) => {},
});

export default LayoutSlice.reducer;

export const {
  unSetError,
  resetNpsData,
  resetSaveNPS,
  resetDocumentUpload,
  loadComponent,
} = LayoutSlice.actions;
