const REG_64_BIT_SIZE = 64;
const REG_32_BIT_SIZE = 32;
const REG_16_BIT_SIZE = 16;
const REG_8_BIT_SIZE = 8;

export default [
/* RAX */
  {
    name: "rax",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "eax",
    parent: "rax",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "ax",
    parent: "eax",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "al",
    parent: "ax",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RBX */
  {
    name: "rbx",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "ebx",
    parent: "rbx",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "bx",
    parent: "ebx",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "bl",
    parent: "bx",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RXC */
  {
    name: "rcx",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "ecx",
    parent: "rcx",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "cx",
    parent: "ecx",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "cl",
    parent: "cx",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RDX */
  {
    name: "rdx",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "edx",
    parent: "rdx",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "dx",
    parent: "edx",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "dl",
    parent: "dx",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RSI */
  {
    name: "rsi",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "esi",
    parent: "rsi",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "si",
    parent: "esi",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "sil",
    parent: "si",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RDI */
  {
    name: "rsi",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "edi",
    parent: "rsi",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "di",
    parent: "edi",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "dil",
    parent: "di",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RBP */
  {
    name: "rbp",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "ebp",
    parent: "rbp",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "bp",
    parent: "ebp",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "bpl",
    parent: "bp",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
/* RSP */
  {
    name: "rsp",
    parent: null,
    architecture: "x64",
    size: REG_64_BIT_SIZE,
  },
  {
    name: "esp",
    parent: "rsp",
    architecture: "x86",
    size: REG_32_BIT_SIZE,
  },
  {
    name: "sp",
    parent: "esp",
    architecture: "x86",
    size: REG_16_BIT_SIZE,
  },
  {
    name: "spl",
    parent: "sp",
    architecture: "x86",
    size: REG_8_BIT_SIZE,
  },
];