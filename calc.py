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


print("Mul By 1 Result Random Parameters")
print("c0: c0:")
print(0x20a7779c69786b6f1d268d4009e49fe5638676501d8b2965952436162cd3bb83)
print("c0: c1:")
print(0x21327bed21525a0bed3aaed9d20ad91452712d4ac736c932e74c4c1c74233e72)
print("c1: c0:")
print(0x10b03f551e095ce612899ae8776b402ed1316835440fc7eed872a3c548a2be44)
print("c1: c1:")
print(0x1b2fe99b4f1fbba7af3fa5d515e0c3ba205dce8ea8999ba8c34889dc015066f9)
print("c2: c0:")
print(0x1f390877c5dc9940d4a802e6c7d33a017263bf93420ff4266a8d5216d6c5f075)
print("c2: c1:")
print(0x29802d7cb014dcb5313d1ce6cf5468667abbc459aa84bcd2a27842f4b6490ac1)


print("Mul By 01 Result Random Parameters")
print("c0: c0:")
print(0x219ae01b0fc8939a94866fb209b3279c00bcea4416b4502cc69a83dac9cd3803)
print("c0: c1:")
print(0x2d309302b092cf95d164bdd238751d852dbebe92ce95638155c095fe1119e696)
print("c1: c0:")
print(0x103538af20bdb2e3416af301352862017d45256c61bdb976df520d8a8f8e6fb6)
print("c1: c1:")
print(0x2f7bb2406d22b3dad76c22da7994977d23f5f6e593462996ece8ca95e06cdb6c)
print("c2: c0:")
print(0x27e0bf7363edbeea9e8cd1f6365fb87ecf8420413461cb1156e838b388014c0b)
print("c2: c1:")
print(0x28ce3fcb1550be52c5b7f0d5774cfab9309866990b96735d3088b8e34fd31344)


print("Invert Result Random Parameters")
print("c0: c0:")
print(0x2abebb2f2f34feac88f55f745354e287147697fed14f9b71d696813677170420)
print("c0: c1:")
print(0x129604a01b8be39acc9202f4f29b1c0705ca64b8b7263c9998ff3b1301a98924)
print("c1: c0:")
print(0x19dc2ee7719b745fb31d92a5cc8d0760ab13e87fea304f25493285a56f51f4a4)
print("c1: c1:")
print(0x2b15f872e82f50e921a42da1152e84ce37cdc2e224df3010777cdb029d69b974)
print("c2: c0:")
print(0x0f4f69e7ef2c251c938687f1fbf6aa13330d17c9bb3987444c7d34a35a8ab892)
print("c2: c1:")
print(0x232a106b3c4592500da745b9b4135b43dc5b163c34b148c511981444fe2c9ba3)
print("")


print("FROBENIUS_COEFF_FQ6_C1 Constants")
print("fq2 0")
print(1)
print(0)
print("fq2 1")
print(0x2fb347984f7911f74c0bec3cf559b143b78cc310c2c3330c99e39557176f553d)
print(0x16c9e55061ebae204ba4cc8bd75a079432ae2a1d0b7c9dce1665d51c640fcba2)
print("fq2 2")
print(0x30644e72e131a0295e6dd9e7e0acccb0c28f069fbb966e3de4bd44e5607cfd48)
print(0)
print("fq2 3")
print(0x0856e078b755ef0abaff1c77959f25ac805ffd3d5d6942d37b746ee87bdcfb6d)
print(0x04f1de41b3d1766fa9f30e6dec26094f0fdf31bf98ff2631380cab2baaa586de)
print("fq2 4")
print(0x000000000000000059e26bcea0d48bacd4f263f1acdb5c4f5763473177fffffe)
print(0)
print("fq2 5")
print(0x28be74d4bb943f51699582b87809d9caf71614d4b0b71f3a62e913ee1dada9e4)
print(0x14a88ae0cb747b99c2b86abcbe01477a54f40eb4c3f6068dedae0bcec9c7aac7)


print("")
print("FROBENIUS_COEFF_FQ6_C2 Constants")
print("fq2 0")
print(1)
print(0)
print("fq2 1")
print(0x05b54f5e64eea80180f3c0b75a181e84d33365f7be94ec72848a1f55921ea762)
print(0x2c145edbe7fd8aee9f3a80b03b0b1c923685d2ea1bdec763c13b4711cd2b8126)
print("fq2 2")
print(0x000000000000000059e26bcea0d48bacd4f263f1acdb5c4f5763473177fffffe)
print(0)
print("fq2 3")
print(0x0bc58c6611c08dab19bee0f7b5b2444ee633094575b06bcb0e1a92bc3ccbf066)
print(0x23d5e999e1910a12feb0f6ef0cd21d04a44a9e08737f96e55fe3ed9d730c239f)
print("fq2 4")
print(0x30644e72e131a0295e6dd9e7e0acccb0c28f069fbb966e3de4bd44e5607cfd48)
print(0)
print("fq2 5")
print(0x1ee972ae6a826a7d1d9da40771b6f589de1afb54342c724fa97bda050992657f)
print(0x10de546ff8d4ab51d2b513cdbb25772454326430418536d15721e37e70c255c9)


print(" ")
print("Frobenius Map Result power 0")
print("c0: c0:")
print()
print("c0: c1:")
print()
print("c1: c0:")
print()
print("c1: c1:")
print()
print("c2: c0:")
print()
print("c2: c1:")
print()
print("")


print(" ")
print("Frobenius Map Result power 1")
print("c0: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c0: c1:")
print(0x0e17115b750a16dd1bbaa1b0a8e77125d5bf0a85e9c6f05b445daa94168a9c46)
print("c1: c0:")
print(0x1e6406afca8d19af6a3c030eecd88f4c78abe0c8d374808f1d8368f21a6f4018)
print("c1: c1:")
print(0x023dad002c8d922b23523e5ea4f100026d5c41b764af870d17191ab6b0874c24)
print("c2: c0:")
print(0x1d6285ca04f3477ad12cd7d82141bd30f69c1fb9cd2d92f9ffc1a30a58aef2d3)
print("c2: c1:")
print(0x0aa5d78439da4cf423999fc3bdc0313b860c7ed93b8602137afed97f203f79b8)
print("")


print(" ")
print("Frobenius Map Result power 2")
print("c0: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c0: c1:")
print(0x224d3d176c27894c9c95a405d899e737c1c2600b7eaada31f7c2e182c1f26101)
print("c1: c0:")
print(0x03d153a5751f40e5ff408a43713907dee5eab78b1235443be100c07c9654e834)
print("c1: c1:")
print(0x131ec323720d68ba496d305b027423ed9508c405fcad4e9b1939c90a787364b3)
print("c2: c0:")
print(0x1a1cccdc9df7557fd9b756e0275a37a389dc561c36568e0d103af624902af379)
print("c2: c1:")
print(0x13992638d20652cdfa65bf9e17d233e113749627765ad8d6ef27caf501f67eca)
print("")


print(" ")
print("Frobenius Map Result power 3")
print("c0: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c0: c1:")
print(0x0e17115b750a16dd1bbaa1b0a8e77125d5bf0a85e9c6f05b445daa94168a9c46)
print("c1: c0:")
print(0x1ee2492bea644bee5910d045207fe322c1c0015bcdaa4c63a7f0395eb9c0a7e2)
print("c1: c1:")
print(0x0ec857a274a8dad150622e58587b844f22719fcd693763976171669055c5767f)
print("c2: c0:")
print(0x272559d56c24b35e3b20844df383f3e577adf0e0df301de4a78371f993e55567)
print("c2: c1:")
print(0x12bcc57a9f79e8d8788fad87796c3fd9036a4a82cff24d23c2b91e7599c26793)
print("")


print(" ")
print("Frobenius Map Result power 4")
print("c0: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c0: c1:")
print(0x224d3d176c27894c9c95a405d899e737c1c2600b7eaada31f7c2e182c1f26101)
print("c1: c0:")
print(0x2c92d78959de0cffb90d874fce141e4ab0a38609fae88bc767f2cf3eee9d1a8a)
print("c1: c1:")
print(0x16cd3edc8735a049abd69f66dfbbb7dbd391bfc8d6f3c08c3a567e0cf9b8aa4a)
print("c2: c0:")
print(0x2772c7915e8f5192c24131a613d53f1632c2bf73587d12e6fd78cff24a0916a0)
print("c2: c1:")
print(0x23af4930404810d044fdaee81bdc1473a0d27aa1b003ff70e6a10a43f8ba7103)
print("")


print(" ")
print("Frobenius Map Result power 5")
print("c0: c0:")
print(0x181e735dabe4ac17d8c30ed6ef9d47e0e4b3c5c318bdb00d19ccfff777b5d0d5)
print("c0: c1:")
print(0x0e17115b750a16dd1bbaa1b0a8e77125d5bf0a85e9c6f05b445daa94168a9c46)
print("c1: c0:")
print(0x23824d0a0d71dab5ad53b818f5aa3e4bf496f2fe2fc4c827b2cd75dcdcca1294)
print("c1: c1:")
print(0x1f5e49d03ffb332d449bd8ff8414d40c07b3890c9a8adfe8c3960acfd2303aa4)
print("c2: c0:")
print(0x1c40bd46514b457a64532f46ee3cffa4c0b8c4882485e43bd0fc0329c465b254)
print("c2: c1:")
print(0x1301b17407dd6a5d1c26f86b4a54e7490e0aa1355cf97b55fe6894221e7b1bfc)
print("")


print("Fq12 First Random Parameters")
print("c0: c0: c0:")
print(0x2d77d17544c420c724ed84b060e33c6d154c7374227e39c6cc9eef0e34e2590d)
print("c0: c0: c1:")
print(0x249f57bde199c36cab1fcdbaca8f3ef1afa5c4701d2bf17c4de6b31ccf002193)
print("c0: c1: c0:")
print(0x22693c9fe2e7f788df15cb975499c06f976d5002164639754b7fd023f2011856)
print("c0: c1: c1:")
print(0x241c7573e2fe44c71df5b253f5a203961135f0a8ce289c2868d9e01e8974fbbf)
print("c0: c2: c0:")
print(0x0abe069e32f3f55a6130fb2f7a3dac814c60eed79e1533f9588f138c4867019d)
print("c0: c2: c1:")
print(0x246f0ccd2bc8c0df880f3feae4a4e30e0a8c68cbc750803a658a3f3697b4a11e)
print("c1: c0: c0:")
print(0x15cd8d69e2f00d8b5dec76e983588a404b06a5db0bc094e182eace72f8562c30)
print("c1: c0: c1:")
print(0x15391b57bbde14826912b101a311b148f01e83901f47012b54c15cb95ef0099a)
print("c1: c1: c0:")
print(0x188c46354b53dfb8feae511f730f87b8e974d83dc8ff060d0a0ed39c63e39bbf)
print("c1: c1: c1:")
print(0x1e9eddfc504fef3588d2390d148adb2b0428dee4252897ad840a7366395bafe4)
print("c1: c2: c0:")
print(0x16b9154cde24c55d0eb44cee650360b37a0ed79e104d06e50b5bd10fa307c904)
print("c1: c2: c1:")
print(0x043e8c2510e1156f17f45503b08f595b830b51248b4755732867ae7968d35314)


print(" ")
print("Fq12 Second Random Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x2a81d3186165b1cb31b809b8a6084ba7a3939780c2cede04c5039f99d3be8f6d)
print("c0: c1: c0:")
print(0x11349e4ff173fbc46f8ae5cbaa4ce037cbb6a8010b231cbaa5bfe811f9008c2b)
print("c0: c1: c1:")
print(0x2a4061f36217f2786b22fc053b91adf9d45bad9d1b4d335ad27d361ab0f8fc83)
print("c0: c2: c0:")
print(0x1d912a888a12cac20cc0a072fddf826f71f12cb483437f434a57cfd19071ff72)
print("c0: c2: c1:")
print(0x1237866695e4606fc4079ff57252718705463465e3a8401d32c51f9b4bda508f)
print("c1: c0: c0:")
print(0x2b9b1ad3c5e01b16bbd8edd306b11480960d4bb6178129c305d59ce5f0ac5860)
print("c1: c0: c1:")
print(0x2a7236af77bc2904d225620346236291e03d07203e8e0256a982b972bde01334)
print("c1: c1: c0:")
print(0x00b43df7b5761f48450c5c88649db7143b6845ea298c418cd7fd1b21ef4a3a37)
print("c1: c1: c1:")
print(0x0cd96d85bf6e3e4159542c63a7945df870d05336e1df64cdcbf45ab59a3a6281)
print("c1: c2: c0:")
print(0x2d722a99bc498aba1d6899dcca06c166f41daf3c209a0dca16b7a21f460f9208)
print("c1: c2: c1:")
print(0x087d184a21c22ade2fe8aa07611eb2b70616a249168eaae650cf5cf2d1a6a628)


print(" ")
print("Fq12 Mul Result Parameters")
print("c0: c0: c0:")
print(0x1ab734e1c33b91844cb8b7650f3c0268859b605d4c79a667b6392515f77bd629)
print("c0: c0: c1:")
print(0x2434e7e2a4d30c0c4ff51ca31426010fb11a0e9b7c08732de8c15faec82a6375)
print("c0: c1: c0:")
print(0x02037f5479588098ea6f081afae85a99ac744946d2a272a7ba199ed54f316157)
print("c0: c1: c1:")
print(0x1200f7206574937d1ebb0a34da2b0211934ce66124b690b6a2cc492d95f9777f)
print("c0: c2: c0:")
print(0x26db0786f66e58d9d6a6c4d054d348475fe1ce258ff667a1b14870f6c1976c4a)
print("c0: c2: c1:")
print(0x028729b62042680c223acc536b0d8501854c8c7f56bcac311d74943b5fcc2926)
print("c1: c0: c0:")
print(0x2d4200eb77d05dcc6fedbe98066b89ae054438cf53c32a3d24d51d29db10483f)
print("c1: c0: c1:")
print(0x1ab1597bdf690d2c22b2334f34e2d2b56ab0e8ddc16adc4ffee25f6698a68c13)
print("c1: c1: c0:")
print(0x045a28ae74919c3d0314ce99bf6ac8c76ea5725309bca17d834a1bf6668c6918)
print("c1: c1: c1:")
print(0x198884d467711c6ddb5c1641911504ccc0221001679cf5df5102caae312aeafb)
print("c1: c2: c0:")
print(0x1541a4380cdff837258e1f2b61102ad93e39310891874c01ab965feecfae35b3)
print("c1: c2: c1:")
print(0x026c173d0563499b1595b2cdf456994d9305f5b84a5dc533a61808b0a85213a5)


print(" ")
print("Fq12 Square Result Parameters")
print("c0: c0: c0:")
print(0x29325bb1e684f9cb3a8ef11dce23233283c0249bc4a2b73b6175d6f3298ece69)
print("c0: c0: c1:")
print(0x0e7be3dc72b3bfa3386aec1ae3f8a86b9f6518a6cc367aee92e46cd330ae3617)
print("c0: c1: c0:")
print(0x221ed08a396d3e761a391921819f6fb0d89fc5711e69e13bf6f5146ffddcd51a)
print("c0: c1: c1:")
print(0x151e66c4fa4187aff33cef2d4b2a0abfb6379380f61bc87cf20f76605376f56b)
print("c0: c2: c0:")
print(0x24a4c70739c9439fa8b90669f8db84f516e95ad63f0579356e43f3e88d8dee4b)
print("c0: c2: c1:")
print(0x2cae0a0b5b777d35862dc1b46913c81bbd1e62dcc41d42c541b332a8be91fc4a)
print("c1: c0: c0:")
print(0x2434cd892ca6b170598afee00522d48b3769c70c43028830ea441754af4039cc)
print("c1: c0: c1:")
print(0x1f085746dfc45dc5409e9d63ddcf53d70d4102ce7c6c3f290b2201f03f04a2b7)
print("c1: c1: c0:")
print(0x0d28fd08f0b19d05f420b339196f4be576d170c5e97a7680a841cbfce3bc86bb)
print("c1: c1: c1:")
print(0x146d371052c0e38b15e3450140dd9d7099b4d99ab94a5e4c40cf088b5a88bbfc)
print("c1: c2: c0:")
print(0x2e0a4c0b5e3759debfd50f9034f42419264833f7b316e98946f23a665b3cc2ed)
print("c1: c2: c1:")
print(0x0b9dbbe1648c8e1e02ee36961092591d93eb737d5061c64590e6895eb1f4425f)


print(" ")
print("Fq12 mul_by_014 Result Parameters")
print("c0: c0: c0:")
print(0x220d829e60d3f7ea1bc0e5e6a2b7c85d1296fc798daf5ad8ac4f0bebc794d447)
print("c0: c0: c1:")
print(0x0e8d7214f23c61c85b5a4cd8055ef34974b6643c7fd36dd9e0623a464a2d992a)
print("c0: c1: c0:")
print(0x1e7d418fb512e0a91fef724ea50ccb86d02be4639e9d60180a531a8f96c642b9)
print("c0: c1: c1:")
print(0x041affcbf129d6bbf4e0da4f975d632cd79f19b4cefbc2a5ced5222d1ddcf551)
print("c0: c2: c0:")
print(0x3032db04d7945a71a9aa7542608f3ed7e5884bcfefe2470f1a53981b2aeba3f9)
print("c0: c2: c1:")
print(0x024dd2d319f627e090c00d04490a56ace3d6b1fb1428fece7e11782d95c71f38)
print("c1: c0: c0:")
print(0x24e8ce8738b05589b746baf9034ef4b3edcab31313d3cb0c8c186122a2515418)
print("c1: c0: c1:")
print(0x2e95d527f0ea073f3584ac44294c4e94d2c8fe9e4e59f3436e9f4bacdb46800e)
print("c1: c1: c0:")
print(0x0ee9978d44e70c17cb30e92cf6257fe68f52ea0f8a6826ca78272a95acb659f6)
print("c1: c1: c1:")
print(0x0a612a6157c8dd1df263a8c374ad98cde4de5bf3fbe0a54939804cace6ebe250)
print("c1: c2: c0:")
print(0x2620d6be4f6216c82eca27a11fa13ac3bf2b2d3e0b729d9da45a5df6495ed3c5)
print("c1: c2: c1:")
print(0x07e54284f6bb5ad1f657e41be7212ea9cc727f88c077e3686de8c1cd52ecbfa5)


print(" ")
print("Fq12 mul_by_034 Result Parameters")
print("c0: c0: c0:")
print(0x001fbf4a924af58467dfa21f45eaacdc9f5cf3a43985841eef8c0f6665a8bbc5)
print("c0: c0: c1:")
print(0x28ad5ad877c328aca11ef41634ef7d060b3eb5f3cd12d951e11d064d9b740992)
print("c0: c1: c0:")
print(0x2c412ea80858e71e363a8780d2e2522f3ae921ccfb4623391d58a4daf6581800)
print("c0: c1: c1:")
print(0x24b1ebf2868eff91034b0166f2ce2c3c71aa9bd50bf154e44668620c52e5741a)
print("c0: c2: c0:")
print(0x302aaae30ab2c638d1735c0b290345012b47e1ed7fa724ff7bf39e92c345b2fd)
print("c0: c2: c1:")
print(0x09170fbf96c903a0bb356d921c98fae20860898b597b60a5d84a9acc430d6951)
print("c1: c0: c0:")
print(0x08fe6763bb83e3f71bb94ef060583bb3ffc49b57732620d3704e901f82e744b3)
print("c1: c0: c1:")
print(0x076261dd1dd4e1025e864733dc8f5dc366717e97520c0c4be96cd1e9bb0fb740)
print("c1: c1: c0:")
print(0x10d7a1dcc7fe52c4cdc414ab775cdadc97c367e9df83bc8e501cb9fe60535d13)
print("c1: c1: c1:")
print(0x00e1e4fe78f59aedcff2a0b3d2345bcb5aa7a7b426487aabef87aeb85e71f120)
print("c1: c2: c0:")
print(0x0ed0a1b42effd85cf6e4a487c28cc75828ce080220d7f8a50a47669943f4b2d6)
print("c1: c2: c1:")
print(0x07d76cdda3e976375f0907ad77909867195598c187898f2a882831bdb185d87a)


print(" ")
print("Fq12 Inverse Result Parameters")
print("c0: c0: c0:")
print(0x050f447f0e50ffa71afe9c537af5f978d3e2d2a8256f6e58c9531bd9da2a755f)
print("c0: c0: c1:")
print(0x038716c741a05d01af3bfe27ca484eabdf352f40def2b4807a0fe937910e5496)
print("c0: c1: c0:")
print(0x047032d1be46a33b855237a94e1a5a938c19c5e1e5b76f84266759fad5785d59)
print("c0: c1: c1:")
print(0x1475a3b2a141c1bce64584a277eee7601ca825b54097f32a7d54c02a2a9e8b7f)
print("c0: c2: c0:")
print(0x1a048944bffd9b354d308b0754f1acc2fb506befce81f63d768815f37c8d3911)
print("c0: c2: c1:")
print(0x1319fb7e093ae64cdf27b9259e6aa56429a02ab4b791576c82127eddb070ae46)
print("c1: c0: c0:")
print(0x26bdeae0c0693035a6aa0a181845d08c2312d838e5ff09af1e5bd98e6b52345c)
print("c1: c0: c1:")
print(0x125dba7b90dcb4eedcd07ef21260fd12e9e93666a6004f53d676de23280645d9)
print("c1: c1: c0:")
print(0x15041fabaaa8e52ffda33f76265df68497500e989fe2cef33e5c8d3c34ab1a21)
print("c1: c1: c1:")
print(0x2bb0ef84255a9cb187ad3e0706ce3b02054602b42cd56cf660b4c9fd08ec1bf2)
print("c1: c2: c0:")
print(0x1c70c8e0c45ca696718219c5fe0839be9201322d6c7902c7cf488c4a34b70e79)
print("c1: c2: c1:")
print(0x26ba4042eb06bb2036719ebb3db61f89a95e7169412dcf930556141591a01ffd)


print(" ")
print("Fq12 Cyclotomic Square Result Parameters")
print("c0: c0: c0:")
print(0x281c8b7a911f8788d8de404169e104d8c0a3b44f5e1c8fd93dc6d335d681d15c)
print("c0: c0: c1:")
print(0x0a5b98d66f075dcbb5ced08671d38b03934f7053752ffc4901b297a2a5a2edec)
print("c0: c1: c0:")
print(0x1fd62b123aae909dd1267daff8dc8f6e3a9db61080afd8cf31c1037123adfd23)
print("c0: c1: c1:")
print(0x28123964d830a046e0facb416b1580a0575395e6f78753a680ed26ba692926ba)
print("c0: c2: c0:")
print(0x232209e89212ecfc9f2c9c0b7f3ada41905432d4bfa59163334d0dc1bbee2101)
print("c0: c2: c1:")
print(0x2a5c3500333bc51501b35b1d4329704ec774ce770d9166bde5eac914fc944f66)
print("c1: c0: c0:")
print(0x0e0f96aba4fa22bb2f78d60fac76ae088ef306793cb3cf6cac5f1073c467a82c)
print("c1: c0: c1:")
print(0x0e4ab539ad677ea8dd05b9c2c76f6dbfb98e2994cee174d435ddc7c2ea7d1913)
print("c1: c1: c0:")
print(0x2993e95d0cd4b917facb94d05c1ac78450582001bc08b97b06cf57d13e807986)
print("c1: c1: c1:")
print(0x1ea6329d8e1a032a37c246b215cf9f8903540fd532de95d607004cee93e8274c)
print("c1: c2: c0:")
print(0x1f90344dc477265b5df61a63dc7ea6a54d0bf4123978c742f266cfc6e9e008be)
print("c1: c2: c1:")
print(0x1a3151a435c3833c275386eaed6639aac96dccce65deae6ebc53adc8a8c038e2)


print(" ")
print("Frobenius Coefficients 12 Parameters")
print("0 c0")
print("1")
print("0 c1")
print("0")
print("1 c0")
print(0x1284b71c2865a7dfe8b99fdd76e68b605c521e08292f2176d60b35dadcc9e470)
print("1 c1")
print(0x246996f3b4fae7e6a6327cfe12150b8e747992778eeec7e5ca5cf05f80f362ac)
print("2 c0")
print(0x30644e72e131a0295e6dd9e7e0acccb0c28f069fbb966e3de4bd44e5607cfd49)
print("2 c1")
print(0)
print("3 c0")
print(0x19dc81cfcc82e4bbefe9608cd0acaa90894cb38dbe55d24ae86f7d391ed4a67f)
print("3 c1")
print(0x00abf8b60be77d7306cbeee33576139d7f03a5e397d439ec7694aa2bf4c0c101)
print("4 c0")
print(0x30644e72e131a0295e6dd9e7e0acccb0c28f069fbb966e3de4bd44e5607cfd48)
print("4 c1")
print(0)
print("5 c0")
print(0x0757cab3a41d3cdc072fc0af59c61f302cfa95859526b0d41264475e420ac20f)
print("5 c1")
print(0x0ca6b035381e35b618e9b79ba4e2606ca20b7dfd71573c93e85845e34c4a5b9c)
print("6 c0")
print(0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd46)
print("6 c1")
print(0)
print("7 c0")
print(0x1ddf9756b8cbf849cf96a5d90a9accfd3b2f4c893f42a9166615563bfbb318d7)
print("7 c1")
print(0x0bfab77f2c36b843121dc8b86f6c4ccf2307d819d98302a771c39bb757899a9b)
print("8 c0")
print(0x000000000000000059e26bcea0d48bacd4f263f1acdb5c4f5763473177fffffe)
print("8 c1")
print(0)
print("9 c0")
print(0x1687cca314aebb6dc866e529b0d4adcd0e34b703aa1bf84253b10eddb9a856c8)
print("9 c1")
print(0x2fb855bcd54a22b6b18456d34c0b44c0187dc4add09d90a0c58be1eae3bc3c46)
print("10 c0")
print(0x000000000000000059e26bcea0d48bacd4f263f1acdb5c4f5763473177ffffff)
print("10 c1")
print(0)
print("11 c0")
print(0x290c83bf3d14634db120850727bb392d6a86d50bd34b19b929bc44b896723b38)
print("11 c1")
print(0x23bd9e3da9136a739f668e1adc9ef7f0f575ec93f71a8df953c846338c32a1ab)


print(" ")
print("Frobenius power 0 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x2a81d3186165b1cb31b809b8a6084ba7a3939780c2cede04c5039f99d3be8f6d)
print("c0: c1: c0:")
print(0x11349e4ff173fbc46f8ae5cbaa4ce037cbb6a8010b231cbaa5bfe811f9008c2b)
print("c0: c1: c1:")
print(0x2a4061f36217f2786b22fc053b91adf9d45bad9d1b4d335ad27d361ab0f8fc83)
print("c0: c2: c0:")
print(0x1d912a888a12cac20cc0a072fddf826f71f12cb483437f434a57cfd19071ff72)
print("c0: c2: c1:")
print(0x1237866695e4606fc4079ff57252718705463465e3a8401d32c51f9b4bda508f)
print("c1: c0: c0:")
print(0x2b9b1ad3c5e01b16bbd8edd306b11480960d4bb6178129c305d59ce5f0ac5860)
print("c1: c0: c1:")
print(0x2a7236af77bc2904d225620346236291e03d07203e8e0256a982b972bde01334)
print("c1: c1: c0:")
print(0x00b43df7b5761f48450c5c88649db7143b6845ea298c418cd7fd1b21ef4a3a37)
print("c1: c1: c1:")
print(0x0cd96d85bf6e3e4159542c63a7945df870d05336e1df64cdcbf45ab59a3a6281)
print("c1: c2: c0:")
print(0x2d722a99bc498aba1d6899dcca06c166f41daf3c209a0dca16b7a21f460f9208)
print("c1: c2: c1:")
print(0x087d184a21c22ade2fe8aa07611eb2b70616a249168eaae650cf5cf2d1a6a628)


print(" ")
print("Frobenius power 1 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x05e27b5a7fcbee5e86983bfddb790cb5f3edd310a5a2ec88771cec7d04be6dda)
print("c0: c1: c0:")
print(0x2fd8ef786b9ced8da029e950bbd52a69c68521bf3b153728d0edc3d49c89bacd)
print("c0: c1: c1:")
print(0x0dd4abf447b6cad380056bcb584b35a2734f4aa3565636a0b92f25bbe4e29833)
print("c0: c2: c0:")
print(0x1f7fc0442e92b843f637db5a02b81797226d985d22b809eca4047177c0188832)
print("c0: c2: c1:")
print(0x300dbea3b74b18b7c5fba588c8b0404a035c4513ff1cd4dec665d6a81c127fd0)
print("c1: c0: c0:")
print(0x1abbf73f5390e3a49132a30f0742150f652c5d65bab4cc88f73dc61fac4101de)
print("c1: c0: c1:")
print(0x0e70a5fc87fb817a22f46c766e9fbe4257010c1b73278679c1a71a837233fc73)
print("c1: c1: c0:")
print(0x0513f9a8249d41d310130a858912c24fc5ef91015333cc856fbd655f8c23a683)
print("c1: c1: c1:")
print(0x04eedb7fd6456d3decc28e3110e69bbda3a9f126a1960b1d0e416b4aa92dee15)
print("c1: c2: c0:")
print(0x1defa282991c9aa45fbb38e53875400d6c93d32b81448bed56e3dc81136dd959)
print("c1: c2: c1:")
print(0x08a3f768993cc6d91e5ea32d5905495a168b5a2bd29c222182e32e85f95060e0)


print(" ")
print("Frobenius power 2 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x2a81d3186165b1cb31b809b8a6084ba7a3939780c2cede04c5039f99d3be8f6d)
print("c0: c1: c0:")
print(0x2c4e7eccafd8cb973bb7a91e2c2507a541cf2bd6f68f2b7e120ec2dbfa313adc)
print("c0: c1: c1:")
print(0x2214efba88b07d5cf58a0e77abced705479cd0a74315da3685e566f70778d50b)
print("c0: c2: c0:")
print(0x1a21b68a428b59f32f8aa9458eb9acb974662f5bbfc01d3f50b87711ef5b5860)
print("c0: c2: c1:")
print(0x2707923a119406b270fadecc9a6d1ce6bc70f7f7007d8a119b2e8992f49a44b0)
print("c1: c0: c0:")
print(0x1ffd151f107cfdff3438b4e863780eeb44a19a233026d8b2d981f9520d1cfdba)
print("c1: c0: c1:")
print(0x089855b22ee4ac644fde12c64c9ace4abe1250d64f5b28d734a707f94706b0de)
print("c1: c1: c0:")
print(0x2fb0107b2bbb80e17343e92e1ce3a1495c1924a73ee58900642370f4e932c310)
print("c1: c1: c1:")
print(0x238ae0ed21c361e85efc1952d9ecfa6526b1175a869265bf702c31613e429ac6)
print("c1: c2: c0:")
print(0x12e96704752c3df9eb073410efe5f55fbba96f947e95490210f02dc93d413ee4)
print("c1: c2: c1:")
print(0x0b056f97652a0258bf24ee981c99dd5561f4fac891645cb02281e9872656174e)


print(" ")
print("Frobenius power 3 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x05e27b5a7fcbee5e86983bfddb790cb5f3edd310a5a2ec88771cec7d04be6dda)
print("c0: c1: c0:")
print(0x2b086beb599897ff0d6e90b542335f0b0e5d1a1c63ee6d018cfc6b4b85da47f5)
print("c0: c1: c1:")
print(0x1273fe9696de92f0a609b70b90f4b334d1410ed3b12e3a7f092b4a3b4e579095)
print("c0: c2: c0:")
print(0x224c12fd1160d9d6c75edd8371f4b61589a7e621c1a9bf0abc35edefe0763070)
print("c0: c2: c1:")
print(0x2b8594d46bae3d5c25c63593c03878b158ec054870b789ede238119f0effa034)
print("c1: c0: c0:")
print(0x28c70b1adf2aae05886deaada7118d32d9d511a427477aebaac4009dc5fd7c9d)
print("c1: c0: c1:")
print(0x2aab08f290656802324109c885b6c1d25836040c876d6074aae9506ac4321b94)
print("c1: c1: c0:")
print(0x2b5054cabc945e56a83d3b30f86e960dd191d990153dfe07cc6326b74c5956c4)
print("c1: c1: c1:")
print(0x2b7572f30aec32ebcb8db785709abc9ff3d7796ac6dbbf702ddf20cc2f4f0f32)
print("c1: c2: c0:")
print(0x202fda81ffd5d9d4284b6a10629044febcfe8b50e930b98066dadd9e652a52e2)
print("c1: c2: c1:")
print(0x1c69e3a6248df6de7c16a4d28939f3a1678be5414f365eeaf2d1180fb15de34f)


print(" ")
print("Frobenius power 4 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x2a81d3186165b1cb31b809b8a6084ba7a3939780c2cede04c5039f99d3be8f6d)
print("c0: c1: c0:")
print(0x23457fc9211678f7c55dfc832c90c8de217d014acf314ce1c0726d3fbdc83387)
print("c0: c1: c1:")
print(0x14734b37d79ad07e0ff380f01ba22bbc130a56de728087891fde7b1bf8882900)
print("c0: c2: c0:")
print(0x2915bbd2f5c51b9e345541b47669819248ab79128ddff897dd30d14a312ca2bc)
print("c0: c2: c1:")
print(0x278984451aead9313b9e0caaf643224d6d4ba8c5ecbdcaebaa4d6eff7085654f)
print("c1: c0: c0:")
print(0x24c648be2bce831230b00ccbde4852c84615b8fe8117797d0fcce882f4eda2a1)
print("c1: c0: c1:")
print(0x0e8a6d75985a23893608f67987f8c4167556b447793ef10dc744da9d61a39af1)
print("c1: c1: c0:")
print(0x00b43df7b5761f48450c5c88649db7143b6845ea298c418cd7fd1b21ef4a3a37)
print("c1: c1: c1:")
print(0x0cd96d85bf6e3e4159542c63a7945df870d05336e1df64cdcbf45ab59a3a6281)
print("c1: c2: c0:")
print(0x15db8add9a14536985eedfeaa7608c565f0d2ae9c66d05c5365917c0cfaeaa23)
print("c1: c2: c1:")
print(0x0288574d4367d77a8f3c4490bb7b2a9e5bde587f7ad5b1c9d1b28c9454af7126)


print(" ")
print("Frobenius power 5 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x05e27b5a7fcbee5e86983bfddb790cb5f3edd310a5a2ec88771cec7d04be6dda)
print("c0: c1: c0:")
print(0x05e74181fd2dbac6c308116704fa27465a20994731dff0f01a56e90d8e95f7cc)
print("c0: c1: c1:")
print(0x101ba3e8029c4265924122df98416f8652f1111a60ed596d79c61c1fa542d47f)
print("c0: c2: c0:")
print(0x1efcc9a4826fae38b309d28f8e55e30e82ed56a3ec81cc231806b8c6106b41ec)
print("c0: c2: c1:")
print(0x0535496d9f69ea3f84deb0507a19f7bfd2ba8ac6610f364dcfa32fe685e7da8a)
print("c1: c0: c0:")
print(0x0e0b13db8b99ca60f73b479e9fcf782374a8b43e6c92ae62b3863a7e19bc7abf)
print("c1: c0: c1:")
print(0x1c3a62f60869e6880f4c9d52171703900134f7f11445d9fae94235e751fe1f21)
print("c1: c1: c0:")
print(0x0513f9a8249d41d310130a858912c24fc5ef91015333cc856fbd655f8c23a683)
print("c1: c1: c1:")
print(0x04eedb7fd6456d3decc28e3110e69bbda3a9f126a1960b1d0e416b4aa92dee15)
print("c1: c2: c0:")
print(0x024037ff66b93f2fc890312b2a1b04f1506ab82567ec2d930ff7011d51bc7989)
print("c1: c2: c1:")
print(0x13c5ec3d8b5130055db801a53034aa4751008b157c9a3cc96fede989b80d826f)


print(" ")
print("Frobenius power 6 Result Parameters")
print("c0: c0: c0:")
print(0x2eee0ff412fae0786e9ee53371324a655666ef02c578022a045fbd9286afab2a)
print("c0: c0: c1:")
print(0x2a81d3186165b1cb31b809b8a6084ba7a3939780c2cede04c5039f99d3be8f6d)
print("c0: c1: c0:")
print(0x11349e4ff173fbc46f8ae5cbaa4ce037cbb6a8010b231cbaa5bfe811f9008c2b)
print("c0: c1: c1:")
print(0x2a4061f36217f2786b22fc053b91adf9d45bad9d1b4d335ad27d361ab0f8fc83)
print("c0: c2: c0:")
print(0x1d912a888a12cac20cc0a072fddf826f71f12cb483437f434a57cfd19071ff72)
print("c0: c2: c1:")
print(0x1237866695e4606fc4079ff57252718705463465e3a8401d32c51f9b4bda508f)
print("c1: c0: c0:")
print(0x04c9339f1b518512fc7757e37ad043dd01741edb50f0a0ca364aef30e7d0a4e7)
print("c1: c0: c1:")
print(0x05f217c369757724e62ae3b33b5df5cbb744637129e3c836929dd2a41a9cea13)
print("c1: c1: c0:")
print(0x2fb0107b2bbb80e17343e92e1ce3a1495c1924a73ee58900642370f4e932c310)
print("c1: c1: c1:")
print(0x238ae0ed21c361e85efc1952d9ecfa6526b1175a869265bf702c31613e429ac6)
print("c1: c2: c0:")
print(0x02f223d924e8156f9ae7abd9b77a96f6a363bb5547d7bcc32568e9f7926d6b3f)
print("c1: c2: c1:")
print(0x27e73628bf6f754b88679baf2062a5a6916ac84851e31fa6eb512f2406d6571f)
