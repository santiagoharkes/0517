import React, { useMemo, useCallback } from "react";

function EjemploBasico() {
  const resultadoDeUseMemo = useMemo(() => {
    return "HOlisssssssssssssssssss";
  }, []);

  // a useMemo le paso una funcion
  // esta funcion devuelve un valor --> EY, USEMEMO MEMORIZA VALORES !
  // y un array de dependencias

  const resultadoDeUseCallback = useCallback(() => {
    return "HOlisssssssssssssssssss";
  }, []);

  // a useCallback le paso una funcion --> EY, USECALLBACK MEMORIZA FUNCIONES!
  // esta funcion devuelve un valor
  // y un array de dependencias

  console.log({ resultadoDeUseCallback }); // QUE ESPERAMOS QUE DEVUELVA ESTE CONSOLE? --> Una funcion --> acertamosssssssss
  console.log({ resultadoDeUseMemo }); // QUE ESPERAMOS QUE DEVUELVA ESTE CONSOLE? --> "Holissssss" --> acertamosssssssss

  return <div></div>;
}

export default EjemploBasico;

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores

// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores
