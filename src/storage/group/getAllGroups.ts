import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export const getAllGroups = async () => {
  try {
    const groupsStorage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groupsParsed: string[] = groupsStorage
      ? JSON.parse(groupsStorage)
      : [];

    return groupsParsed;
  } catch (error) {
    throw error;
  }
};
