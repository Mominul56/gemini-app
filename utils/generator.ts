import { UserProfile } from '../types';

const FIRST_NAMES = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda",
  "David", "Elizabeth", "William", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa",
  "Matthew", "Margaret", "Anthony", "Betty", "Mark", "Sandra", "Steven", "Ashley",
  "Paul", "Kimberly", "Andrew", "Emily", "Joshua", "Donna", "Kenneth", "Michelle"
];

const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
  "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
  "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores"
];

// REAL VERIFIED US ADDRESSES
// These are real locations where Zip Code matches Street and City perfectly.
const REAL_ADDRESSES = [
  { street: "350 Fifth Ave", city: "New York", state: "NY", zip: "10118", areaCode: "212" },
  { street: "100 Wilshire Blvd", city: "Santa Monica", state: "CA", zip: "90401", areaCode: "310" },
  { street: "233 S Wacker Dr", city: "Chicago", state: "IL", zip: "60606", areaCode: "312" },
  { street: "1201 Fannin St", city: "Houston", state: "TX", zip: "77002", areaCode: "713" },
  { street: "400 Broad St", city: "Seattle", state: "WA", zip: "98109", areaCode: "206" },
  { street: "1111 S Figueroa St", city: "Los Angeles", state: "CA", zip: "90015", areaCode: "213" },
  { street: "20 W 34th St", city: "New York", state: "NY", zip: "10001", areaCode: "212" },
  { street: "500 E 3rd St", city: "Austin", state: "TX", zip: "78701", areaCode: "512" },
  { street: "600 N Marienfeld St", city: "Midland", state: "TX", zip: "79701", areaCode: "432" },
  { street: "1313 Disneyland Dr", city: "Anaheim", state: "CA", zip: "92802", areaCode: "714" },
  { street: "2001 N Oracle Rd", city: "Tucson", state: "AZ", zip: "85705", areaCode: "520" },
  { street: "1010 W Enon Ave", city: "Fort Worth", state: "TX", zip: "76140", areaCode: "817" },
  { street: "555 Madison Ave", city: "New York", state: "NY", zip: "10022", areaCode: "212" },
  { street: "2500 E 2nd St", city: "Reno", state: "NV", zip: "89595", areaCode: "775" },
  { street: "3333 Bristol St", city: "Costa Mesa", state: "CA", zip: "92626", areaCode: "714" },
  { street: "800 N State College Blvd", city: "Fullerton", state: "CA", zip: "92831", areaCode: "657" },
  { street: "900 North Michigan Avenue", city: "Chicago", state: "IL", zip: "60611", areaCode: "312" },
  { street: "20 W Kinzie St", city: "Chicago", state: "IL", zip: "60654", areaCode: "312" },
  { street: "1540 Broadway", city: "New York", state: "NY", zip: "10036", areaCode: "212" },
  { street: "888 Biscayne Blvd", city: "Miami", state: "FL", zip: "33132", areaCode: "305" },
  { street: "1601 Biscayne Blvd", city: "Miami", state: "FL", zip: "33132", areaCode: "305" },
  { street: "2201 N Field St", city: "Dallas", state: "TX", zip: "75201", areaCode: "214" },
  { street: "1500 Sugar Bowl Dr", city: "New Orleans", state: "LA", zip: "70112", areaCode: "504" },
  { street: "1000 Elysian Park Ave", city: "Los Angeles", state: "CA", zip: "90012", areaCode: "213" },
  { street: "1 AT&T Way", city: "Arlington", state: "TX", zip: "76011", areaCode: "817" },
  { street: "7000 Coliseum Blvd", city: "Oakland", state: "CA", zip: "94621", areaCode: "510" },
  { street: "1265 Lombardi Ave", city: "Green Bay", state: "WI", zip: "54304", areaCode: "920" },
  { street: "1 Patriot Pl", city: "Foxborough", state: "MA", zip: "02035", areaCode: "508" },
  { street: "3400 E Sky Harbor Blvd", city: "Phoenix", state: "AZ", zip: "85034", areaCode: "602" },
  { street: "1 World Way", city: "Los Angeles", state: "CA", zip: "90045", areaCode: "310" }
];

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateProfile = (): UserProfile => {
  const firstName = getRandomItem(FIRST_NAMES);
  const lastName = getRandomItem(LAST_NAMES);
  
  // Select a Random Real Address from the database
  const address = getRandomItem(REAL_ADDRESSES);
  
  // Generate random phone number based on the CORRECT Area Code for that city
  const exchange = getRandomNumber(200, 999);
  const subscriber = getRandomNumber(1000, 9999);
  const phone = `(${address.areaCode}) ${exchange}-${subscriber}`;

  return {
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${getRandomNumber(1, 999)}@example.com`,
    phone,
    street: address.street,
    city: address.city,
    state: address.state,
    zipCode: address.zip,
    country: "United States"
  };
};