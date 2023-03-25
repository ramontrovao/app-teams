import { listAllPlayersInGroup } from "./listAllPlayersInGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const getPlayersByGroupAndTeam = async (team: string, group: string) => {
  try {
    const playersParsed = await listAllPlayersInGroup(group);
    const playersFilteredByTeam = playersParsed.filter(
      (player) => player.team === team
    );

    return playersFilteredByTeam;
  } catch (err) {
    throw err;
  }
};
