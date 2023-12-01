BASE = 2**64
BASE_2 = 2**128
BASE_3 = 2**192

print("------------Let's compute Montgomery R")

R = 0xd35d438dc58f0d9d + 0x0a78eb28f5c70b3d * BASE + 0x666ea36f7879462c * BASE_2 + 0x0e0a77c19a07df2f * BASE_3
print(R)

# 6350874878119819312338956282401532409788428879151445726012394534686998597021

R_SQUARED = 0xf32cfc5b538afa89 + 0xb5e71911d44501fb * BASE + 0x47ab1eff0a417ff6 * BASE_2 + 0x06d89f71cab8351f * BASE_3

print(R_SQUARED)

R_CUBED = 0xb1cd6dafda1530df + 0x62f210e6a7283db6 * BASE + 0xef7f0b0c0ada0afb * BASE_2 + 0x20fd6e902d592544 * BASE_3

print(R_CUBED)

NEGATIVE_ONE = 0x68c3488912edefaa + 0x8d087f6872aabf4f * BASE + 0x51e1a24709081231 * BASE_2 + 0x2259d6b14729c0fa * BASE_3

print(NEGATIVE_ONE)

ROOT_OF_UNITY = 21888242871839275222246405745257275088696311157297823662689037894645226208582

ROOT_OF_UNITY_INV =21888242871839275222246405745257275088696311157297823662689037894645226208582

TWO_INV = 0x9e10460b6c3e7ea4 + 0xcbc0b548b438e546 * BASE + 0xdc2822db40c0ac2e * BASE_2 + 0x183227397098d014 * BASE_3

print(TWO_INV)

DELTA = 9

ZETA = 0xe4bd44e5607cfd48 + 0xc28f069fbb966e3d * BASE + 0x5e6dd9e7e0acccb0 * BASE_2 + 0x30644e72e131a029 * BASE_3

print(ZETA)

print("Print Inverse Constant")
print(0x87d20782e4866389)

print("Print R for the Montgomery form")
print(0x0e0a77c19a07df2f666ea36f7879462c0a78eb28f5c70b3dd35d438dc58f0d9d)

print("Print R^2 for the Montgomery form")
print(0x06d89f71cab8351f47ab1eff0a417ff6b5e71911d44501fbf32cfc5b538afa89)

print("Print R^3 for the Montgomery form")
print(0x20fd6e902d592544ef7f0b0c0ada0afb62f210e6a7283db6b1cd6dafda1530df)

print("Print NEGATIVE_ONE for the Montgomery form")
print(0x2259d6b14729c0fa51e1a247090812318d087f6872aabf4f68c3488912edefaa)

print("Print TWO_INV for the Montgomery form")
print(0x183227397098d014dc2822db40c0ac2ecbc0b548b438e5469e10460b6c3e7ea4)

print("Print ROOT_OF_UNITY for the Montgomery form")
print(0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd46)

print("Print ROOT_OF_UNITY_INV for the Montgomery form")
print(0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd46)

print(0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47)

print(2**256 % 0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47)

print(0x47)
print(0x11)

print("New random multiplication parameters")
print(0x0000000023441244000000002342323400f32cfc5b53fa89f32cfc5b538afa89)
print("result c0")
print(0x13523285a69bec15d56dd875a589273c951274b3828238bb065e6ca07fb1943e)
print("result c1")
print(0x0000000046882488000000004684646801e659f8b6a7f513e659f8b6a715f512)


print("Fq2 square random test values:")
print("c0")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)

print("res c0")
print(0x1e036f2e213ba9c3eca21069deea62f826db6cf3f2d379ec1637dd7d0585316b)
print("res c1")
print(0x188129b0fff29ddd0f92f1bb8373f1dc9632a77c9cd3162c328b9377c3f50fd0)


print(0x0000f6dc7f6e3fdc000f6cf6cf6d5f6c06a63ae67f4bd9c5a63ae67f48ccd9bf)
print(0x00029e0d59e21b0c0029de9de9dfb9dc120c56bac73b983d0c56bac73350982b)


print("frobenius coeff fq2_c1 -> c1")
print(0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd46)


print("nqr0 after")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)
print(0x000046882468a488000468468468646801e659f8b6a7f513e659f8b6a715f512)

print("nqr1 after")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)
print(0x306407eabcc8fba1b84bdd6ffd18f3f5959b1098b1c9d57955c6936031670835)

print("invert test tmp0")
print(0x28f269c3aadb38c0d708d886bc59c0ecbb461f189373fa28bcb9141354b8878b)

print("invert test tmp1")
print(0x0b2ad706d1819b1d51eb23c7a7bb63294a58f1353f7cb896bf1b340545a6b09a)

print("Fq6 First Halo2 Random Parameters")
print("c0: c0:")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)
print("c0: c1:")
print(0x000046882468a488000468468468646801e659f8b6a7f513e659f8b6a715f512)
print("c1: c0:")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)
print("c1: c1:")
print(0x06784c72e7ee9725c30c75f49f517c942ee6e6c294d0bb65e89044ff6650ee4a)
print("c2: c0:")
print(0x1f390877c5dc9940d4a802e6c7d33a017263bf93420ff4266a8d5216d6c5f075)
print("c2: c1:")
print(0x29802d7cb014dcb5313d1ce6cf5468667abbc459aa84bcd2a27842f4b6490ac1)


print("Fq6 Second Halo2 Random Parameters")
print("c0: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c0: c1:")
print(0x224d3d176c27894c9c95a405d899e737c1c2600b7eaada31f7c2e182c1f26101)
print("c1: c0:")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)
print("c1: c1:")
print(0x06784c72e7ee9725c30c75f49f517c942ee6e6c294d0bb65e89044ff6650ee4a)
print("c2: c0:")
print(0x1f390877c5dc9940d4a802e6c7d33a017263bf93420ff4266a8d5216d6c5f075)
print("c2: c1:")
print(0x29802d7cb014dcb5313d1ce6cf5468667abbc459aa84bcd2a27842f4b6490ac1)


print("Mul Result Halo2 Random Parameters")
print("c0: c0:")
print(0x0eafca22fef2204f5c5dace11d9f64aaf9cafd93dccea377ca214432e7b6d604)
print("c0: c1:")
print(0x2497e2898922e27f96ae8cf9ecdfd1f02e3f8f312101daccedda75085e914ea1)
print("c1: c0:")
print(0x14e072429e63edbeb71c9b758eae33f85a95c01f6a111163d7e75dd72e7213f5)
print("c1: c1:")
print(0x0c3d78be689b20c21dd277ade74d9863a08190f7ec02003d8d338eb508ebd790)
print("c2: c0:")
print(0x1a251feab41bc80f8dba76b0b17171917600022949c843142ad9d07099bce43b)
print("c2: c1:")
print(0x236d307f43fb8b044a261d57d23191a00fe9780debb0b00ecba6ad15c6955075)


print("Square Result Random Parameters")
print("c0: c0:")
print(0x15cd8d69e2f00d8b5dec76e983588a404b06a5db0bc094e182eace72f8562c30)
print("c0: c1:")
print(0x15391b57bbde14826912b101a311b148f01e83901f47012b54c15cb95ef0099a)
print("c1: c0:")
print(0x188c46354b53dfb8feae511f730f87b8e974d83dc8ff060d0a0ed39c63e39bbf)
print("c1: c1:")
print(0x1e9eddfc504fef3588d2390d148adb2b0428dee4252897ad840a7366395bafe4)
print("c2: c0:")
print(0x16b9154cde24c55d0eb44cee650360b37a0ed79e104d06e50b5bd10fa307c904)
print("c2: c1:")
print(0x043e8c2510e1156f17f45503b08f595b830b51248b4755732867ae7968d35314)


print("Mul By Nonresidue Result Random Parameters")
print("c0: c0:")
print(0x2defe4edbfe605eb6769e65c311340302cc04d8e0643ae522bfd6f7d74b87440)
print("c0: c1:")
print(0x11982e42ed0b5a51cd4bd95005c022af06f2522efd2c43243fc34bfa7b6f6706)
print("c1: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c1: c1:")
print(0x224d3d176c27894c9c95a405d899e737c1c2600b7eaada31f7c2e182c1f26101)
print("c2: c0:")
print(0x0000234412345244000234234234323400f32cfc5b53fa89f32cfc5b538afa89)
print("c2: c1:")
print(0x06784c72e7ee9725c30c75f49f517c942ee6e6c294d0bb65e89044ff6650ee4a)