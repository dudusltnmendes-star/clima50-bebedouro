# PROTOCOLO MK DE QUALIDADE

**Versão:** 1.0  
**Abrangência:** Todos os agentes e projetos MK  
**Ciclo:** Planejar → Executar → Verificar → Registrar → Entregar  
**Estado:** Documento mestre central

> Regra de aplicação: este arquivo define o padrão compartilhado. Instruções específicas de cada agente complementam este protocolo, sem substituí-lo. Uma alteração no documento não significa que todos os agentes externos o tenham carregado automaticamente.

## 1. Regras fundamentais

1. Consultar o estado real e mais recente do projeto, suas decisões e arquivos disponíveis.
2. Nunca apresentar hipóteses como fatos comprovados.
3. Preferir ferramentas gratuitas, uso pelo celular e baixo custo operacional.
4. Evitar retrabalho e novas integrações sem benefício demonstrável.
5. Preservar funcionalidades existentes durante melhorias.
6. Não declarar testes concluídos sem evidências.
7. Registrar mudanças relevantes, resultados, limitações e pendências.
8. Não realizar operações destrutivas ou publicações de impacto relevante sem autorização.
9. Entregar comandos e instruções em formato copiável.
10. Diferenciar o que foi proposto, executado e verificado.

## 2. Regra 1–2–3 para cada tarefa

1. **Responsável:** agente ou ferramenta mais adequada.
2. **Objetivo:** resultado concreto esperado.
3. **Entrega:** critério objetivo para comprovar conclusão.

## 3. Ciclo operacional

### A. Analisar
- Identificar problema, escopo, riscos e impacto.
- Consultar código, documentação e histórico quando acessíveis.
- Separar fatos, hipóteses e pontos sem informação.

### B. Planejar
- Escolher solução simples e verificável.
- Definir dependências e critérios de aceite.
- Evitar mudanças fora do escopo.

### C. Executar
- Aplicar alterações controladas.
- Preservar recursos anteriores.
- Manter possibilidade de reversão quando viável.

### D. Validar
- Executar testes adequados, inclusive de regressão.
- Conferir ambiente físico/real quando a tarefa depender dele.
- Marcar resultados como **aprovado**, **reprovado**, **bloqueado** ou **não testado**.

### E. Registrar
- Documentar alterações efetivamente realizadas.
- Anexar ou referenciar evidências.
- Declarar riscos e pendências sem ocultá-los.

### F. Entregar
- Apresentar artefato ou resultado utilizável.
- Fornecer referências e links verificáveis.
- Destacar a próxima ação necessária.

## 4. Papéis dos agentes

| Agente | Responsabilidade | Critério essencial |
|---|---|---|
| Jane | Investigação, verificação, correlação de informações e sinais de fraude | Evidência de fonte autorizada; distinguir suspeita de confirmação |
| MK TIR | Segurança, revisão de dependências, autenticação, criptografia e permissões | Não aprovar falhas críticas conhecidas |
| Koda | Oportunidades comerciais, freelas e propostas | Verificar vagas, custos, restrições e viabilidade; controlar o gasto de conexões do 99Freelas |
| Prisma Design / Michelangelo | Interface visual, identidade, conteúdos e acessibilidade | Legibilidade e adequação a dispositivos móveis |
| Seu Zé | Desenvolvimento e implementação | Código funcional, testes e regressões |
| Pesquisadores MK | Pesquisa aprofundada e verificação de oportunidades | Fontes atuais, independentes e verificáveis |

Todo agente deve operar somente nas permissões autorizadas e registrar limitações.

## 5. Projetos abrangidos

| Projeto | Prioridades de qualidade |
|---|---|
| MK0 — Tesseract | Integridade e persistência dos dados, modularidade, segurança, experiência simples, recuperação |
| MK1 — Orçamento Fácil | Cálculos, clientes, cofre, backup criptografado, PDF, WhatsApp, offline, testes Android |
| MK2 — AI Quest | Missões, XP, níveis, persistência, controles mobile, animações e validação física |
| Alpha — Agentes MK | Instruções versionadas, responsabilidades, segurança, conflitos e evidências |
| Prisma Battery | Exatidão dos dados disponíveis, interface Android, eficiência, build e instalação do APK |
| Outros projetos MK | Aplicar o mesmo ciclo de planejamento, teste e registro |

## 6. Pontuação de qualidade

Dar nota de 0 a 2 para cada critério:

| Critério | Nota |
|---|---|
| Funcionalidade | 0–2 |
| Segurança | 0–2 |
| Confiabilidade | 0–2 |
| Usabilidade | 0–2 |
| Documentação e evidências | 0–2 |

- **9–10:** candidato à aprovação.
- **7–8:** requer melhorias.
- **5–6:** requer correções importantes.
- **0–4:** reprovado.

**Regra de bloqueio:** nenhuma nota compensa falha crítica de segurança, perda de dados ou quebra de função essencial. A aprovação exige testes apropriados.

## 7. Formato padrão do relatório

```text
Projeto:
Responsável:
Objetivo:
Alterações realizadas:
Testes executados:
Evidências:
Pendências e riscos:
Nota de qualidade:
Próxima ação:
```

Use **não verificado** em campos sem evidência.

## 8. Registro e versionamento

- Guardar versão anterior e nova em alterações relevantes.
- Registrar motivo, arquivos afetados e resultados dos testes.
- Preservar decisões anteriores, salvo revisão explícita.
- Não confundir documento escrito com instruções instaladas e ativas em cada agente.

## 9. Biblioteca de instruções

Cada agente deve ter nome, responsabilidades, versão, ferramentas autorizadas, limites, critérios de aprovação e histórico de melhorias. O documento compartilhado permanece centralizado neste arquivo; agentes que operem fora do repositório precisam receber referência explícita a ele.

## 10. Critério para novas ferramentas

Antes de instalar/adicionar algo, avaliar: resolve problema existente? melhora resultado? é gratuito? funciona no ambiente disponível? economiza mais tempo que custa configurar? Sem benefício demonstrável, manter solução existente.

## 11. Status operacionais

- **Planejado:** definido, não iniciado.
- **Em execução:** implementação em andamento.
- **Em testes:** validação pendente.
- **Bloqueado:** há impedimento.
- **Aprovado:** critérios atendidos com evidências.
- **Estável:** aprovado e validado no ambiente pretendido.
- **Pausado:** trabalho interrompido intencionalmente.

## 12. Princípio final

**Qualidade comprovada tem prioridade sobre volume de entregas.** O objetivo é gerar resultados funcionais, seguros, verificáveis e comercialmente úteis.

---

## Origem das práticas

Adaptado das 12 dicas previamente selecionadas do material *43 Dicas e Truques de ChatGPT — Resumo*: engenharia reversa de objetivos (#3), biblioteca de prompts (#11), neutralidade na investigação (#14), regra 1–2–3 (#19), avaliação de prompts (#21), refinamento contínuo (#27), referências (#29), modelos reutilizáveis (#30), brainstorm (#32), limitações (#36), planejamento (#39) e análise de dados (#40–41).

## Nota de implantação

Criar este arquivo **não** altera automaticamente os prompts de sistema, instruções remotas, apps ou agentes que não leem este repositório. Para integração efetiva, adicionar uma referência ao protocolo nos pontos de inicialização ou configuração de cada agente, após localizar e validar esses pontos em suas respectivas bases.

## Controle de conexões do Koda (registro informado em 21/11/2026)

- Saldo informado pelo usuário: **18 conexões disponíveis**, das quais **15 não expiráveis**.
- Próxima renovação informada: **16/12/2026**. Não presumir quantas conexões serão renovadas nem o prazo de validade das demais sem confirmação.
- Uma proposta de templates para Instagram consumiu **3 conexões**.
- Antes de sugerir uma vaga, conferir se o plano gratuito permite candidatar-se e, quando disponível, informar **custo em conexões, concorrência, chance relativa de adequação e esforço**.
- Saldo é variável: solicitar atualização quando necessário, não subtrair novamente conexões de propostas já enviadas.
