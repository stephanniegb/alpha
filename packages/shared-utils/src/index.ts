export interface AlphabetEntry {
  letter: string
  phonetic: string
  word: string
  example: string
}

const ALPHABET_DATA: AlphabetEntry[] = [
  { letter: 'A', phonetic: '/eɪ/', word: 'Apple', example: 'An apple a day keeps the doctor away.' },
  { letter: 'B', phonetic: '/biː/', word: 'Ball', example: 'The ball rolled down the hill.' },
  { letter: 'C', phonetic: '/siː/', word: 'Cat', example: 'The cat sat on the mat.' },
  { letter: 'D', phonetic: '/diː/', word: 'Dog', example: 'The dog wagged its tail.' },
  { letter: 'E', phonetic: '/iː/', word: 'Elephant', example: 'The elephant has a long trunk.' },
  { letter: 'F', phonetic: '/ɛf/', word: 'Fish', example: 'The fish swims in the ocean.' },
  { letter: 'G', phonetic: '/dʒiː/', word: 'Giraffe', example: 'The giraffe has a very long neck.' },
  { letter: 'H', phonetic: '/eɪtʃ/', word: 'House', example: 'We live in a cozy house.' },
  { letter: 'I', phonetic: '/aɪ/', word: 'Ice cream', example: 'Ice cream is a sweet treat.' },
  { letter: 'J', phonetic: '/dʒeɪ/', word: 'Jungle', example: 'The jungle is full of animals.' },
  { letter: 'K', phonetic: '/keɪ/', word: 'Kite', example: 'She flew a kite in the park.' },
  { letter: 'L', phonetic: '/ɛl/', word: 'Lion', example: 'The lion is the king of the jungle.' },
  { letter: 'M', phonetic: '/ɛm/', word: 'Moon', example: 'The moon shines at night.' },
  { letter: 'N', phonetic: '/ɛn/', word: 'Nest', example: 'A bird built its nest in the tree.' },
  { letter: 'O', phonetic: '/oʊ/', word: 'Orange', example: 'She peeled an orange for breakfast.' },
  { letter: 'P', phonetic: '/piː/', word: 'Penguin', example: 'The penguin lives in the cold Antarctic.' },
  { letter: 'Q', phonetic: '/kjuː/', word: 'Queen', example: 'The queen wore a golden crown.' },
  { letter: 'R', phonetic: '/ɑːr/', word: 'Rainbow', example: 'A rainbow appeared after the rain.' },
  { letter: 'S', phonetic: '/ɛs/', word: 'Sun', example: 'The sun rises in the east.' },
  { letter: 'T', phonetic: '/tiː/', word: 'Tiger', example: 'The tiger has orange and black stripes.' },
  { letter: 'U', phonetic: '/juː/', word: 'Umbrella', example: 'She carried an umbrella in the rain.' },
  { letter: 'V', phonetic: '/viː/', word: 'Volcano', example: 'The volcano erupted with lava.' },
  { letter: 'W', phonetic: '/ˈdʌbljuː/', word: 'Whale', example: 'The whale leaped out of the water.' },
  { letter: 'X', phonetic: '/ɛks/', word: 'Xylophone', example: 'She played a song on the xylophone.' },
  { letter: 'Y', phonetic: '/waɪ/', word: 'Yacht', example: 'They sailed on a yacht at sunset.' },
  { letter: 'Z', phonetic: '/zɛd/', word: 'Zebra', example: 'The zebra has black and white stripes.' },
]

export function getAlphabetEntry(letter: string): AlphabetEntry | undefined {
  return ALPHABET_DATA.find((e) => e.letter === letter.toUpperCase())
}

export function getAllLetters(): AlphabetEntry[] {
  return ALPHABET_DATA
}
