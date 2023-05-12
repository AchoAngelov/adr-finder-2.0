// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
  {
    class: '1',
    className: {
      en: 'Explosives',
      bg: 'Експлозивни вещества',
    },
    substances: [
      {
        UN: '0007',
        substanceName: {
          en: 'Gunpowder',
          bg: 'Барут',
        },
        description: {
          en: 'Gunpowder is a mixture of sulfur, charcoal, and potassium nitrate that is highly explosive',
          bg: 'Барутът е смес от сяра, въглен и калиев нитрат, който е силно експлозивен',
        },
      },
      {
        UN: '0032',
        substanceName: {
          en: 'Dynamite',
          bg: 'Динамит',
        },
        description: {
          en: 'Dynamite is a powerful explosive made from nitroglycerin, an oily liquid that is extremely volatile',
          bg: 'Динамитът е мощен взривоопасен материал, направен от нитроглицерин, маслена течност, която е изключително летлива',
        },
      },
    ],
  },
  {
    class: '2',
    className: {
      en: 'Gases',
      bg: 'Газове',
    },
    substances: [
      {
        UN: '1002',
        substanceName: {
          en: 'Propane',
          bg: 'Пропан',
        },
        description: {
          en: 'Propane is a flammable gas that is commonly used as a fuel for heating and cooking',
          bg: 'Пропанът е запалителен газ, който се използва най-често като гориво за отопление и готвене',
        },
      },
      {
        UN: '1066',
        substanceName: {
          en: 'Acetylene',
          bg: 'Ацетилен',
        },
        description: {
          en: 'Acetylene is a highly combustible gas that is used for welding and cutting metals',
          bg: 'Ацетиленът е изключително запалителен газ, който се използва за заваряване и рязане на метали',
        },
      },
    ],
  },
  {
    class: '3',
    className: {
      en: 'Flammable liquids',
      bg: 'Запалими течности',
    },
    substances: [
      {
        UN: '1203',
        substanceName: {
          en: 'Gasoline',
          bg: 'Бензин',
        },
        description: {
          en: 'Gasoline is a highly flammable liquid that is used as a fuel for internal combustion engines',
          bg: 'Бензинът е силно запалима течност, която се използва като гориво за двигатели с вътрешно горене',
        },
      },
      {
        UN: '1863',
        substanceName: {
          en: 'Fuel oil',
          bg: 'Гopивo',
          description: {
            en: 'Fuel oil is a viscous liquid that is used as a fuel for heating and powering industrial equipment',
            bg: 'Горивото е вискозна течност, която се използва като гориво за отопление и захранване на промишлено оборудване',
          },
        },
      },
    ],
  },
  {
    class: '4',
    className: {
      en: 'Flammable solids',
      bg: 'Запалими твърди вещества',
    },
    substances: [
      {
        UN: '1330',
        substanceName: {
          en: 'Matches',
          bg: 'Кибрити',
        },
        description: {
          en: 'Matches are small sticks coated with a mixture of chemicals that ignite when struck against a rough surface',
          bg: 'Кибритите са малки пръчки покрити със смес от химикали, които възпламеняват, когато се удрят срещу груба повърхност',
        },
      },
      {
        UN: '1325',
        substanceName: {
          en: 'Sodium metal',
          bg: 'Натриев метал',
        },
        description: {
          en: 'Sodium metal is a highly reactive metal that ignites spontaneously in air and reacts violently with water',
          bg: 'Натриевият метал е изключително реактивен метал, който се възпламенява самоволно във въздуха и реагира насилствено с вода',
        },
      },
    ],
  },
  {
    class: '5',
    className: {
      en: 'Oxidizing substances',
      bg: 'Окисляващи вещества',
    },
    substances: [
      {
        UN: '1458',
        substanceName: {
          en: 'Chlorine',
          bg: 'Хлор',
        },
        description: {
          en: 'Chlorine is a highly reactive gas that is used in the production of a wide range of chemicals',
          bg: 'Хлорът е изключително реактивен газ, който се използва в производството на широка гама химикали',
        },
      },
      {
        UN: '1495',
        substanceName: {
          en: 'Nitric acid',
          bg: 'Азотна киселина',
        },
        description: {
          en: 'Nitric acid is a highly corrosive and reactive liquid that is used in the production of fertilizers, explosives, and other chemicals',
          bg: 'Азотната киселина е изключително корозивна и реактивна течност, която се използва в производството на торове, експлозиви и други химикали',
        },
      },
    ],
  },
  {
    class: '6',
    className: {
      en: 'Toxic and infectious substances',
      bg: 'Токсични и инфекциозни вещества',
    },
    substances: [
      {
        UN: '1700',
        substanceName: {
          en: 'Chloroform',
          bg: 'Хлороформ',
        },
        description: {
          en: 'Chloroform is a colorless liquid with a pleasant, non-irritating odor that was once used as an anesthetic',
          bg: 'Хлороформът е безцветна течност с приятен, безраздразнителен мирис, който някога се използваше като анестетик',
        },
      },
      {
        UN: '2811',
        substanceName: {
          en: 'Sodium cyanide',
          bg: 'Натриев цианид',
        },
        description: {
          en: 'Sodium cyanide is a highly toxic and reactive compound that is used in the mining industry to extract gold and other precious metals from ores',
          bg: 'Натриевият цианид е изключително токсично и реактивно съединение, което се използва в минната индустрия за екстракция на злато и други благородни метали от руди',
        },
      },
    ],
  },
  {
    class: '7',
    className: {
      en: 'Radioactive materials',
      bg: 'Радиоактивни материали',
    },
    substances: [
      {
        UN: '2910',
        substanceName: {
          en: 'Uranium hexafluoride',
          bg: 'Ураниев хексафлуорид',
        },
        description: {
          en: 'Uranium hexafluoride is a compound of uranium that is used in the nuclear fuel cycle',
          bg: 'Ураниевият хексафлуорид е съединение на ураниум, което се използва в ядрения горивен цикъл',
        },
      },
      {
        UN: '2977',
        substanceName: {
          en: 'Radioactive material, excepted package',
          bg: 'Радиоактивен материал, с изключение на опаковката',
        },
        description: {
          en: 'Radioactive material, excepted package, is a type of package that contains small amounts of radioactive material, which are exempt from certain transport requirements',
          bg: 'Радиоактивният материал, с изключение на опаковката, е вид опаковка, която съдържа малки количества радиоактивен материал, които са освободени от определени изисквания за транспорт',
        },
      },
    ],
  },
  {
    class: 8,
    className: { en: 'Corrosive substances', bg: 'Корозивни вещества' },
    substances: [
      {
        UN: '1824',
        substanceName: {
          en: 'Sodium hydroxide',
          bg: 'Натриев хидроксид',
        },
        description: {
          en: 'Sodium hydroxide is a highly caustic and reactive compound that is commonly used in industrial and laboratory settings',
          bg: 'Натриевият хидроксид е изключително каустично и реактивно съединение, което се използва често в промишлените и лабораторни условия',
        },
      },
      {
        UN: '1789',
        substanceName: {
          en: 'Hydrochloric acid',
          bg: 'Хидрохлорна киселина',
        },
        description: {
          en: 'Hydrochloric acid is a corrosive acid that is used in many industrial processes, such as the production of PVC and the pickling of steel',
          bg: 'Хидрохлорната киселина е корозивна киселина, която се използва в множество промишлени процеси, като производството на ПВЦ и обезмасляването на стомана',
        },
      },
    ],
  },
  {
    class: 9,
    className: {
      en: 'Miscellaneous dangerous substances and articles',
      bg: 'Разнообразни опасни вещества и артикули',
    },
    substances: [
      {
        UN: '3077',
        substanceName: {
          en: 'Environmentally hazardous substance, solid, n.o.s.',
          bg: 'Вещество с опасност за околната среда, твърдо, н.с.',
        },
        description: {
          en: 'Environmentally hazardous substance, solid, n.o.s. is a type of substance that poses a risk to the environment and is not otherwise classified as a hazardous substance',
          bg: 'Вещество с опасност за околната среда, твърдо, н.с. е вид вещество, което представлява риск за околната среда и не се класифицира като опасно вещество',
        },
      },
      {
        UN: '3268',
        substanceName: {
          en: 'Elevated temperature liquid, n.o.s.',
          bg: 'Течност с повишена температура, н.с.',
        },
        description: {
          en: 'Elevated temperature liquid, n.o.s. is a type of liquid that is transported at a temperature above its normal boiling point and may pose a risk of explosion or fire',
          bg: 'Течност с повишена температура, н.с. е вид течност, която се транспортира при  температуратура над нейната нормална температура на врие и може да представлява риск от експлозия или пожар',
        },
      },
    ],
  },
]

export default function handler(req, res) {
  const { search } = req.query

  const filteredData = data
    .filter((item) =>
      item.substances.some((substance) => {
        return substance.UN.startsWith(search)
      }),
    )
    .map((item) => ({
      substances: item.substances.filter((substance) =>
        substance.UN.startsWith(search),
      ),
    }))

  res.status(200).json(filteredData)
}
