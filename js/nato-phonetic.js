function toNatoMessage(text) {
  return [...text].map(lookupNato);
}

const lookupNato = (c) => {
  const natoAlphabet = {
    A: 'alfa',
    B: 'bravo',
    C: 'charlie',
    D: 'delta',
    E: 'echo',
    F: 'foxtrot',
    G: 'golf',
    H: 'hotel',
    I: 'india',
    J: 'juliett',
    K: 'kilo',
    L: 'lima',
    M: 'mike',
    N: 'november',
    O: 'oscar',
    P: 'papa',
    Q: 'quebec',
    R: 'romeo',
    S: 'sierra',
    T: 'tango',
    U: 'uniform',
    V: 'victor',
    W: 'whiskey',
    X: 'xray',
    Y: 'yankee',
    Z: 'zulu',
  };
  return natoAlphabet[c.toUpperCase()] || c;
}
