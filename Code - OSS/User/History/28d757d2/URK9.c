/*
1. pegar o tamanho da string;
2. verificar se duas strings são iguais.
*/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int getTam(const char *str) {
    int tam=0;
    while(*str != '\0') {
        tam++;
        str++;
    }
    return tam;
}

int main(){
    char str1[] = "hello";
    char str2[] = "hellos";
    scanf("%s", str);
    int tam = getTam(str);
    printf("tamanho da string '%s'\n %d", str, tam);

    return 0;
}