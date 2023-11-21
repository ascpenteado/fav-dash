export function formatCPForCNPJ(value: string): string {
  const onlyNumbers = value.replace(/[^\d]/g, '');

  // CPF
  if (onlyNumbers.length === 11) {
    return onlyNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  // CNPJ
  if (onlyNumbers.length === 14) {
    return onlyNumbers.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
  }

  return value;
}
