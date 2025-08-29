/*
1. pegar o tamanho da string;
2. verificar se duas strings são iguais.
*/

#include <stdio.h>
#include <stdlib.h>

int getTam(const char *str) {
    int tam=0;
    int strtam = *str;
    while(strtam != '\0') {
        tam++;
        strtam++;
    }
}

int main(){

}