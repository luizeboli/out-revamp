import React from 'react';

import * as S from './styles';

const activities = [
  {
    id: 1,
    icon: S.ClassRoomIcon,
    title: 'Workshops/Cursos/Oficinas',
    content: `Desenvolvimento acadêmico e intelectual:
    * Deveres dos cidadãos
    * Vocação
    * Ética
    * Empreendedorismo
    * Informática/Nutrição/Meio Ambiente`,
  },
  {
    id: 2,
    icon: S.ClassIcon,
    title: 'Palestras',
    content: `Alertar sobre direitos (oportunidades de cursos, benefícios públicos, vagas de emprego, etc.)
    Promover campanhas contra os problemas mais comuns da comunidade (drogas/tráfico, sexualização infantil, violência, abandono, DST, gravidez indesejada, etc.)
    Motivar expectativas (esperança de mundança, dinamismo, potencial e etc.)`,
  },
  {
    id: 3,
    icon: S.WorldIcon,
    title: 'Cultura e Fé',
    content: `Uma sociedade culturalmente engajada, sabe lidar com as riquezas de pluralidade e progride respeito às diferenças.
    Promovemos eventos com:
    Música, teatro (humano e fantoche), dança, esporte, arte e literatura.`,
  },
  {
    id: 4,
    icon: S.HandLoveIcon,
    title: 'Assistência Individual',
    content: `Visitamos e atendemos famílias/pessoas individualmente para entender a razão da deficiência social e potencializar a assistência.
    Auxiliamos com:
    * Elaboração de currículos
    * Suporte a dependentes químicos
    * Doações emergentes`,
  },
  {
    id: 5,
    icon: S.FoodBankIcon,
    title: 'Refeições e Doações',
    content: `Fazemos doação de roupas e calçados. E entregamos presentes simbólicos em épocas comemorativas (dia das crianças, natal e etc.).
    Durante os eventos e ações gerais, levamos diversos tipos de refeições:
    * Almoços/Jantas
    * Comidas típicas (temáticas)
    * Lanches (hamburguer, cachorro quente)
    * Pipoca, algodão doce e afins`,
  },
  {
    id: 6,
    icon: S.MedalIcon,
    title: 'Atividades Premiadas',
    content: `Elaboramos atividades comunitárias e durante os eventos, com separação por faixa etária.
    * Maquetes
    * Apresentação de danças/teatro
    * Pesquisas e testes`,
  },
];

const SectionOurWorks = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Conheça nossas atividades</h1>

        <S.Grid>
          {activities.map((at) => (
            <S.GridItem key={at.id}>
              <S.ActivityHeader>
                <at.icon />
                <h6>{at.title}</h6>
              </S.ActivityHeader>
              <S.ActivityContent>{at.content}</S.ActivityContent>
            </S.GridItem>
          ))}
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
};

export default SectionOurWorks;
