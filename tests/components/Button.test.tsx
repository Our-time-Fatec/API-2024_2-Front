import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { BotaoAzul, BotaoBranco } from '../../components/buttons';
import { TouchableOpacity } from 'react-native';

// Mock para a função useFonts
jest.mock('@expo-google-fonts/poppins', () => ({
  useFonts: jest.fn(() => [true]), // Simula que as fontes estão carregadas
}));

// Mock para o SplashScreen
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

describe("Componentes de botões", () => {
    describe('BotaoAzul', () => {
        it('deve renderizar corretamente', () => {
          const tree = renderer.create(<BotaoAzul texto="Clique aqui" onPress={jest.fn()} />).toJSON();
          expect(tree).toMatchSnapshot(); // Verifica se a renderização corresponde ao snapshot
        });
      
        it('deve chamar a função onPress ao ser pressionado', () => {
          const onPressMock = jest.fn();
          const component = renderer.create(<BotaoAzul texto="Clique aqui" onPress={onPressMock} />);
      
          act(() => {
            // Simula pressionar o botão
            component.root.findByType(TouchableOpacity).props.onPress();
          });
      
          expect(onPressMock).toHaveBeenCalledTimes(1);
        });
      });
      
      describe('BotaoBranco', () => {
        it('deve renderizar corretamente', () => {
          const tree = renderer.create(<BotaoBranco texto="Clique aqui" onPress={jest.fn()} />).toJSON();
          expect(tree).toMatchSnapshot(); // Verifica se a renderização corresponde ao snapshot
        });
      
        it('deve chamar a função onPress ao ser pressionado', () => {
          const onPressMock = jest.fn();
          const component = renderer.create(<BotaoBranco texto="Clique aqui" onPress={onPressMock} />);
      
          act(() => {
            // Simula pressionar o botão
            component.root.findByType(TouchableOpacity).props.onPress();
          });
      
          expect(onPressMock).toHaveBeenCalledTimes(1);
        });
      });      
})