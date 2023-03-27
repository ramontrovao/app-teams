import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { listAllPlayersInGroup } from "./listAllPlayersInGroup";

export const removePlayerByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const allPlayers = await listAllPlayersInGroup(group);
    const playersUpdated = JSON.stringify(
      allPlayers.filter((player) => player.name !== playerName)
    );

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, playersUpdated);
  } catch (err) {
    throw err;
  }
};
