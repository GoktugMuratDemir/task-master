export const generateRandomId = (): string => {
    // Uygulamada benzersiz olacak bir rastgele ID oluştur
    const randomId = Math.random().toString(36).substring(7);
    return randomId;
  };