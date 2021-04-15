#include<stdio.h>
#include<stdlib.h>

void strImp(char *c1){
	while (*c1) printf("%c", *c1++);
}

int strLen(char *cad){
	int len = 0;
	while (*cad++) len++;
	return len;
}

void strCat(char *c1, char *c2, char *newString){
	while(*c1){
		*newString = *c1;
		c1++;
		newString++;
	}
	while(*c2){
		*newString = *c2;
		c2++;
		newString++;
	}
	*newString++ = '\0';
	strImp(newString);
}

char *emptyStr(char *c1){
	for(int i=0; i<=strLen(c1); i++) c1[i] = '\0';
	return c1;
}

char *prefijo(char *c1, int n){ 	
	if(n == 0) return c1;
	else if(n == (strLen(c1))){
		char *temp = emptyStr(c1);
		c1 = temp;
		printf("lambda\n");
		return c1;
	} 
	else if(n>0 && n<strLen(c1)){
		char temp[strLen(c1)];
		int i = 0;
		while(i < strLen(c1)-n){
			temp[i] = c1[i];
			i++;
		}
		temp[i+1] = '\0';
		return c1; 
	}else printf("La longitud ingresada es mayor a %d o menor a 0.\n", strLen(c1));	
}

char *sufijo(char *c1, int n){
	if(n == 0) return c1;
	else if(n == (strLen(c1))){
		char *temp = emptyStr(c1);
		c1 = temp;
		printf("lambda\n");
		return c1;
	}
	else if(n>0 && n<strLen(c1)){
		char temp[strLen(c1)];
		int i = 0;
		while(c1[n] != '\0'){
			temp[i] = c1[n];
			i++;
			n++;
		}
		temp[i+1] = '\0';
		c1 = temp;
		return c1;
	}
	else printf("La longitud ingresada es mayor a %d o menor a 0.\n", strLen(c1));
}


char *strSubsecuencia(char *c1, int n){
	if(n == 0) return c1;
	else if(n == (strLen(c1))){
		char *temp = emptyStr(c1);
		c1 = temp;
		printf("lambda\n");
		return c1;
	}
	else if(n>0 && n<strLen(c1)){
		char temp[strLen(c1)+1];
		int posiciones[n];
		int j=0;
		
		while(j<n){
			printf("Ingrese la posicion %d a eliminar: \n", j+1);
			scanf("%d", &posiciones[j]);
			while(posiciones[j]> strLen(c1) || posiciones[j]<0){
				printf("La posicion ingresada es incorrecta, intentelo nuevamente:\n");
				scanf("%d", &posiciones[j]);
			}
			j++;
		}
		
		for (int i = 0; i < n; i++){
			for (int j = 0; j < strLen(c1); j++){
				if(posiciones[i]-1 == j) c1[j] = '^';
			}
		}
		
		int i = 0;
		j=0;
		while(c1[i] != '\0'){
			if(c1[i] != '^') temp[j++] = c1[i];
			i++;
		}
		temp[j] = '\0';
		strImp(temp);
		c1 = temp;
		return c1;
	}
	else printf("La longitud ingresada es mayor a %d o menor a 0.\n", strLen(c1)); 
	return 0;
}

void strPow(char *c1, int n){
	if (n==0) printf("lambda");
	else if(n==1) strImp(c1);
	else{
		int index = (strLen(c1)*n)+1;
		char newStr[index];
		int j = 0, i = 0;
		while(i<index){
			newStr[i] = c1[j];
			j++;
			if(c1[j] == '\0') j = 0;
			i++;
		}
		newStr[index-1] = '\0';
		strImp(newStr);
	}
}
void strInv(char *c1){
	int i = strLen(c1)-1;
	while(i >= 0) printf("%c", c1[i--]);
}


void main(){
	int opc = 0, opc2=0, nnumero = 0;
	do{
		char newString[50];
		static char cad[25];
		static char cad2[25];
		static char c[] = "ValeVerga";
		char *temp = strSubsecuencia(c, 2);
		strImp(temp);
		printf("\n");
		printf("\t*****Operaciones de cadenas******\n");
		printf("Ingrese cadena 1:");
		fflush(stdin);
		scanf("%[^\n]s", cad);
		printf("Ingrese cadena 2:");
		fflush(stdin);
		scanf("%[^\n]s", cad2);
		printf("\t*******Menu********\n1.Concatenar\n2.Obtener prefijo\n3.Obtener sufijo\n4.Obtener subcadena\n5.Obtener subsecuencia\n6.Calcular Potencia\n7.Invertir cadena\n8.Salir\n");
		printf("Ingrese opcion:");
		scanf("%d", &opc);
		switch(opc){
			case 1:
				printf("Ingrese la cadena que se concatenara primero\n1. Cadena 1 concatena a cadena 2\n 2.Cadena 2 concatena a cadena 1\n");
				scanf("%d", &opc2);
				if(opc2 == 1) strCat(cad, cad2, newString);
				else strCat(cad2, cad, newString);
			break;
			case 2:
				printf("Ingrese la cadena donde se obtendra prefijoo y el numero de letras que se eliminaran\n1. Cadena 1\n 2.Cadena 2\n");
				scanf("%d\n", &opc2);
				printf("Ingrese el numero de letras a eliminar:");
				scanf("%d");
			break;
		}

	}while(opc !=8);

}




