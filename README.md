# Sem-foro

Agora que você construiu um simulador de semáforo, é hora de refletir sobre o que aprendeu. Aqui estão algumas perguntas para guiar sua reflexão:

1. **Como o `enum` ajuda a organizar os estados do semáforo?**
- R:  O enum TrafficLightState ajuda a organizar os estados do semáforo definindo-os claramente como Red, Yellow e Green. Isso facilita o entendimento do código, pois permite que os estados sejam referenciados de forma consistente e legível, em vez de usar strings repetidas ou números. O enum também ajuda a evitar erros, já que valores fora desses estados são automaticamente evitados.
  
2. **Por que o `setInterval` é útil neste projeto?**
   R: O setInterval é usado para criar uma repetição constante, alternando as cores do semáforo a cada três segundos, o que simula o funcionamento real de um semáforo sem necessidade de intervenção manual. Ele permite que a função changeLight seja executada continuamente, mantendo o ciclo das luzes de forma automática.

3. **O que acontece se mudarmos o tempo do `setInterval`?**
 R: Se o tempo do setInterval for reduzido, as luzes alternarão mais rápido, acelerando o ciclo do semáforo. Por outro lado, aumentando o tempo, as transições ficarão mais lentas. Modificar o intervalo permite ajustar a velocidade do ciclo para simular diferentes tipos de semáforo (por exemplo, mais rápidos em áreas de pouco movimento e mais lentos em cruzamentos movimentados).

4. **Como o uso das classes `active` e do CSS ajuda a alterar a aparência das luzes sem modificar o HTML diretamente?**
 R: A classe active é aplicada dinamicamente às divs que representam as luzes, permitindo que as mudanças visuais (opacidade e destaque) sejam controladas no CSS. Assim, o HTML permanece estático e simples, e a lógica de alternância de luzes é gerenciada apenas pelo JavaScript, o que melhora a manutenção e separa a lógica da apresentação.

5. **Como você poderia expandir este projeto?**
 R: Adição de um botão de controle manual: Permitiria ao usuário iniciar e parar o ciclo do semáforo manualmente.
Simulação de Pedestre: Incluir luzes para pedestres, com tempos e ciclos próprios.
Ajuste Automático de Tempo: Alterar a velocidade do ciclo durante horários simulados de maior ou menor fluxo.
Feedback Auditivo: Adicionar sons para indicar a mudança de luzes, simulando semáforos reais para deficientes visuais.
Interface Personalizável: Oferecer opções para personalizar cores, velocidade de transição e layout do semáforo.
