import { MagnifyingGlass } from "@phosphor-icons/react";
import { SeachFormContainer } from "./styles";

export function SeachForm() {
  return (
    <SeachFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass />
        Buscar
      </button>
    </SeachFormContainer>
  )
}