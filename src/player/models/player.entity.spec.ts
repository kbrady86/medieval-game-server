import { Player } from "./player.entity";

describe("Player", () => {
  it("should create a player with correct properties", () => {
    const player = new Player("Kev", 1, 0);

    expect(player.name).toBe("Kev");
    expect(player.level).toBe(1);
    expect(player.gold).toBe(0);
  });
});
