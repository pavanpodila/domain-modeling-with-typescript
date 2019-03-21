/// Traits as Intersection types ///

interface Painter {
  paint();
}

interface Musician {
  playMusic();
}

interface Singer {
  sing();
}

interface Developer {
  writeProgam();
}

interface Person {
  name: string;
}

type SingingPaintingDeveloper = Person & Singer & Painter & Developer;

const pappu: SingingPaintingDeveloper = {
  name: 'Great Indian Singing Painting Developer',

  sing() {
    console.log('La la la');
  },

  paint() {
    console.log('Painting a masterpiece');
  },

  writeProgam() {
    console.log('Hacking on the keyboard');
  },
};

/// Breaking down a JSON response ///

interface ContractId {
  id: string;
}

interface ContractHeader {
  meta: string;
}

interface TradeDetails {
  tradeDetails: {};
}
interface PartyDetails {
  partyDetails: {};
}

type ContractBody = TradeDetails & PartyDetails;

type Contract = ContractId & ContractHeader & ContractBody;

const firstContract: Contract = {
  id: '123',
  meta: 'Super Contract',
  tradeDetails: {},
  partyDetails: {},
};
