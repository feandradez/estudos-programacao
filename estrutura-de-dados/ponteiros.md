## 📌 Ponteiros em C // Data: 30/05/2025
> Variável que guarda o endereço de uma outra variável, não o valor em si, mas o "endereço".

```c
int numero = 10;
int *ponteiro = &numero;
printf("%d", *ponteiro); // vai imprimir 10
```

**O que aprendi:**
- `&` pega o endereço
- `*`acessa o valor no endereço