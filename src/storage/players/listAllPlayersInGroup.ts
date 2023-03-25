import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const listAllPlayersInGroup = async (group: string) => {
  try {
    const playersStoraged = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${group}`
    );
    const playersParsed: PlayerStorageDTO[] = playersStoraged
      ? JSON.parse(playersStoraged)
      : [];

    return playersParsed;
  } catch (err) {
    throw err;
  }
};
