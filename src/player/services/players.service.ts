import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlayerDTO } from "../dto/player.dto";
import { Player } from "../models/player.entity";

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playersRepository: Repository<Player>
  ) {}

  async getPlayers(): Promise<Player[]> {
    return await this.playersRepository.find();
  }

  findOne(id: string): Promise<Player> {
    return this.playersRepository.findOne(id);
  }

  async insertOne(cat: PlayerDTO): Promise<Player> {
    const newPlayer = this.playersRepository.create(cat);
    await this.playersRepository.save(newPlayer);

    return newPlayer;
  }

  async createPlayer(note: Player) {
    this.playersRepository.save(note);
  }
}
