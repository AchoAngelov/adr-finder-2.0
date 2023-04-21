// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dataEn = [
  {
    class: '1',
    className: 'Explosives',
    substances: [
      {
        UN: '0007',
        substanceName: 'Gunpowder',
        description:
          'Gunpowder is a mixture of sulfur, charcoal, and potassium nitrate that is highly explosive',
      },
      {
        UN: '0032',
        substanceName: 'Dynamite',
        description:
          'Dynamite is a powerful explosive made from nitroglycerin, an oily liquid that is extremely volatile',
      },
    ],
  },
  {
    class: '2',
    className: 'Gases',
    substances: [
      {
        UN: '1002',
        substanceName: 'Propane',
        description:
          'Propane is a flammable gas that is commonly used as a fuel for heating and cooking',
      },
      {
        UN: '1066',
        substanceName: 'Acetylene',
        description:
          'Acetylene is a highly combustible gas that is used for welding and cutting metals',
      },
    ],
  },
  {
    class: '3',
    className: 'Flammable liquids',
    substances: [
      {
        UN: '1203',
        substanceName: 'Gasoline',
        description:
          'Gasoline is a highly flammable liquid that is used as a fuel for internal combustion engines',
      },
      {
        UN: '1863',
        substanceName: 'Fuel oil',
        description:
          'Fuel oil is a viscous liquid that is used as a fuel for heating and powering industrial equipment',
      },
    ],
  },
  {
    class: '4',
    className: 'Flammable solids',
    substances: [
      {
        UN: '1330',
        substanceName: 'Matches',
        description:
          'Matches are small sticks coated with a mixture of chemicals that ignite when struck against a rough surface',
      },
      {
        UN: '1325',
        substanceName: 'Sodium metal',
        description:
          'Sodium metal is a highly reactive metal that ignites spontaneously in air and reacts violently with water',
      },
    ],
  },
  {
    class: '5',
    className: 'Oxidizing substances',
    substances: [
      {
        UN: '1458',
        substanceName: 'Chlorine',
        description:
          'Chlorine is a highly reactive gas that is used in the production of a wide range of chemicals',
      },
      {
        UN: '1495',
        substanceName: 'Nitric acid',
        description:
          'Nitric acid is a highly corrosive and reactive liquid that is used in the production of fertilizers, explosives, and other chemicals',
      },
    ],
  },
  {
    class: '6',
    className: 'Toxic and infectious substances',
    substances: [
      {
        UN: '1700',
        substanceName: 'Chloroform',
        description:
          'Chloroform is a colorless liquid with a pleasant, non-irritating odor that was once used as an anesthetic',
      },
      {
        UN: '2811',
        substanceName: 'Sodium cyanide',
        description:
          'Sodium cyanide is a highly toxic and reactive compound that is used in the mining industry to extract gold and other precious metals from ores',
      },
    ],
  },
  {
    class: 7,
    className: 'Radioactive materials',
    substances: [
      {
        UN: 2910,
        substanceName: 'Uranium hexafluoride',
        description:
          'Uranium hexafluoride is a compound of uranium that is used in the nuclear fuel cycle',
      },
      {
        UN: 2977,
        substanceName: 'Radioactive material, excepted package',
        description:
          'Radioactive material, excepted package, is a type of package that contains small amounts of radioactive material, which are exempt from certain transport requirements',
      },
    ],
  },
  {
    class: 8,
    className: 'Corrosive substances',
    substances: [
      {
        UN: 1824,
        substanceName: 'Sodium hydroxide',
        description:
          'Sodium hydroxide is a highly caustic and reactive compound that is commonly used in industrial and laboratory settings',
      },
      {
        UN: 1789,
        substanceName: 'Hydrochloric acid',
        description:
          'Hydrochloric acid is a corrosive acid that is used in many industrial processes, such as the production of PVC and the pickling of steel',
      },
    ],
  },
  {
    class: 9,
    className: 'Miscellaneous dangerous substances and articles',
    substances: [
      {
        UN: 3077,
        substanceName: 'Environmentally hazardous substance, solid, n.o.s.',
        description:
          'Environmentally hazardous substance, solid, n.o.s. is a type of substance that poses a risk to the environment and is not otherwise classified as a hazardous substance',
      },
      {
        UN: 3268,
        substanceName: 'Elevated temperature liquid, n.o.s.',
        description:
          'Elevated temperature liquid, n.o.s. is a type of liquid that is transported at a temperature above its normal boiling point and may pose a risk of explosion or fire',
      },
    ],
  },
]

export default function handler(req, res) {
  res.status(200).json(dataEn)
}
