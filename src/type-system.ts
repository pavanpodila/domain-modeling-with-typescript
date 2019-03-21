/// Structural Typing ///

class Contact {
  firstName: string;
  lastName: string;
}

class AddressBookContact {
  firstName: string;
}

const instance: AddressBookContact = new Contact();

/// Declaration Merging ///

// a.ts
interface NamedPerson {
  firstName: string;
}

// b.ts
interface NamedPerson {
  lastName: string;
}

const value: NamedPerson = {
  firstName: 'Pavan',
  lastName: 'Podila',
};

/// interface -- class -- type -- inline

interface Props {
  color: string;
  width: number;
}

class Props {
  color: string;
  width: number;
}

type Props = {
  color: string;
  width: number;
};

const props: { color: string; width: number };
