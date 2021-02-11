import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { PlayerDTO } from "../dto/player.dto";
import { Player } from "../models/player.entity";
import { PlayersService } from "../services/players.service";

@Controller("players")
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id): Promise<Player> {
    return this.playersService.findOne(id);
  }

  @Post() create(@Body() player: PlayerDTO): Promise<Player> {
    return this.playersService.insertOne(player);
  }
}
