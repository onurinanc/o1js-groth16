# Mina zkApp: O1js Groth16

This template uses TypeScript.

## What's the project?
This project implements Groth16 Verifier using o1js using non-native pairing friendly elliptic curves together with pairing functions.

Using Groth16 Verifier in o1js, other projects will be able to verify their groth16 circuits as Mina Smart Contracts. In other words, the projects built using Circom will be able to create a Groth16 verifier as a Mina Smart Contract using SnarkJS (generate the Verifier.ts in the SnarkJS, which will be usable in o1js)

## What's the progress?
- While waiting for the "foreign field operations in o1js", PrimeField is implemented for BN254 prime field. (foreign-field in feat branch will be integrated or will be changed by adding Montgomery multiplication for faster operations)
- Fp2, Fp6, Fp12 implemented (foreign-field in feat branch will be integrated)
- Final exponentiation and Miller loop implemented. (Miller loop tests fails, will be fixed.)
- Pairing.pair(G2Group, G1Group) is implemented, but bilinearity tests are not working correctly due to a mistake in the implementation (will be fixed)
- Groth16 Verifier (will be fixed after the bilinearity tests are passed)

## How to build

```sh
npm run build
```

## How to run tests

```sh
npm run test
npm run testw # watch mode
```

## How to run coverage

```sh
npm run coverage
```

## License

[Apache-2.0](LICENSE)
