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

int isEqual(const *char str1, const *char str2) {
    


    return 1;
}

int main(){
    char str1[] = "hello";
    char str2[] = "hellos";

    printf("%d, %d\n", tam1, tam2);

    return 0;
}