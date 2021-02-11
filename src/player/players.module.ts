import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlayersController } from "./players.controller";
import { Player } from "./player.entity";
import { PlayersService } from "./players.service";

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}
