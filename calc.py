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