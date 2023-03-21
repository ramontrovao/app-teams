import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getAllGroups } from "./getAllGroups";

export const createGroup = async (newGroupName: string): Promise<void> => {
  try {
    const storagedGroup = await getAllGroups();
    const groupAlreadyExists = storagedGroup.includes(newGroupName);

    if (groupAlreadyExists) {
      throw new AppError("Esse grupo já existe!");
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storagedGroup, newGroupName])
    );
  } catch (error) {
    throw error;
  }
};
