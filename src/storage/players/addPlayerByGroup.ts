import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { listAllPlayersInGroup } from "./listAllPlayersInGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const addPlayerByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const players = await listAllPlayersInGroup(group);
    const playerAlreadyExists = players.filter(
      (player) => player === newPlayer
    );

    if (playerAlreadyExists.length === 0) {
      throw new AppError("Esse jogador já existe!");
    }

    const newStorage = JSON.stringify([...players, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newStorage);
  } catch (err) {
    throw err;
  }
};
