import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export const removeGroupByName = async (groupToDelete: string) => {
  try {
    const allGroups = await getAllGroups();
    const groupsUpdated = JSON.stringify(
      allGroups.filter((group) => group !== groupToDelete)
    );

    await AsyncStorage.setItem(GROUP_COLLECTION, groupsUpdated);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToDelete}`);
  } catch (err) {
    throw err;
  }
};
