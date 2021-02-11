import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get("/ping")
  getPing(): string {
    return this.appService.getPing();
  }
}
