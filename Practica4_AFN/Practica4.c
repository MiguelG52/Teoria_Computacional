#include<stdio.h>
#include<stdlib.h>
#define cantidadEstados 5
#define cantidadSimbolos 2
#define cantidadFinales 3
#define String char*


const char alfabeto[cantidadSimbolos] = {'a', 'b'};

const int estadosFinales[cantidadFinales] = {2, 3, 4};

const int automata[cantidadEstados][cantidadSimbolos][cantidadEstados] = {
    {{0,1,0,0,1}, {0,0,0,1,0}},
    {{0,1,0,0,0}, {0,0,1,0,0}},
    {{0,0,0,0,0}, {0,0,0,0,0}},
    {{0,0,0,0,0}, {0,0,0,0,0}},
    {{0,0,0,0,0}, {0,0,0,0,1}}
};

int strlen(String cad){
	int len = 0;
	while (*cad++) len++;
	return len;
}
int esFinal(int estado){
    for(int i = 0; i < cantidadFinales; i++) if(estadosFinales[i] == estado) return 1;
    return 0;
}
int posicion(char c){
    for (int i = 0; i < cantidadSimbolos; i++) if(alfabeto[i] == c) return i;
    printf("\nError: Caracter no forma parte del alfabeto");
    exit(0);
}
int evaluaPalabra(int estado, String c){
    if(*c == '\0') return esFinal(estado);
    
    int columna = posicion(*c);
    for (int i = 0; i < cantidadEstados; i++){
        if(automata[estado][columna][i]) if(evaluaPalabra(i, c+1)) return 1;
    }
}
int main(void){
    String cad = malloc(1000 * sizeof(char));
    printf("\nIngresa la cadena:");
    scanf("%[^\n]", cad);
    cad = realloc(cad, strlen(cad)+1);

    if(evaluaPalabra(0, cad)) printf("\nLa expresion es regular");
    else printf("\nLa expresion no es regular");
    return 0;
}