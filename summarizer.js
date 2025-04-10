function summarize(text) {
    if (!text || text.length < 20) return "Not enough text to summarize.";
  
    // Split into sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  
    // Count word frequencies
    const wordFreq = {};
    const words = text.toLowerCase().match(/\w+/g);
    if (words) {
      words.forEach(word => {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
      });
    }
  
    // Score each sentence
    const sentenceScores = sentences.map(sentence => {
      const sentenceWords = sentence.toLowerCase().match(/\w+/g) || [];
      const score = sentenceWords.reduce((acc, word) => acc + (wordFreq[word] || 0), 0);
      return { sentence, score };
    });
  
    // Sort by score & pick top 3-5 sentences
    const topSentences = sentenceScores
      .sort((a, b) => b.score - a.score)
      .slice(0, Math.min(5, sentences.length))
      .map(s => s.sentence.trim());
  
    return topSentences.join(' ');
  }
  
  module.exports = summarize;
  