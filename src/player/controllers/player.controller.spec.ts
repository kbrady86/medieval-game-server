import { Test, TestingModule } from "@nestjs/testing";
import { PlayersController } from "./players.controller";
import { PlayerDTO } from "../dto/player.dto";
import { PlayersService } from "../services/players.service";

const mockPlayerA = {
  name: "Player A",
  level: 5,
  gold: 500,
};

const mockPlayerB = {
  name: "Player B",
  level: 10,
  gold: 1500,
};

describe("Players Controller", () => {
  let controller: PlayersController;
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [
        {
          provide: PlayersService,
          useValue: {
            getAll: jest.fn().mockResolvedValue([mockPlayerA, mockPlayerB]),
            getOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                name: mockPlayerA.name,
                level: mockPlayerA.level,
                gold: mockPlayerA.gold,
                id,
              })
            ),
          },
        },
      ],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
    service = module.get<PlayersService>(PlayersService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("findOne", () => {
    it("should return a player", async () => {
      await expect(controller.findOne("someId")).resolves.toEqual({
        name: mockPlayerA.name,
        level: mockPlayerA.level,
        gold: mockPlayerA.gold,
        id: "someId",
      });

      await expect(controller.findOne("someOtherId")).resolves.toEqual({
        name: mockPlayerA.name,
        level: mockPlayerA.level,
        gold: mockPlayerA.gold,
        id: "someOtherId",
      });
    });
  });

  describe("create", () => {
    it("should create a new player", async () => {
      const playerDTO: PlayerDTO = {
        name: "Leon Kennedy",
        level: 5000,
        gold: 25000,
      };

      await expect(controller.create(playerDTO)).resolves.toEqual({
        id: "uuid",
        ...playerDTO,
      });
    });
  });
});
