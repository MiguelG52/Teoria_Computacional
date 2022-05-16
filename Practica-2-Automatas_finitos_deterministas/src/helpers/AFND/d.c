#include<stdio.h>
#include<stdlib.h>

#define cantidadEstados 4
#define cantidadSimbolos 2
#define cantidadFinales 1
#define String char*


//Se define el alfabeto compuesto de 1 y 0
const char alfabeto[cantidadSimbolos] = {'0', '1'};
//Se define un arreglo que contenga los estados finales del automata
const int estadosFinales[cantidadFinales] = { 3 };
//Se define una matriz de un grafo, apartir del automata dado
const int automata[cantidadEstados][cantidadSimbolos][cantidadEstados] = {
    {{1,1,0,0}, {1,0,1,0}},
    {{0,0,0,1}, {0,0,0,0}},
    {{0,0,0,0}, {0,0,0,1}},
    {{0,0,0,1}, {0,0,0,1}},
};
//Cuenta la longitud de una cadena, recibe un apuntador de tipo char y regresa la longitud de una cadena
int strlen(String cad){
	int len = 0;
	while (*cad++) len++;
	return len;
}
int esFinal(int estado){
    //Compara el estado que llega por parametro con el arreglo de estados finales
    //Si el estado actual se encuentra en el arreglo, retorna 1 sino 0
    for(int i = 0; i < cantidadFinales; i++) if(estadosFinales[i] == estado) return 1;
    return 0;
}
int posicion(char c){
    //Compara el caracter actual con el arreglo del alfabeto
    //Si el caracter es no pertenece al arreglo, termina la ejeción del programa
    //sino regresa la columna que se va a recorrer
    for (int i = 0; i < cantidadSimbolos; i++) if(alfabeto[i] == c) return i;
    printf("\nError: La cadena no pertenece al lenguaje");
    exit(0);
}
//Evalua cadena ingresada palabra por palabra
int evaluaPalabra(int estado, String c){
    //Si ya recorrio toda la cadena, verifica si se encuentra en un estado de aceptacion
    if(*c == '\0') return esFinal(estado);
    //Obtenemos la columna que vamos a recorrer
    int columna = posicion(*c);
    //recorremos los estados del automata
    for (int i = 0; i < cantidadEstados; i++){
        //Verificamos si para cada uno de los estados existe salida
        //recursivamente, si existe salida, se recorre ese camino, probando el caracter
        if(automata[estado][columna][i]) if(evaluaPalabra(i, c+1)) return 1;
    }
}


int main(void){
    int opc = 1;
    do{
        //liberamos el buffer de saltos de linea
        fflush(stdin);
        //Reservamos memoria para una cadena de 100 caracteres
        String cad = malloc(100 * sizeof(char));
        printf("\nIngresa la cadena:");
        scanf("%[^\n]", cad);
        //Redimensionamos la memoria necesaria para la cadena 
        cad = realloc(cad, strlen(cad)+1);
        //Llamamos funcion evalua palabra para verificar si la cadena es una expresion regular
        if(evaluaPalabra(0, cad)) printf("\nLa expresion es aceptada por el automata");
        else printf("\nLa expresion no es aceptada por el automata");
        printf("\n\nDesea evaluar otra expresion?\nSi, pulse 1\nNo pulse 0:");
        scanf("%d", &opc);
        printf("\n-------------------------");
    }while(opc!=0);
    return 0;
}