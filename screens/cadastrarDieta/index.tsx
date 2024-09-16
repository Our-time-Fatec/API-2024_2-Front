import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { RootStackParamList } from '../../types/rootStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { requestWithRefresh } from '../../services/api';
import FooterMenu from '../../components/menus';
import { IAlimentoDieta, IDietaFixa, IGrupo } from '../../interfaces/IDieta';
import { DiasSemana } from '../../enums/diasSemana';
import { IAlimento } from '../../interfaces/IAlimento';
import MultiSelect from 'react-native-multiple-select';
import { Picker } from '@react-native-picker/picker';
import useAlimentos from '../../hooks/useAlimentos'; // Importando o hook atualizado

enum GruposEnum {
    cafedamanha = 'Café da Manhã',
    almoco = 'Almoço',
    cafedatarde = 'Café da Tarde',
    janta = 'Janta'
}

type CadastroDietaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CadastroDieta'>;
type CadastroDietaScreenRouteProp = RouteProp<RootStackParamList, 'CadastroDieta'>;

type Props = {
    navigation: CadastroDietaScreenNavigationProp;
    route: CadastroDietaScreenRouteProp;
};

const CadastroDietaScreen: React.FC<Props> = ({ navigation, route }) => {
    const [formState, setFormState] = useState<{
        diaSemana: DiasSemana[];
        grupos: IGrupo[];
        grupoNome: GruposEnum | null;
        alimentos: IAlimentoDieta[];
        alimentoId: string | null;
        porcao: string;
        quantidade: string;
    }>({
        diaSemana: [],
        grupos: [],
        grupoNome: null,
        alimentos: [],
        alimentoId: null,
        porcao: '',
        quantidade: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [dietaId, setDietaId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { alimentos: allAlimentos, refreshAlimentos } = useAlimentos(searchTerm);

    const [selectedDiasSemana, setSelectedDiasSemana] = useState<DiasSemana[]>([]);
    const [selectedAlimentos, setSelectedAlimentos] = useState<IAlimento[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        refreshAlimentos();
    }, [searchTerm]);

    useEffect(() => {
        const { dietaId } = route.params;

        if (dietaId) {
            setDietaId(dietaId);
            setIsEditing(true);
            const fetchDieta = async () => {
                try {
                    const response = await requestWithRefresh({
                        method: 'GET',
                        url: `/dieta/${dietaId}`,
                    });
                    const dieta = response.data;

                    setFormState({
                        diaSemana: dieta.diaSemana,
                        grupos: dieta.grupos,
                        grupoNome: null,
                        alimentos: [],
                        alimentoId: null,
                        porcao: '',
                        quantidade: '',
                    });
                } catch (error) {
                    console.error('Erro ao buscar dieta:', error);
                }
            };

            fetchDieta();
        }
    }, [route.params]);

    const handleChange = (field: string, value: any) => {
        setFormState(prevState => ({ ...prevState, [field]: value }));
    };

    const handleAddGroup = () => {
        const { grupoNome, alimentos } = formState;

        if (grupoNome === null || alimentos.length === 0) {
            Alert.alert('Erro', 'Todos os campos do grupo são obrigatórios.');
            return;
        }

        setFormState(prevState => ({
            ...prevState,
            grupos: [...prevState.grupos, { nome: grupoNome, alimentos }],
            grupoNome: null,
            alimentos: []
        }));
    };

    const handleAddAlimento = () => {
        const { alimentoId, porcao, quantidade } = formState;

        if (!alimentoId || !porcao || !quantidade) {
            Alert.alert('Erro', 'Todos os campos do alimento são obrigatórios.');
            return;
        }

        const alimento = allAlimentos.find(a => a._id === alimentoId);

        // if (alimento) {
        //     setFormState(prevState => ({
        //         ...prevState,
        //         alimentos: [
        //             ...prevState.alimentos,
        //             {
        //                 alimentoId,
        //                 porcao: parseFloat(porcao),
        //                 quantidade: parseInt(quantidade, 10),
        //             }
        //         ],
        //         alimentoId: null,
        //         porcao: '',
        //         quantidade: '',
        //     }));
        // }
    };

    const cadastrarDieta = async () => {
        const { diaSemana, grupos } = formState;

        if (diaSemana.length === 0 || grupos.length === 0) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const dieta: IDietaFixa = {
            diaSemana,
            grupos
        };

        try {
            if (isEditing) {
                await requestWithRefresh({
                    method: 'PUT',
                    url: `/dieta/${dietaId}`,
                    data: dieta,
                });
                Alert.alert('Sucesso', 'Dieta atualizada com sucesso!');
            } else {
                await requestWithRefresh({
                    method: 'POST',
                    url: '/dieta',
                    data: dieta,
                });
                Alert.alert('Sucesso', 'Dieta cadastrada com sucesso!');
            }
            limparFormState();
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao cadastrar/atualizar dieta:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar/atualizar a dieta.');
        }
    };

    const limparFormState = () => {
        setFormState({
            diaSemana: [],
            grupos: [],
            grupoNome: null,
            alimentos: [],
            alimentoId: null,
            porcao: '',
            quantidade: '',
        });
    };

    const handleSelectDiaSemana = (selectedItems: string[]) => {
        setSelectedDiasSemana(selectedItems.map(item => DiasSemana[item as keyof typeof DiasSemana]));
    };

    const handleSelectAlimentos = (selectedItems: string[]) => {
        const alimentosSelecionados = allAlimentos.filter(alimento => selectedItems.includes(alimento._id ? alimento._id : ''));
        setSelectedAlimentos(alimentosSelecionados);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>{isEditing ? 'Editar Dieta' : 'Cadastro de Dieta'}</Text>

                <Text style={styles.pickerLabel}>Dias da Semana</Text>
                <MultiSelect
                    items={Object.keys(DiasSemana).map(dia => ({ id: dia, name: dia }))}
                    uniqueKey="id"
                    onSelectedItemsChange={handleSelectDiaSemana}
                    selectedItems={selectedDiasSemana.map(dia => dia.toString())}
                    selectText="Selecione os dias da semana"
                    searchInputPlaceholderText="Buscar..."
                    tagRemoveIconColor="#000"
                    tagBorderColor="#000"
                    tagTextColor="#000"
                    selectedItemTextColor="#000"
                    selectedItemIconColor="#000"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#000' }}
                    styleMainWrapper={styles.pickerContainer}
                />

                <Text style={styles.pickerLabel}>Nome do Grupo</Text>
                <Picker
                    selectedValue={formState.grupoNome}
                    onValueChange={(itemValue) => handleChange('grupoNome', itemValue)}
                    style={styles.picker}
                >
                    {Object.values(GruposEnum).map(grupo => (
                        <Picker.Item key={grupo} label={grupo} value={grupo} />
                    ))}
                </Picker>

                <Text style={styles.pickerLabel}>Buscar Alimentos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do alimento"
                    value={searchTerm}
                    onChangeText={setSearchTerm} // Atualiza o termo de busca
                />

                <MultiSelect
                    items={allAlimentos.map(alimento => ({ id: alimento._id, name: alimento.nome }))}
                    uniqueKey="id"
                    onSelectedItemsChange={handleSelectAlimentos}
                    selectedItems={selectedAlimentos.map(alimento => alimento._id)}
                    selectText="Selecione os alimentos"
                    searchInputPlaceholderText="Buscar..."
                    tagRemoveIconColor="#000"
                    tagBorderColor="#000"
                    tagTextColor="#000"
                    selectedItemTextColor="#000"
                    selectedItemIconColor="#000"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#000' }}
                    styleMainWrapper={styles.pickerContainer}
                />

                <Text style={styles.inputLabel}>Porção (g)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Digite a porção em gramas"
                    value={formState.porcao}
                    onChangeText={(value) => handleChange('porcao', value)}
                />

                <Text style={styles.inputLabel}>Quantidade</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Digite a quantidade"
                    value={formState.quantidade}
                    onChangeText={(value) => handleChange('quantidade', value)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddAlimento}
                >
                    <Text style={styles.buttonText}>Adicionar Alimento</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddGroup}
                >
                    <Text style={styles.buttonText}>Adicionar Grupo</Text>
                </TouchableOpacity>

                {formState.grupos.length > 0 && (
                    <>
                        <Text style={styles.sectionTitle}>Grupos Adicionados</Text>
                        {formState.grupos.map((grupo, index) => (
                            <View key={index} style={styles.groupContainer}>
                                <Text style={styles.groupName}>{grupo.nome}</Text>
                                {grupo.alimentos.map((alimento, idx) => {
                                    const alimentoInfo = allAlimentos.find(a => a._id === alimento._id);
                                    return (
                                        <Text key={idx} style={styles.alimentoText}>
                                            {alimentoInfo ? alimentoInfo.nome : 'Alimento não encontrado'} - Porção: {alimento.porcao.toString()}g - Quantidade: {alimento.quantidade}
                                        </Text>
                                    );
                                })}
                            </View>
                        ))}
                    </>
                )}

                <TouchableOpacity
                    style={styles.button}
                    onPress={cadastrarDieta}
                >
                    <Text style={styles.buttonText}>{isEditing ? 'Atualizar Dieta' : 'Cadastrar Dieta'}</Text>
                </TouchableOpacity>
            </ScrollView>
            <FooterMenu navigation={navigation} />
        </View>
    );
};

export default CadastroDietaScreen;
