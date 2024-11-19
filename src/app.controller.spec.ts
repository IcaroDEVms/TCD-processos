import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('Deve retornar "Bem Vindo ao Projeto Upload de Vídeo!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Bem Vindo ao Projeto Upload de Vídeo!');
    });
  });
});
