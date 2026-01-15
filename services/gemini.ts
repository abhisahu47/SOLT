// Replaced with static mocks to remove API key dependency
export const generateQuote = async (topic: string): Promise<string> => {
  return `Science is the poetry of reality. - Richard Dawkins (Mock for ${topic})`;
};

export const getCareerDetails = async (career: string): Promise<string> => {
  return `A day in the life of a ${career} involves analyzing data, conducting experiments, and contributing to our understanding of the living world.`;
};