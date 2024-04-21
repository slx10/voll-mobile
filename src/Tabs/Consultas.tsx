import { VStack, Text, Divider, ScrollView } from "native-base"
import { CardConsulta } from "../componentes/CardConsulta"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"

export default function Consultas(){
    return (
        <ScrollView p={5}>
            <Titulo color="blue.500" mb="5">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>
                Agendar nova consulta
            </Botao>
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta
                nome='Dr. André'
                especialidade='Cardiologista'
                foto='https://github.com/andreocunha.png'
                data='23/04/2024'
                foiAgendado
            />
            <Divider mt={5} />
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta
                nome='Dr. André'
                especialidade='Cardiologista'
                foto='https://github.com/andreocunha.png'
                data='23/04/2024'
                foiAtendido
            />
            <CardConsulta
                nome='Dr. André'
                especialidade='Cardiologista'
                foto='https://github.com/andreocunha.png'
                data='23/04/2024'
                foiAtendido
            />
            <CardConsulta
                nome='Dr. André'
                especialidade='Cardiologista'
                foto='https://github.com/andreocunha.png'
                data='23/04/2024'
                foiAtendido
            />
        </ScrollView>
    )
}