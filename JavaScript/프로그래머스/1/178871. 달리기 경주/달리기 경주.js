function solution(players, callings) {
    const index = new Map();
    const name = new Map();

    players.forEach((v, i) => {
      index.set(v, i + 1);
      name.set(i + 1, v);
    });

    for (let i = 0; i < callings.length; i++) {
      const prevIndex = index.get(callings[i]); 
      const prevName = name.get(prevIndex - 1); 
      index.set(prevName, index.get(prevName) + 1);
      index.set(callings[i], index.get(callings[i]) - 1); 
      name.set(prevIndex, prevName);
      name.set(prevIndex - 1, callings[i]);
    }
  
	return [...name.values()];
}