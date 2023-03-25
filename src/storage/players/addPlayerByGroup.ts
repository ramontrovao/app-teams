import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const addPlayerByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, "");
  } catch (err) {
    throw err;
  }
};
