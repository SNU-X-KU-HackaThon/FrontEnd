import { axiosInstance } from "./common";
import { API_URLS } from "../constants";

const {
  UPDATE_RESOURCES,
  GET_COLLECTIONS,
  GET_COLLECTION_DATA,
  GET_CATEGORYS,
  UPDATE_DATA,
  GET_NFT_COUNT,
  SEND_INDEXER,
} = API_URLS;

export const updateResourceApi = async (
  dataName,
  dataValue,
  collection_address
) => {
  const formData = new FormData();
  formData.append("collection_address", collection_address);
  formData.append(dataName, dataValue);
  // formData.append("sale_info_title", inputs.sale_info_title);
  // formData.append("sale_info_description", inputs.sale_info_description);
  return await axiosInstance.post(UPDATE_RESOURCES, formData);
};

export const updateDataApi = async (dataType, dataValue, address) => {
  const data = {};
  data["collection_address"] = address;
  data[dataType] = dataValue;
  return await axiosInstance.post(UPDATE_DATA + dataType, data);
};

export const getCollectionApi = async () => {
  return await axiosInstance.get(GET_COLLECTIONS);
};
export const getCollectionAssetCount = async (collection_address) => {
  return await axiosInstance.get(GET_NFT_COUNT + "/" + collection_address);
};

export const getCollectionDataApi = async (address) => {
  return await axiosInstance.get(GET_COLLECTION_DATA + address);
};

export const getCategoriesApi = async () => {
  return await axiosInstance.get(GET_CATEGORYS);
};

export const sendTxhash = async (txhash) => {
  return await axiosInstance.post(SEND_INDEXER + txhash);
};

export const signup = async (txhash) => {
  return await axiosInstance.post(SEND_INDEXER + txhash);
};
