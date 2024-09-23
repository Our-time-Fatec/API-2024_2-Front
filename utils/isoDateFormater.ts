class IsoDateFormatter {
    // Função auxiliar para adicionar zero à esquerda quando necessário
    private static padZero(value: number): string {
      return value < 10 ? `0${value}` : `${value}`;
    }
  
    // Função que recebe uma data e retorna o formato DD/MM/YYYY
    public formatToDDMMYYYY(date: Date): string {
      const day = IsoDateFormatter.padZero(date.getDate());
      const month = IsoDateFormatter.padZero(date.getMonth() + 1);
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
  
  export default new IsoDateFormatter();
  